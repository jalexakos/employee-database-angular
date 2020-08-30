import { Component, OnInit } from '@angular/core';
import {EmployeeCrudService} from '../services/employee-crud.service'; 

// Importing Forms stuff
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {

  data;
  public show:boolean = false;
  constructor(public crudService: EmployeeCrudService) { }

  // Employee Reactive Form

  updateForm = new FormGroup({
    employeeFirstName: new FormControl('', [Validators.required]),
    employeeLastName: new FormControl('', [Validators.required]),
    employeeAddress: new FormControl('', [Validators.required, Validators.minLength(5)]),
    employeeDOB: new FormControl('', [Validators.required])
  })

  
  get employeeFirstName() {return this.updateForm.get('employeeFirstName')}; //This allows to 'get' the values from the forms for validation checking
  
  get employeeLastName() {return this.updateForm.get('employeeLastName')};
  
  get employeeAddress() {return this.updateForm.get('employeeAddress')};

  get employeeDOB() {return this.updateForm.get('employeeDOB')};

  // Getter Methods for input values from reactive form
  get employeeFirstNameValue() {return this.updateForm.get('employeeFirstName').value};

  get employeeLastNameValue() {return this.updateForm.get('employeeLastName').value};
  
  get employeeAddressValue() {return this.updateForm.get('employeeAddress').value}

  get employeeDOBValue() {return this.updateForm.get('employeeDOB').value}

  // Updating form data
  onSubmit(id,employeeFirstName,employeeLastName,employeeAddress,employeeDOB){
    this.crudService.update_Employee(id,employeeFirstName,employeeLastName,employeeAddress,employeeDOB);
    console.log(`${this.updateForm.value.employeeFirstName}`) // this.data.id gets the id because of the function below that adds the id to the data variable
  }

  // Method for toggle of update form (show/don't show)
  toggle(){
    this.show = !this.show; //when this function is called, it will reverse the value
  }

  // Deleting employee
  delete(id){
    this.crudService.delete_Employee(id)
  }

  ngOnInit(): void {
    this.crudService.retrieve_Employee().subscribe(data =>{
      this.data = data.map(rawData => {
        return {
          id: rawData.payload.doc.id,
          employeeFirstName: rawData.payload.doc.data()['employeeFirstName'],
          employeeLastName: rawData.payload.doc.data()['employeeLastName'],
          employeeAddress: rawData.payload.doc.data()['employeeAddress'],
          employeeDOB: rawData.payload.doc.data()['employeeDOB'],
        }
      })
    });
  }

}
