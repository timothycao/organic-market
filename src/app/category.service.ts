import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<any> {
    return this.db
      .list('/categories', ref => ref.orderByChild('name'))
      .snapshotChanges()
      .pipe(map(categories => {
        return categories.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      }))
  }

}
