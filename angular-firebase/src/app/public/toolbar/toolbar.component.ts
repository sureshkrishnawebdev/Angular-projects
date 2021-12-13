import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngFire-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  toggleNavClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void{
    this.toggleNavClicked.emit();
  }

}
