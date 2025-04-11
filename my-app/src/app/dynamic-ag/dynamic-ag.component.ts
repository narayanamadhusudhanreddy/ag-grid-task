import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-ag',
  templateUrl: './dynamic-ag.component.html',
  styleUrls: ['./dynamic-ag.component.css']
})
export class DynamicAgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gridConfig = {
    columns: [
      { field: 'id', headerName: 'ID', sortable: true, filter: true },
      { field: 'name', headerName: 'Name', editable: true },
      { field: 'age', headerName: 'Age', editable: true },
      { field: 'gender', headerName: 'Gender', editable: true },
      { field: 'position', headerName: 'Position', editable: true },
      { field: 'department', headerName: 'Department', editable: true },
      { field: 'address', headerName: 'Address', editable: true }
    ],
    rowData: [
      { id: 1, name: 'John Doe', age: 32, gender: 'male', position: 'Developer', department: 'Engineering', address: 'UK' },
      { id: 2, name: 'Jane Smith', age: 22, gender: 'female', position: 'Designer', department: 'UX', address: 'SA' },
      { id: 3, name: 'John Smith', age: 42, gender: 'male', position: 'Developer', department: 'Engineering', address: 'SL' },
      { id: 4, name: 'Jane Doe', age: 34, gender: 'female', position: 'Designer', department: 'UI', address: 'NZ' },
      { id: 5, name: 'Kohn Doe', age: 52, gender: 'male', position: 'Developer', department: 'Engineering', address: 'AUS' },
      { id: 6, name: 'Kone Smith', age: 62, gender: 'female', position: 'Designer', department: 'UX', address: 'JAP' },
      { id: 7, name: 'Doe', age: 37, gender: 'male', position: 'Developer', department: 'Engineering', address: 'IND' },
      { id: 8, name: 'Smith', age: 82, gender: 'female', position: 'Designer', department: 'UI', address: 'USA' }
    ],
    defaultColDef: {
      editable: true,
      resizable: true
    },
    options: {
      pagination: true,
      paginationPageSize: 10
    }
  };
}
