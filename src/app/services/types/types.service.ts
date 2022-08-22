import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Type } from 'src/app/models/bill.model';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class TypesService extends BaseService<Type> {

  constructor(
    private readonly firestore: AngularFirestore,
  ) {
    super(firestore, 'types');
  }
}
