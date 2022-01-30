import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { AuthService } from 'src/auth/shared/services/auth/auth.service';
import { Workout, WorkoutsService } from 'src/health/shared/services/workouts/workouts.service';

import { Store } from 'store';

@Component({
    selector: 'app-w3hTech-workouts',
    templateUrl:'./workouts.component.html',
    styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit, OnDestroy{

    workouts$!: Observable<Workout[]>;
    subscription!: Subscription;

    constructor(
        private workoutsService: WorkoutsService,
        private store: Store,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
       this.getworkoutsData();
    }

    async getworkoutsData() {
        try{
            // get uid
            let user = await this.authService.user;      
            if( user ) {  this.workoutsService.setUid( user?.uid  ); }           
            // invoke workouts after getting uid bcz workouts observable requires uid - pending - not working
            this.subscription = this.workoutsService.workouts$.subscribe();
            this.workouts$ = this.store.select<Workout[]>('workouts');                       

        } catch ( err ) {
            throw new Error( err.message ); // Pending
        } 
    }

    removeWorkout( item: Workout ) {
        this.workoutsService.removeWorkout( item.workoutKey );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}