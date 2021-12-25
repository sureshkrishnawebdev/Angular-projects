import { Injectable, OnInit } from '@angular/core';

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
export class MealsService implements OnInit{

    // uid!: string | undefined;
    // meals$!: Observable<any[]>;
    private uidBSubject = new BehaviorSubject<string>('');
    
    constructor( 
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        // this.getUid();
    }        

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

    // Pending -    Type 'unknown' is not assignable to type 'Meal'.  
    // meals$: Observable<Meal[]> = this.db.list(`meals/${this.uid}`).valueChanges()
    // .pipe(
    //     tap( next => {
    //         this.store.set('meals', next);
    //     })
    // )   

    // get uid() {
    //     return ( async () => {
    //         try{
    //             let user = await this.authService.user;           
    //             console.log(`object`); console.log( user?.uid);
    //             return  user?.uid;

    //         } catch( err ) {
    //             throw new Error( err.message );
    //         }
    //     })();
    // }

    // async getUid() {
    //       try{
    //         let user = await this.authService.user;                      
    //         this.uid = user?.uid;
    //         this.invokeMealsObservable();

    //       } catch ( err ) {
    //         throw new Error( err.message ); // Pending
    //       } 
    // }

    // invokeMealsObservable(){
    //     this.meals$ = this.db.list(`meals/${this.uid}`).valueChanges()
    //     .pipe(
    //         tap( next => {
    //             this.store.set('meals', next);
    //         })
    //     )
    // }

}