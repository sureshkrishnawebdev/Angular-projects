import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

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


@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        AuthRoutingModule,
        MatInputModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot(),
    ]
})
export class AuthModule { }