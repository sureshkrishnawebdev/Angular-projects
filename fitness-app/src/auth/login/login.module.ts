import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { RouterModule, Routes } from '@angular/router';

// shared
import { SharedModule } from '../shared/shared.module';

// container
import { LoginComponent } from './containers/login/login.component';

//material
import { MatButtonModule } from '@angular/material/button';


const routes:Routes = [
    { path: '', component: LoginComponent },
]

@NgModule({
    declarations:[
        LoginComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        MatButtonModule,      
    ],
})
export class LoginModule { }