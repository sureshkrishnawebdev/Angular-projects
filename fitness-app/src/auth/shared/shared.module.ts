import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// component
import { AuthFormComponent } from './components/auth-form/auth-form.component';

//material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
    declarations:[
        AuthFormComponent,
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
    ],
    exports:[
        AuthFormComponent
    ],
})
export class SharedModule { }