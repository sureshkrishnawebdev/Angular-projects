import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { AuthService, User } from 'src/auth/shared/services/auth/auth.service';

import { Store } from 'store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  user$!: Observable<User>;
  subscription!: Subscription;

  constructor( 
    private authService: AuthService,
    private store: Store,    
  ) { }

  ngOnInit(): void {

    // Invoking the auth observable - to initate dataflow into our store
      this.subscription = this.authService.auth$.subscribe();

    // Consuming value from store
      this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
