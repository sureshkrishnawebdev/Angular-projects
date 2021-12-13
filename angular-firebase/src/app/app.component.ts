import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firebase';

  toggleState: boolean = false;

  toggleNav(): void {
    this.toggleState = ! this.toggleState;
  }
}
