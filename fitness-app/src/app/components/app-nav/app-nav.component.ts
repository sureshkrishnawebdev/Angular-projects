import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


export interface Navbar {
 label: string,
 path: string;   
}


@Component({
    selector:'app-w3hTech-nav',
    styleUrls:[ './app-nav.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:`
    <div class="app-nav">
        <div class="wrapper">   
            <nav mat-tab-nav-bar mat-align-tabs="center">
                <a mat-tab-link *ngFor="let link of links"
                    (click)="activeLink = link.label"
                    [active]="activeLink == link.label"
                    [routerLink]="link.path"> 
                        {{ link.label }} 
                    </a>
            </nav>
        </div>
    </div>   

    `
})
export class AppNavComponent implements OnInit{

links!: Navbar[];   //dynamic links
activeLink!: string;

ngOnInit(): void {

    this.links = [
        { label: 'Schedule', path: 'schedule'},
        { label: 'Meals', path: 'meals'},
        { label: 'Workouts', path: 'workouts'},
    ];

    this.activeLink = this.links[0].label;

}


}
