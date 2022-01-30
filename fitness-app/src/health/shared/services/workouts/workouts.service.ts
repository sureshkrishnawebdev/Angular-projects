import { Injectable } from '@angular/core';

import { AuthService } from 'src/auth/shared/services/auth/auth.service';

import { Store } from 'store';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

// third-party
import { AngularFireDatabase } from '@angular/fire/database';

export interface Workout{
    name: string,
    type: string,
    strength: string,
    endurance: string,
    timestamp: number,
    $key: string,
    $exists: () => boolean,
    workoutKey:string;
}

@Injectable()
export class WorkoutsService {

    private uidBSubject = new BehaviorSubject<string>('');
    
    constructor( 
        private store: Store,
        private db: AngularFireDatabase,
    ) { }
    
    // workouts/51jbVJHvHpOLP1KzXJ8CukHnVrn - to be replaced with dynamic

    workouts$: Observable<any[]> = this.db.list(`workouts/Fe694Obd4nd0uwk9fpWLzfiLh883`).valueChanges()
        .pipe(
            tap( next => {      
                
                let workoutsArr:any[];
                let workoutsObj: any;
                let workoutsObjKey: any[];
                let workouts:any[];

                workoutsArr =[...next];

                this.db.object('workouts/Fe694Obd4nd0uwk9fpWLzfiLh883')
                    .valueChanges()
                    .subscribe((val) => {
                        
                        workoutsObj = val as any;                        
                        if(workoutsObj){
                            workoutsObjKey = Object.keys(workoutsObj);                             
                            workouts = workoutsArr.map( (workout, index) => ({ ...workout, workoutKey:workoutsObjKey[index] }) );                                
                        }                                 
                        this.store.set('workouts', (workouts) || of(null));
                    })                            
            })
        )
    
    getWorkout( key: string ){  
        // fallback      
        if( !key ){ return  of({}) };

        return  this.store.select<Workout[]>('workouts')
                .pipe(
                    filter<Workout[]>( Boolean ),
                    map( (workouts: Workout[]) => workouts.find( (workout: Workout) => (workout.workoutKey === key)) )
                )
    }

    addWorkout( workout: Workout ) {        
        return this.db.list(`workouts/Fe694Obd4nd0uwk9fpWLzfiLh883`).push( workout );
    }

    updateWorkout( key:string, workout: Workout ) {
        return this.db.object(`workouts/Fe694Obd4nd0uwk9fpWLzfiLh883/${key}`).update( workout );
    }

    removeWorkout( key: string ){
        return this.db.list(`workouts/Fe694Obd4nd0uwk9fpWLzfiLh883`).remove( key );
    }

    // ------- helper --------- 
    setUid( uid: string ) {
        this.uidBSubject.next( uid );
    }

    get uid() {
        return this.uidBSubject.value;
    }

}