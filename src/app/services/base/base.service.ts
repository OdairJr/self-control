import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { BaseModel } from 'src/app/models/base/base.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends BaseModel> {

  constructor(private _firestore: AngularFirestore, @Inject(String) private _collectionName: string) { }

  getAll(): Observable<T[]> {
    return this._firestore.collection<T>(this._collectionName).snapshotChanges()
      .pipe(map((response) => {
        return response.reduce<Array<T>>((previous, current) => {
          previous.push({
            id: current.payload.doc.id,
            ...current.payload.doc.data()
          });
          return previous;
        }, []);
      }));
  }

  create(object: T) {
    return this._firestore.collection<T>(this._collectionName).add(object);
  }

  update(object: T) {
    delete object.id;
    this._firestore.doc(`${this._collectionName}/${object.id}`).update(object);
  }

  delete(objectId: string) {
    this._firestore.doc(`${this._collectionName}/${objectId}`).delete();
  }
}
