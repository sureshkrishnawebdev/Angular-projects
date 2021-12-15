import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared
import { SharedModule } from '../shared/shared.module';

// container
import { LoginComponent } from './containers/login/login.component';

const routes:Routes = [
    { path: '', component: LoginComponent },
]

@NgModule({
    declarations:[
        LoginComponent,
    ],
    imports:[
        RouterModule.forChild(routes),
        SharedModule,
    ],
})
export class LoginModule { }