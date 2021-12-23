import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// guards
import { AuthGuard } from 'src/auth/shared/guards/auth.guard';

export const routes: Routes = [
    { path: 'schedule', canActivate:[ AuthGuard ], loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule ) },
    { path: 'meals',    canActivate:[ AuthGuard ], loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule) },
    { path: 'workouts', canActivate:[ AuthGuard ], loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule) },    
]


@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ]
})
export class HealthRoutingModule { }