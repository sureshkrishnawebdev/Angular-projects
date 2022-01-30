import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {  FormBuilder, FormArray, Validators } from '@angular/forms';
import { Meal } from 'src/health/shared/services/meals/meals.service';

@Component({
    selector:'app-w3hTech-meal-form',
    styleUrls:['./meal-form.component.scss'],
    templateUrl:'./meal-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealFormComponent implements OnChanges{

    // decorators
    @Input()
    meal!: Meal | {};

    @Output()
    create = new EventEmitter<Meal>();

    @Output()
    update = new EventEmitter<Meal>();

    @Output()
    remove = new EventEmitter<Meal>();

    // properties

    isMealExist!: boolean;
    isDeleteClicked!: boolean;

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnChanges(): void {
        if( Object.keys(this.meal).length !== 0 ){

            this.isMealExist = true;
            this.emptyIngredients();

            const value = this.meal as Meal;
            this.form.patchValue( value );

            // as formarray is copied as it is -> we're doing a workaround
            if( value.ingredients ) {
                for(let item of value.ingredients) {
                    this.ingredients.push( this.fb.control( item ) );
                }
            }
        }
    }

    form = this.fb.group({
        name:['', Validators.required],
        ingredients: this.fb.array(['']),
    })

    addIngredient() {
        this.ingredients.push( this.fb.control('') );
    }

    removeIngredient( index: number ): void {
        // fall back
        if( this.ingredients.length === 1 ) { return; }
        
        this.ingredients.removeAt( index );
    }

    emptyIngredients(): void {
       while( this.ingredients.controls.length ){
           this.ingredients.removeAt(0);
       }
    }

    createMeal(): void {
        if( this.form.value ) {
            this.create.emit( this.form.value );
        }         
    }

    updateMeal(): void {
        if( this.form.value ) {
            this.update.emit( this.form.value );
        }  
    }

    removeMeal(): void {
        this.remove.emit( this.form.value );
    }

    toggleDelete(): void {
        this.isDeleteClicked = ! this.isDeleteClicked;
    }

    // --- helpers ---

    get ingredients(): FormArray {
        return this.form.get('ingredients') as FormArray;
    }

    get isMealNameInvalid(){
        const control = this.form.get('name');
        return (control?.hasError('required') && control?.touched);
    }

    // Pending:  error validation for dynamic fields 
}