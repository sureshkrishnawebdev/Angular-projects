import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './container/schedule/schedule.component';


export const routes: Routes = [
    { path:'', component: ScheduleComponent }
]

@NgModule({    
    imports:[
        RouterModule.forChild(routes),
    ],
    declarations:[
        ScheduleComponent,
    ],
})
export class ScheduleModule { }