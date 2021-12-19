import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

// services
import { User } from './auth/shared/services/auth/auth.service';


export interface State {
    user?: User,
    [key: string]: any,
}

const state: State = { 
    user: undefined
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