import { Injectable } from '@angular/core';

import { AuthService } from 'src/auth/shared/services/auth/auth.service';

import { Store } from 'store';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// third-party
import { AngularFireDatabase } from '@angular/fire/database';

export interface Meal{
    name: string,
    ingredients: string[],
    timestamp: number,
    $key: string,
    $exists: () => boolean,
}

@Injectable()
export class MealsService {

    private uidBSubject = new BehaviorSubject<string>('');
    
    constructor( 
        private store: Store,
        private db: AngularFireDatabase,
    ) { }
    
    // meals/51jbVJHvHpOLP1KzXJ8CukHnVrn - to be replaced with dynamic

    meals$: Observable<any[]> = this.db.list(`meals/51jbVJHvHpOLP1KzXJ8CukHnVrn1`).valueChanges()
        .pipe(
            tap( next => {
                this.store.set('meals', next);
            })
        )

    // ------- helper --------- 
    setUid( uid: string ) {
        this.uidBSubject.next( uid );
    }

    get uid() {
        return this.uidBSubject.value;
    }

}