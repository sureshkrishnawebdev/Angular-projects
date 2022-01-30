import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Meal, MealsService } from 'src/health/shared/services/meals/meals.service';

import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector:'app-w3hTech-meal',
    styleUrls:['./meal.component.scss'],
    template:`
        <body style="background:black; color:white;">
            <div class="meal">
                <div class="meal__title">
                    <h1>
                        <i class='fas fa-hamburger fa-spin'></i>
                        <span *ngIf="(meal$ | async) as meal; else title;">
                            {{ meal ? 'Edit' : 'Create' }} Meal
                        </span>
                        <ng-template #title>
                            Loading ...
                        </ng-template>
                    </h1>
                </div>
                <div *ngIf="(meal$ | async) as meal; else loading">                          
                    <app-w3hTech-meal-form
                        [meal]="meal"
                        (create)="addMeal($event)"
                        (update)="updateMeal($event)"
                        (remove)="removeMeal($event)">
                    </app-w3hTech-meal-form>
                </div>
                <ng-template #loading>
                <i class="fa fa-spinner" aria-hidden="true"></i>
                    Fetching meal...
                </ng-template>
            </div>
        </body>
    `
})
export class MealComponent implements OnInit, OnDestroy{

    meal$!: Observable<Meal | {} | undefined>;
    subscription!: Subscription;

    constructor( 
        private mealsService: MealsService,        
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void{
        this.subscription = this.mealsService.meals$.subscribe();   // on refresh no data will be available in store - so we need to invoke the observable stream
        this.meal$ = this.activatedRoute.params.pipe( switchMap( params => { return this.mealsService.getMeal( params.id ) } ) );
    }

    async addMeal( event: Meal ) {        
        await this.mealsService.addMeal( event );
        this.backToMeals();
    }

    async updateMeal( event: Meal ) {     
        // we are taking id from route as the new form object wont be having mealkey
        const key = this.activatedRoute.snapshot.params.id;
        console.log(`update`, event, key);  
        await this.mealsService.updateMeal( key, event );
        this.backToMeals();
    }

    async removeMeal( event: Meal ) {           
        const key = this.activatedRoute.snapshot.params.id;
        console.log(`this.activatedRoute.snapshot.params`, this.activatedRoute.snapshot.params);  
        console.log(`remove`, event, key);  
        await this.mealsService.removeMeal( key );
        this.backToMeals();
    }

    backToMeals(): void {
        this.router.navigate(['meals'])
    }

    ngOnDestroy(): void{
        this.subscription.unsubscribe();
    }
}