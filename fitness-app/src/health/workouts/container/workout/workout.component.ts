import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Workout, WorkoutsService } from 'src/health/shared/services/workouts/workouts.service';

import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector:'app-w3hTech-workout',
    styleUrls:['./workout.component.scss'],
    template:`
        <body style="background:black; color:white;">
            <div class="workout">
                <div class="workout__title">
                    <h1>
                        <i class="fas fa-dumbbell"></i>
                        <span *ngIf="(workout$ | async) as workout; else title;">
                            {{ workout ? 'Edit' : 'Create' }} Workout
                        </span>
                        <ng-template #title>
                            Loading ...
                        </ng-template>
                    </h1>
                </div>
                <div *ngIf="(workout$ | async) as workout; else loading">                          
                    <app-w3hTech-workout-form
                        [workout]="workout"
                        (create)="addWorkout($event)"
                        (update)="updateWorkout($event)"
                        (remove)="removeWorkout($event)">
                    </app-w3hTech-workout-form>
                </div>
                <ng-template #loading>
                <i class="fa fa-spinner" aria-hidden="true"></i>
                    Fetching workout...
                </ng-template>
            </div>
        </body>
    `
})
export class WorkoutComponent implements OnInit, OnDestroy{

    workout$!: Observable<Workout | {} | undefined>;
    subscription!: Subscription;

    constructor( 
        private workoutsService: WorkoutsService,        
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void{
        this.subscription = this.workoutsService.workouts$.subscribe();   // on refresh no data will be available in store - so we need to invoke the observable stream
        this.workout$ = this.activatedRoute.params
            .pipe( switchMap( params => { return this.workoutsService.getWorkout( params.id ) } ) );
    }

    async addWorkout( event: Workout ) {        
        await this.workoutsService.addWorkout( event );
        this.backToWorkouts();
    }

    async updateWorkout( event: Workout ) {     
        // we are taking id from route as the new form object wont be having workoutkey
        const key = this.activatedRoute.snapshot.params.id;
        console.log(`update`, event, key);  
        await this.workoutsService.updateWorkout( key, event );
        this.backToWorkouts();
    }

    async removeWorkout( event: Workout ) {           
        const key = this.activatedRoute.snapshot.params.id;
        console.log(`this.activatedRoute.snapshot.params`, this.activatedRoute.snapshot.params);  
        console.log(`remove`, event, key);  
        await this.workoutsService.removeWorkout( key );
        this.backToWorkouts();
    }

    backToWorkouts(): void {
        this.router.navigate(['workouts'])
    }

    ngOnDestroy(): void{
        this.subscription.unsubscribe();
    }
}