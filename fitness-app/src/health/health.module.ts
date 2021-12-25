import { NgModule } from '@angular/core';

// shared
import { SharedModule } from 'src/auth/shared/shared.module';

// routing
import { HealthRoutingModule } from './health.routing.module';

@NgModule({
    imports:[
        HealthRoutingModule,
        SharedModule.forRoot(),
    ],
})
export class HealthModule { }