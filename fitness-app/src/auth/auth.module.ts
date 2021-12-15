import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations:[],
    imports:[
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule{}