import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';

@Component({
    selector:'app-w3hTech-register',
    template:`
        <div>
        <app-w3hTech-auth-form
        (submitted)="onRegisterUser($event)">
    
            <h1> Register </h1>
        
            <button mat-raised-button color="button-css"> Create account </button>
        
            <a routerLink="/auth/login"> Already have an account ? </a>

            <label class="error"  *ngIf="error">
            {{ error }}
            </label>
            
        </app-w3hTech-auth-form>
            
        </div>
    `
})
export class RegisterComponent {

    error!: string;

    constructor( 
        private authService: AuthService,
        private router:Router,
     ) { }

async onRegisterUser( event: FormGroup ): Promise<any>{
    const { email, password } = event.value;
    try{
        await this.authService.createUser(email, password);

        // success
        this.router.navigate(['/']);

    } catch( err ) {
        this.error = err.message;   //specific to firebase
    }
}
}
    