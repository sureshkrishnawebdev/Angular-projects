import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector:'app-w3hTech-register',
    template:`
        <div>
        <app-w3hTech-auth-form
        (submitted)="onRegisterUser($event)">
    
            <h1> Register </h1>
        
            <button mat-raised-button color="button-css"> Create account </button>
        
            <a routerLink="/auth/login"> Already have an account ? </a>
            
        </app-w3hTech-auth-form>
            
        </div>
    `
})
export class RegisterComponent {

onRegisterUser( event: FormGroup ): void{
    console.log(`isnide register`); console.log(event.value);
}
    
}