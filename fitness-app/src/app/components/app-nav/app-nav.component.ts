import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector:'app-w3hTech-nav',
    styleUrls:[ './app-nav.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:`
    <div class="app-nav">
        <div class="wrapper">   
            <mat-tab-group mat-align-tabs="center">       
                <mat-tab label="Schedule">
                    <div class="example-large-box mat-elevation-z4">
                        Large content
                    </div>
                </mat-tab>
                <mat-tab label="Meals">
                    <div class="example-large-box mat-elevation-z4">
                        Large content 1
                    </div>
                </mat-tab>
                <mat-tab label="Workouts">
                    <div class="example-large-box mat-elevation-z4">
                        Large content 2
                    </div>
                </mat-tab>
            </mat-tab-group>
        </div>
    </div>   

    `
})
export class AppNavComponent { }