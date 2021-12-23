import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

import { map } from 'rxjs/operators';

@Injectable() 
export class AuthGuard implements CanActivate{

constructor(
    private authService: AuthService,
    private router: Router,
) { }

canActivate() {
    return this.authService.authState
        .pipe(
            map((user) => {
                // fall back
                if( ! user ){
                    this.router.navigate(['/auth/login']);
                }

                // success
                return !!user;
            })
        )
}
    
}