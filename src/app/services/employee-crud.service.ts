import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  constructor(public afs: AngularFirestore) { }

    /**
   * 
   * @param employeeFirstName 
   * @param employeeLastName 
   * @param employeeAddress
   * @param employeeDOB 
   * 
   * Returns a Collection reference and adds
   * information to the firestore database
   * 
   * Returns a Promise of our newly created data response
   */

  create_Employee(employeeFirstName,employeeLastName,employeeAddress,employeeDOB){
    return this.afs.collection('employee-contact-info').add({
      employeeFirstName: employeeFirstName,
      employeeLastName: employeeLastName,
      employeeAddress: employeeAddress,
      employeeDOB: employeeDOB
    })
  }
  /**
   * No Params needed
   * 
   * Return an Observable of the document from the firebase collection 
   * and expose the document ID and an array of data points.
   */
  retrieve_Employee(){
    return this.afs.collection('employee-contact-info').snapshotChanges();
  }

  /**
   * 
   * @param employeeId 
   * @param employeeFirstName
   * @param employeeLastName
   * @param employeeAddress 
   * @param employeeDOB 
   * 
   * Update given employee by their documentId and place newly updated
   * information inside of the database
   */
  update_Employee(employeeId,employeeFirstName,employeeLastName,employeeAddress,employeeDOB){
    this.afs.doc('employee-contact-info/' + employeeId).update({
      employeeFirstName : employeeFirstName,
      employeeLastName: employeeLastName,
      employeeAddress: employeeAddress,
      employeeDOB: employeeDOB
    })
  }

  /**
   * 
   * @param employeeId 
   * 
   * Delete given employee by their documentId
   */
  delete_Employee(employeeId){
    this.afs.doc('employee-contact-info/' + employeeId).delete()
  }

}
