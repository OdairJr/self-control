import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Bill } from 'src/app/models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getBills(): Observable<Array<Bill>> {
    return this.httpClient.get<Array<Bill>>('https://my-json-server.typicode.com/OdairJr/self-control/bills')
      .pipe(
        tap(result => console.log('Resposta da API: ', result)),
        catchError(this.handleError('Lendo Lista', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T> (operation = 'operation', result?: T) {
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
