import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// shared 
import { SharedModule } from 'src/health/shared/shared.module';

// containers
import { MealsComponent } from './container/meals/meals.component';
import { MealComponent } from './container/meal/meal.component';

// components
import { MealFormComponent } from './components/meal-form/meal-form.component';


export const routes: Routes = [
    { path:'', component: MealsComponent },     //  meals dashboard
    { path:'new', component: MealComponent },   //  new meal
]

@NgModule({
    imports:[        
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
    ],
    declarations:[
        MealsComponent, 
        MealComponent,
        MealFormComponent      
    ],
})
export class MealsModule { }