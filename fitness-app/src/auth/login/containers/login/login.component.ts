import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';

@Component({
    selector:'app-w3hTech-login',
    template:`
        <div>
            <app-w3hTech-auth-form
                (submitted)="onLoginUser($event)">

                <h1> Login </h1>               

                <button mat-raised-button> Login </button>

                <a routerLink="/auth/register"> Not Registerd ?</a>
               
                <label class="error"  *ngIf="error">
                    {{ error }}
                </label>

            </app-w3hTech-auth-form>
        </div>
    `
})
export class LoginComponent {

    error!: string;

    constructor( 
        private authService: AuthService,
        private router: Router,
     ) { }

async onLoginUser( event: FormGroup ): Promise<any>{
    const { email, password } = event.value;
    try{
        await this.authService.loginUser(email, password);

        // success
        this.router.navigate(['/']);

    } catch( err ) {
        this.error = err.message;   //specific to firebase
    }
}

}