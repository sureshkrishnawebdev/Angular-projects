import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConceptService } from '../concepts/shared/concept.service';
import { Concept } from '../concepts/shared/concepts.interface';

import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  topConcepts$!: Observable<Concept[]>;
  conceptsToView!: number;

  // spinner
  spinnerColor: string = 'accent';
  spinnerMode: ProgressSpinnerMode = 'indeterminate';
  spinnerValue: number = 50;

  constructor(
    private cs:ConceptService,
  ) { }

  ngOnInit(): void {
    this.conceptsToView = 4;    
    this.topConcepts$ = this.cs.getTopConcepts( this.conceptsToView );
  }

}
