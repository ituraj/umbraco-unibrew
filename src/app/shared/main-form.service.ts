import { Injectable } from '@angular/core';
import { MainFormItem } from './main-form.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MainFormService {
  formData: MainFormItem;

  constructor(private firestore: AngularFirestore) {}
  getMainForm() {
    return this.firestore
      .collection('main-form', ref => ref.orderBy('timeCreated', 'asc'))
      .snapshotChanges();
  }
}
