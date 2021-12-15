import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// component
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
    declarations:[
        AuthFormComponent,
    ],
    imports:[
        ReactiveFormsModule
    ],
    exports:[
        AuthFormComponent
    ],
})
export class SharedModule { }