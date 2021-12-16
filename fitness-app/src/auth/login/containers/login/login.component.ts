import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector:'app-w3hTech-login',
    template:`
        <div>
            <app-w3hTech-auth-form
                (submitted)="onLoginUser($event)">

                <h1> Login </h1>

                <button mat-raised-button> Login </button>

                <a routerLink="/auth/register"> Not Registerd ?</a>

            </app-w3hTech-auth-form>
        </div>
    `
})
export class LoginComponent {

onLoginUser( event: FormGroup ): void{
    console.log(`inside login `); console.log(event.value);
}

}