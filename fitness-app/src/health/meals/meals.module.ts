import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './container/meals/meals.component';

export const routes: Routes = [
    { path:'', component: MealsComponent }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    declarations:[
        MealsComponent,
    ],
})
export class MealsModule { }