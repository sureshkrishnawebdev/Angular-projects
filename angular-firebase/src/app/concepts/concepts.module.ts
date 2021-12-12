import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule } from './concepts-routing.module';
import { ConceptsComponent } from './concepts.component';


@NgModule({
  declarations: [ConceptsComponent],
  imports: [
    CommonModule,
    ConceptsRoutingModule
  ]
})
export class ConceptsModule { }
