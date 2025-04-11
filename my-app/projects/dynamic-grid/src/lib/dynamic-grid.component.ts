import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'lib-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss']
})
export class DynamicGridComponent implements OnInit {

  @ViewChild('agGrid') agGrid!: AgGridAngular;
  @Input() config: any;

  columnDefs: ColDef[] = [];
  rowData: any[] = [];
  gridOptions: GridOptions = {};
  defaultColDef = {
    sortable: true,
    filter: true,
    editable: true,
    resizable: true
  };

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if (this.config) {
      this.columnDefs = this.config.columns || [];
      this.rowData = this.config.rowData || [];
      this.gridOptions = {
        suppressRowClickSelection: true,
        rowSelection: 'multiple',
        ...this.config.options
      };

      this.defaultColDef = {
        ...this.defaultColDef,
        ...(this.config.defaultColDef || {})
      };
    }
  }

  onQuickFilterChanged(searchValue: string) {
    this.agGrid.api!.setQuickFilter(searchValue);
  }

  toggleFullScreen() {
    const elem = document.getElementById('gridContainer');
    if (!document.fullscreenElement) {
      elem?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
