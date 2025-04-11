import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import * as bootstrap from 'bootstrap';
import { ChangeDetectorRef } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any;
  selectedEmployee: any = {};
  defData: any;
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'position' },
    { field: 'department' },
    { field: 'actions', cellRenderer: this.actionCellRenderer.bind(this) }
  ];
  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('employeeData');
    this.employees = storedData ? JSON.parse(storedData) : this.loadDefaultEmployees();
  }
  loadDefaultEmployees() {
    const defaultData = [
      { id: 1, name: 'John Doe', position: 'Developer', department: 'Engineering' },
      { id: 2, name: 'Jane Smith', position: 'Designer', department: 'UI/UX' },
      { id: 3, name: 'John Smith', position: 'Developer', department: 'Engineering' },
      { id: 4, name: 'Jane Doe', position: 'Designer', department: 'UI/UX' },
      { id: 5, name: 'Kohn Doe', position: 'Developer', department: 'Engineering' },
      { id: 6, name: 'Kone Smith', position: 'Designer', department: 'UI/UX' },
      { id: 7, name: 'Doe', position: 'Developer', department: 'Engineering' },
      { id: 8, name: 'Smith', position: 'Designer', department: 'UI/UX' }
    ];

    sessionStorage.setItem('employeeData', JSON.stringify(defaultData));
    return defaultData;
  }
  actionCellRenderer(params: any) {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
    if (user.role === 'admin') {
      const button = document.createElement('button');
      button.innerText = 'Edit';
      button.style.color = 'white';
      button.style.backgroundColor = '#198754';
      button.style.border="1px solid #198754";
      button.style.borderRadius = "4px";
      button.style.height = "31px";
      button.style.lineHeight = "27px";
      button.style.padding = "0px 10px 4px 10px";
      button.addEventListener('click', () => this.openEditModal(params.data));
      return button;
    }
    return '';
  }
  openEditModal(employee: any) {
    this.selectedEmployee = { ...employee };
    this.cdr.detectChanges();
    const modalElement = document.getElementById('editEmployeeModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }
  saveEmployee() {
    const index = this.employees.findIndex((emp: Employee) => emp.id === this.selectedEmployee.id);
    if (index !== -1) {
      this.employees[index] = { ...this.selectedEmployee };
      this.employees = [...this.employees];
    }
    const modalElement = document.getElementById('editEmployeeModal');
    const modal = bootstrap.Modal.getInstance(modalElement!);
    modal?.hide();
  }
}
