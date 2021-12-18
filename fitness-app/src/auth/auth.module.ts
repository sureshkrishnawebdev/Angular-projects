import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { AuthRoutingModule } from './auth-routing.module';

// shared
import { SharedModule } from './shared/shared.module';

// material
import { MatInputModule } from '@angular/material/input';

// third-party
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        AuthRoutingModule,
        MatInputModule,
        AngularFireModule.initializeApp(environment),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot(),
    ]
})
export class AuthModule { }