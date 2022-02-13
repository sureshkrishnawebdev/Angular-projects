import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// shared 
import { SharedModule } from 'src/health/shared/shared.module';

// containers
import { WorkoutsComponent } from './container/workouts/workouts.component';
import { WorkoutComponent } from './container/workout/workout.component';

// components
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutTypeComponent } from './components/workout-type/workout-type.component';


export const routes: Routes = [
    { path: '', component: WorkoutsComponent },     //  meals dashboard
    { path: 'new', component: WorkoutComponent },   //  new meal
    { path: ':id', component: WorkoutComponent },  // dynamic route
]

@NgModule({
    imports:[        
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    declarations:[
        WorkoutsComponent, 
        WorkoutComponent,
        WorkoutFormComponent, 
        WorkoutTypeComponent,     
    ],
})
export class WorkoutsModule { }
