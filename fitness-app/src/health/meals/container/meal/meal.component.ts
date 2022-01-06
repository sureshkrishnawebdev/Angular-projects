import { Component } from '@angular/core';
import { Meal } from 'src/health/shared/services/meals/meals.service';

@Component({
    selector:'app-w3hTech-meal',
    styleUrls:['./meal.component.scss'],
    template:`
        <body style="background:black; color:white;">
            <div class="meal">
                <div class="meal__title">
                    <h1>
                        <i class='fas fa-hamburger fa-spin'></i>
                        Create Meal
                    </h1>
                </div>
                <div>
                    <app-w3hTech-meal-form
                        (create)="addMeal($event)">
                    </app-w3hTech-meal-form>
                </div>
            </div>
        </body>
    `
})
export class MealComponent {

    addMeal( event: Meal ): void {
        console.log(event);
    }

}