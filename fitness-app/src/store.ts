import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

// services
import { User } from './auth/shared/services/auth/auth.service';
import { Meal } from './health/shared/services/meals/meals.service';
import { Workout } from './health/shared/services/workouts/workouts.service';


export interface State {
    user?: User,
    meals?: Meal[],
    workouts?: Workout[],
    [key: string]: any,
}

const state: State = { 
    user: undefined,
    meals: undefined,
    workouts: undefined,
};

@Injectable({
    providedIn: 'root'
})
export class Store {
    //2
    private subject = new BehaviorSubject<State>( state );
    
    //3
    private store = this.subject
        .asObservable()
        .pipe( distinctUntilChanged() );

    // 1
    set( name: string, state: any): void {
        this.subject.next({ ...this.value, [name]: state, });
    }

    get value(): any {
        return this.subject.value;
    }

    select<T>( name: string ): Observable<T> {
        return this.store.pipe( pluck( name ) );
    }

}