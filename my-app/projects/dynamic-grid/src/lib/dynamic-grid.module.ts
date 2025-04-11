import { NgModule } from '@angular/core';
import { DynamicGridComponent } from './dynamic-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DynamicGridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
  ],
  exports: [
    DynamicGridComponent
  ]
})
export class DynamicGridModule { }
