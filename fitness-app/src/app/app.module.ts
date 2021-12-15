import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

// store

// feature modules
import { AuthModule } from 'src/auth/auth.module';

// containers

// components

// routes
import { AppRoutingModule } from './app-routing.module';

// third-party
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
