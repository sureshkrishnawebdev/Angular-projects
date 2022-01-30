import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {  FormBuilder, FormArray, Validators } from '@angular/forms';

// services
import { Workout } from 'src/health/shared/services/workouts/workouts.service';

@Component({
    selector:'app-w3hTech-workout-form',
    styleUrls:['./workout-form.component.scss'],
    templateUrl:'./workout-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutFormComponent implements OnChanges{

    // decorators
    @Input()
    workout!: Workout | {};

    @Output()
    create = new EventEmitter<Workout>();

    @Output()
    update = new EventEmitter<Workout>();

    @Output()
    remove = new EventEmitter<Workout>();

    // properties

    isWorkoutExist!: boolean;
    isDeleteClicked!: boolean;

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnChanges(): void {
        // if( Object.keys(this.workout).length !== 0 ){

        //     this.isWorkoutExist = true;
        //     this.emptyIngredients();

        //     const value = this.workout as Workout;
        //     this.form.patchValue( value );

        //     // as formarray is copied as it is -> we're doing a workaround
        //     if( value.ingredients ) {
        //         for(let item of value.ingredients) {
        //             this.ingredients.push( this.fb.control( item ) );
        //         }
        //     }
        // }
    }

    form = this.fb.group({
        name:['', Validators.required],
    })

    // addIngredient() {
    //     this.ingredients.push( this.fb.control('') );
    // }

    // removeIngredient( index: number ): void {
    //     // fall back
    //     if( this.ingredients.length === 1 ) { return; }
        
    //     this.ingredients.removeAt( index );
    // }

    // emptyIngredients(): void {
    //    while( this.ingredients.controls.length ){
    //        this.ingredients.removeAt(0);
    //    }
    // }

    createWorkout(): void {
        if( this.form.value ) {
            this.create.emit( this.form.value );
        }         
    }

    updateWorkout(): void {
        if( this.form.value ) {
            this.update.emit( this.form.value );
        }  
    }

    removeWorkout(): void {
        this.remove.emit( this.form.value );
    }

    toggleDelete(): void {
        this.isDeleteClicked = ! this.isDeleteClicked;
    }

    // --- helpers ---

    // get ingredients(): FormArray {
    //     return this.form.get('ingredients') as FormArray;
    // }

    get isWorkoutNameInvalid(){
        const control = this.form.get('name');
        return (control?.hasError('required') && control?.touched);
    }

    // Pending:  error validation for dynamic fields 
}