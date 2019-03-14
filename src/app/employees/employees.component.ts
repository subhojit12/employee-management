import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Employees } from '../mock-employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = Employees;
  employee:Employee={id:1,name:'',phone:'',email:'',address:''}
  addEmployee(){
    var obj={
      id:this.employees.length+1,
      name:this.employee.name,
      phone:this.employee.phone,
      email:this.employee.email,
      address:this.employee.address
    }
    this.employees.push(obj);
    var employeesStore = 
    localStorage.setItem('employees',JSON.stringify(this.employees));
    sessionStorage.setItem('employees',JSON.stringify(this.employees));  
  }
  removeEmployee(id){
    for(var i=0;i<this.employees.length;i++){
      if(id==this.employees[i].id){
        this.employees.splice(i,1);
      }
    }
    // this.employees.forEach(function(x){
    //   if(id==x.id){
    //     this.employees.splice(x,1)
    //   }
    // })
  }
  selectedEmployee: Employee;
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  constructor() { }

  ngOnInit() {
  }
}
