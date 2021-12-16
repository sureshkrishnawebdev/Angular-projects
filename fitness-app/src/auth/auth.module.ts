import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { AuthRoutingModule } from './auth-routing.module';

// shared
import { SharedModule } from './shared/shared.module';

// material
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        MatInputModule,
    ]
})
export class AuthModule { }