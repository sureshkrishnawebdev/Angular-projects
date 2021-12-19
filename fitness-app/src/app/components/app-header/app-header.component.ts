import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/auth/shared/services/auth/auth.service';

@Component({
    selector:'app-w3hTech-header',
    styleUrls:[ './app-header.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:`
    <div class="app-nav">
        <div class="wrapper">   
            <mat-toolbar>
                <span> W^3H Fitness Pro </span>

                <img src="../assets/pics/fitness-2.png">

                <span id="logout-btn"
                    *ngIf="user?.authenticated"
                    (click)="logoutUser()"> 
                    <i class='fas fa-power-off'></i>
                </span>
            </mat-toolbar>      
        </div>
    </div>   
    `
})
export class AppHeaderComponent { 

    @Input()
    user!: User | null;

    // decorators
    @Output()
    logout= new EventEmitter<User>();


    logoutUser(): void {
        this.logout.emit();
    }

}