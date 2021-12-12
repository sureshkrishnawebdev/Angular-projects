import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConceptService } from '../concepts/shared/concept.service';
import { Concept } from '../concepts/shared/concepts.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  topConcepts$!: Observable<Concept[]>;
  conceptsToView!: number;

  constructor(
    private cs:ConceptService,
  ) { }

  ngOnInit(): void {
    this.conceptsToView = 4;
    this.topConcepts$ = this.cs.getTopConcepts( this.conceptsToView );
  }

}
