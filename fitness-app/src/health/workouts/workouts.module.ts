import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './container/workouts/workouts.component';

export const routes: Routes =[
    { path:'', component: WorkoutsComponent }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    declarations:[
        WorkoutsComponent,
    ],
})
export class WorkoutsModule { }