import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/auth/shared/services/auth/auth.service';
import { Meal } from '../../services/meals/meals.service';

@Component({
    selector:'app-w3hTech-list-item',
    styleUrls:['list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="list-item">
            <a [routerLink]="getRoute()">
                <p class="list-item__name"> 
                    {{ item.name }}
                </p>
                <p class="list-item__ingredients">
                    <span>
                        {{ item.ingredients }}
                    </span>
                </p>
                <div 
                class="list-item__delete"
                *ngIf="isDeleteClicked">
                    <p>Delete Item ?</p>
                    <button
                    type="button"
                    class="confirm"
                    (click)="removeItem()"
                    >
                    Yes
                    </button>
                    <button
                    type="button"
                    class="cancel"
                    (click)="toggleDelete()"
                    >
                    No
                    </button>
                </div>    
                <button
                type="button"
                class="trash"
                (click)="toggleDelete()">
                    <i class="fas fa-trash"></i>
                </button>    
            </a>
        </div>
    `
})
export class ListItemComponent {

    // decorators
    @Input() 
    item!: Meal;

    @Input()
    user!:User | null;

    // properties
    isDeleteClicked: boolean = false;

    removeItem(): void {

    }

    toggleDelete(): void {
        this.isDeleteClicked = ! this.isDeleteClicked;
    }

    getRoute(){
        return [`../meals`, this.user?.uid ];
    }
}