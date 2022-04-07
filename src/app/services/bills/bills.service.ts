import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, map } from 'rxjs';
import { Bill } from 'src/app/models/bill.model';
import { BaseService } from '../base/base.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BillsService extends BaseService<Bill> {

  constructor(
    private readonly firestore: AngularFirestore,
  ) {
    super(firestore, 'bills');
  }

  public getBills(): Observable<Array<Bill>> {
    // return this.httpClient.get<Array<Bill>>('https://my-json-server.typicode.com/OdairJr/self-control/bills')
    return this.getAll()
      .pipe(
        tap(result => {
          console.log('Resposta da API: ', result);
        }),
        map((result) => result.map(bill => new Bill({ ...bill, paymentDate: this.convertToDate(bill.paymentDate) }))),
        catchError(this.handleError('Erro ao listar', []))
      );
  }

  private convertToDate(date: any): Date {
    return new Date(date.year, date.month - 1, date.day);
  }

  public async addBill(bill: Bill) {
    delete bill.id;

    await this.create({
      ...bill
    }).catch(this.handleError('Erro ao cadastrar', []));
  }

  // updatePolicy(policy: Policy) {
  //   delete policy.id;
  //   this.update(policy);
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
