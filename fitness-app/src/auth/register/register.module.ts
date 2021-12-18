import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { RouterModule, Routes } from '@angular/router';

// shared
import { SharedModule } from '../shared/shared.module';

// container
import { RegisterComponent } from './containers/register/register.component';

//material
import { MatButtonModule } from '@angular/material/button';


const routes:Routes = [
    { path: '', component: RegisterComponent },
]


@NgModule({
    declarations:[
        RegisterComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),        
        MatButtonModule,
    ],
})
export class RegisterModule { }