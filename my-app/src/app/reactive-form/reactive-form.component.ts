import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  employeeForm!: FormGroup;
  submittedEmployees: any[] = [];
  isEditMode = false;
  editIndex: number | null = null;

  columnDefs: any[] = [];
  defaultColDef = {
    flex: 1,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true // ← Enable inline editing
  };

  departmentList = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Finance' }
  ];
  genders = ['Male', 'Female', 'Other'];

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      employeeId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      department: [null, Validators.required],
      gender: [null, Validators.required],
      terms: [false, Validators.requiredTrue]
    });

    this.columnDefs = [
      { field: 'firstName', headerName: 'First Name' },
      { field: 'lastName', headerName: 'Last Name' },
      { field: 'employeeId', headerName: 'Employee ID' },
      { field: 'description', headerName: 'Description' },
      { field: 'department', headerName: 'Department', valueGetter: (params: any) => params.data.department.name },
      { field: 'gender', headerName: 'Gender' },
      {
        field: 'terms',
        headerName: 'Accepted Terms',
        valueFormatter: (params: any) => (params.value ? 'Yes' : 'No')
      },
      {
        headerName: 'Actions',
        cellRenderer: (params: any) => {
          const container = document.createElement('div');
          container.innerHTML = `
            <button class="btn btn-sm btn-primary">Edit</button>
            <button class="btn btn-sm btn-secondary ms-2">View</button>
          `;
          const editBtn = container.querySelector('button.btn-primary')!;
          const viewBtn = container.querySelector('button.btn-secondary')!;
          editBtn.addEventListener('click', () => this.editEmployee(params.rowIndex));
          viewBtn.addEventListener('click', () => this.viewEmployee(params.rowIndex));
          return container;
        }
      }
    ];
  }

  get f() {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) return;

    const formValue = { ...this.employeeForm.value };

    if (this.isEditMode && this.editIndex !== null) {
      const updated = [...this.submittedEmployees];
      updated[this.editIndex] = formValue;
      this.submittedEmployees = updated;
      this.isEditMode = false;
      this.editIndex = null;
    } else {
      this.submittedEmployees = [...this.submittedEmployees, formValue];
    }

    this.employeeForm.reset();
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  editEmployee(index: number): void {
    const employee = this.submittedEmployees[index];
    const matchedDepartment = this.departmentList.find(
      (dept) => dept.id === employee.department.id
    );

    this.employeeForm.patchValue({
      ...employee,
      department: matchedDepartment
    });

    this.isEditMode = true;
    this.editIndex = index;
    this.cdr.detectChanges(); // Ensures UI updates
  }

  viewEmployee(index: number): void {
    alert(JSON.stringify(this.submittedEmployees[index], null, 2));
  }
}
