import { Injectable } from '@angular/core';

import { AuthService } from 'src/auth/shared/services/auth/auth.service';

import { Store } from 'store';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

// third-party
import { AngularFireDatabase } from '@angular/fire/database';

export interface Meal{
    name: string,
    ingredients: string[],
    timestamp: number,
    $key: string,
    $exists: () => boolean,
    mealKey:string;
}

@Injectable()
export class MealsService {

    private uidBSubject = new BehaviorSubject<string>('');
    
    constructor( 
        private store: Store,
        private db: AngularFireDatabase,
    ) { }
    
    // meals/51jbVJHvHpOLP1KzXJ8CukHnVrn - to be replaced with dynamic

    meals$: Observable<any[]> = this.db.list(`meals/Fe694Obd4nd0uwk9fpWLzfiLh883`).valueChanges()
        .pipe(
            tap( next => {      
                
                let mealsArr:any[];
                let mealsObj: any;
                let mealsObjKey: any[];
                let meals:any[];

                mealsArr =[...next];

                this.db.object('meals/Fe694Obd4nd0uwk9fpWLzfiLh883')
                    .valueChanges()
                    .subscribe((val) => {
                        
                        mealsObj = val as any;                        
                        if(mealsObj){
                            mealsObjKey = Object.keys(mealsObj);                             
                            meals = mealsArr.map( (meal, index) => ({ ...meal, mealKey:mealsObjKey[index] }) );                                
                        }                                 
                        this.store.set('meals', (meals) || of(null));
                    })                            
            })
        )
    
    getMeal( key: string ){        
        if( !key ){ return  of({}) };
        return  this.store.select<Meal[]>('meals')
                .pipe(
                    filter<Meal[]>( Boolean ),
                    map( (meals: Meal[]) => meals.find( (meal: Meal) => meal.mealKey === key ) )
                )
    }

    addMeal( meal: Meal ) {        
        return this.db.list(`meals/Fe694Obd4nd0uwk9fpWLzfiLh883`).push( meal );
    }

    removeMeal( key: string ){
        return this.db.list(`meals/Fe694Obd4nd0uwk9fpWLzfiLh883`).remove( key );
    }

    // ------- helper --------- 
    setUid( uid: string ) {
        this.uidBSubject.next( uid );
    }

    get uid() {
        return this.uidBSubject.value;
    }

}