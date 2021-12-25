import { Injectable } from '@angular/core';

// store
import { Store } from 'store';

// rxjs
import { tap } from 'rxjs/operators';

// third- party
import { AngularFireAuth } from '@angular/fire/auth';

export interface User {
    email: string,
    uid: string,
    authenticated: boolean,
}

@Injectable()
export class AuthService {

    constructor(
        private af: AngularFireAuth,   
        private store: Store,     
    ) { }

    // Store 
    auth$ = this.af.authState
        .pipe(
            tap( next => {
                // fall back - when user is not logged in
                    if( ! next ) {
                        this.store.set( 'user', null );
                        return;
                    }

                // success - when user is logged in
                    const user: User = {
                        email: next.email as string,
                        uid: next.uid,
                        authenticated: true,
                    };

                    this.store.set( 'user', user );
            })
        )


    // Firebase methods

    createUser( email: string, password: string ): Promise<any> {
        return this.af
          .createUserWithEmailAndPassword( email, password);
    }

    loginUser(  email: string, password: string ): Promise<any> {
        return this.af
            .signInWithEmailAndPassword( email, password);
    }

    logoutUser(): Promise<any> {
        return this.af.signOut();
    }

    // ------- helper ---------

    get authState() {
        return this.af.authState;
    }

    get user() {
        return this.af.currentUser;
    }

}