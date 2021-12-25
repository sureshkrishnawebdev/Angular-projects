import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector:'app-w3hTech-auth-form',
    templateUrl:'./auth-form.component.html',
    styleUrls:['./auth-form.component.scss'],
})
export class AuthFormComponent { 

constructor( 
    private fb:FormBuilder
) { }

// Decorators
@Output()
submitted = new EventEmitter<FormGroup>();

// Error state
matcher = new MyErrorStateMatcher();

//form
form = this.fb.group({
    email:['', [Validators.required, Validators.email] ],
    password:['', Validators.required],
})

// Validators

get isEmailInvalid() {
    const control = this.form.get('email');
    return (control?.hasError('required') && control.touched)
            || (control?.hasError('email') && control.touched);
}

get isPasswordInvalid() {
    const control = this.form.get('password');
    return control?.hasError('required') && control.touched;
}

onSubmit(): void {
    // fallback
    if( ! this.form.valid ){  return;  }

    // success
    this.submitted.emit( this.form );
}


}