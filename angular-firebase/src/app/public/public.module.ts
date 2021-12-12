import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ToolbarComponent } from './toolbar/toolbar.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports:[
    ToolbarComponent,
  ]
})
export class PublicModule { }
