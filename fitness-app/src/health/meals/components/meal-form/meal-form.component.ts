import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormArray, Validators } from '@angular/forms';
import { Meal } from 'src/health/shared/services/meals/meals.service';

@Component({
    selector:'app-w3hTech-meal-form',
    styleUrls:['./meal-form.component.scss'],
    templateUrl:'./meal-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealFormComponent {

    // decorators
    @Output()
    create = new EventEmitter<Meal>();

    constructor(
        private fb: FormBuilder,
    ) { }

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

    createMeal(): void {
        if( this.form.value ) {
            this.create.emit( this.form.value );
        }         
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