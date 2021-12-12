import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Concept } from './concepts.interface';

@Injectable({
  providedIn: 'root'
})
export class ConceptService {

  constructor(
    private fs:AngularFirestore,
    ) 
  { }

  getTopConcepts( conceptsLimit:number ): Observable<Concept[]>{
    return this.fs
    .collection<Concept>('top-concepts',
       ref => ref.limit(conceptsLimit).orderBy('name'))
    .valueChanges();
  }

}
