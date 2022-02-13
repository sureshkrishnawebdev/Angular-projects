import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TYPE_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WorkoutTypeComponent),
    multi: true
}

@Component({
    selector:'app-w3hTech-workout-type',
    styleUrls:['./workout-type.component.scss'],
    providers:[ TYPE_CONTROL_ACCESSOR ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:`

    <div class="workout-type">
        <div class="workout-type__pane"
            [class.active]="selector === value"
            *ngFor="let selector of selectors"
            (click)="setSelected( selector )">
            <i class="fas fa-running" *ngIf="selector === 'endurance' "></i>
            <i class="fas fa-dumbbell" *ngIf="selector === 'strength' "></i>        
            <p> {{ selector }} </p>
        </div>
    </div>

    `
})
export class WorkoutTypeComponent implements ControlValueAccessor{

    // properties

    value!: string;

     // fns passing from interface --> local fns (onTouch, onModelChange)
     private onTouch!: Function;
     private onModelChange!: Function;

    selectors = [ 'strength', 'endurance' ];    

    // registering the interface

    registerOnChange( fn: Function ): void {
        this.onModelChange = fn;
    }

    registerOnTouched( fn: Function ): void {
        this.onTouch = fn;
    }

    writeValue( value: string ): void {
        this.value = value;     // value comes from parent - workout-form - strength
    }   

    setSelected( value: string ): void {
        this.value = value;             // sets value locally
        /* sets value or pass on value 
            from local 
              -> angular form control (TYPE_CONTROL_ACCESSOR)
                -> which by itself passes on the updated value from this local to parent component where it has been used 
        */
       this.onModelChange( value );
       this.onTouch();
    }

}