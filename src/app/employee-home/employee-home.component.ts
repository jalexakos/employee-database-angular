import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeCrudService } from '../services/employee-crud.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {

  employeeForm = new FormGroup({
    employeeFirstName: new FormControl('', [Validators.required]),
    employeeLastName: new FormControl('', [Validators.required]),
    employeeAddress: new FormControl('', [Validators.required, Validators.minLength(15)]),
    employeeDOB: new FormControl('', [Validators.required])
  })

  
  get employeeFirstName() {return this.employeeForm.get('employeeFirstName')}; //This allows to 'get' the values from the forms for validation checking
  
  get employeeLastName() {return this.employeeForm.get('employeeLastName')};

  get employeeAddress() {return this.employeeForm.get('employeeAddress')};
  
  get employeeDOB() {return this.employeeForm.get('employeeDOB')};
  
  // Form handler for Todo Reactive Form
  onSubmit(){
    this.crudService.create_Employee(this.employeeForm.value.employeeFirstName, this.employeeForm.value.employeeLastName, this.employeeForm.value.employeeAddress, this.employeeForm.value.employeeDOB);
    console.log(`${this.employeeForm.value.employeeFirstName}`) // will give us the first piece of data from the Todo Form
  }

  constructor(public crudService: EmployeeCrudService) { }

  ngOnInit(): void {
  }

}
