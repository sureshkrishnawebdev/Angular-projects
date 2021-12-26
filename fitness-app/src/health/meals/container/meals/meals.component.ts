import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { AuthService } from 'src/auth/shared/services/auth/auth.service';
import { Meal, MealsService } from 'src/health/shared/services/meals/meals.service';

import { Store } from 'store';

@Component({
    selector: 'app-w3hTech-meals',
    templateUrl:'./meals.component.html',
    styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit, OnDestroy{

    meals$!: Observable<Meal[]>;
    subscription!: Subscription;

    constructor(
        private mealsService: MealsService,
        private store: Store,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
       this.getMealsData();
    }

    async getMealsData() {
        try{
            // get uid
            let user = await this.authService.user;      
            if( user ) {  this.mealsService.setUid( user?.uid  ); }           
            // invoke meals after getting uid bcz meals observable requires uid - pending - not working
            this.subscription = this.mealsService.meals$.subscribe();
            this.meals$ = this.store.select<Meal[]>('meals');

        } catch ( err ) {
            throw new Error( err.message ); // Pending
        } 
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}