import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// shared 
import { SharedModule } from 'src/health/shared/shared.module';

// containers
import { MealsComponent } from './container/meals/meals.component';


export const routes: Routes = [
    { path:'', component: MealsComponent }
]

@NgModule({
    imports:[        
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
    ],
    declarations:[
        MealsComponent,       
    ],
})
export class MealsModule { }