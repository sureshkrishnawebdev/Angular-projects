import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared
import { SharedModule } from '../shared/shared.module';

// container
import { RegisterComponent } from './containers/register/register.component';

const routes:Routes = [
    { path: '', component: RegisterComponent },
]


@NgModule({
    declarations:[
        RegisterComponent,
    ],
    imports:[
        RouterModule.forChild(routes),
        SharedModule,
    ],
})
export class RegisterModule { }