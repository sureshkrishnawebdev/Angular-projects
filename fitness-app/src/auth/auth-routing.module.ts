import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// feature modules

const routes:Routes = [
    {  path: 'auth',
       children: [
           { path: '', pathMatch: 'full', redirectTo: 'login' },
           { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginModule) },  //new
           { path: 'register', loadChildren: () => import('./register/register.module').then( m => m.RegisterModule) },  //new
        //    { path: 'login', loadChildren: './login/login.module#LoginModule' }, //old
        //    { path: 'register', loadChildren: './register/register.module#RegisterModule' }, //old
       ] 
    }
];

@NgModule({
    imports:[ 
        RouterModule.forChild(routes),
    ],
})
export class AuthRoutingModule { }