import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup}  from '@angular/forms';
import {ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from '../model/employee.model';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employee = new Employee();
  id:any;
  data:any;
  constructor(private employeesService: EmployeeService,private route: ActivatedRoute,private toastr: ToastrService) {}

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(''),
  })

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.employeesService.getDataById(this.id).subscribe(data=>{
    this.form.patchValue(data);
    })
  }

getData(){
  this.employeesService.getDataById(this.id).subscribe(res => {
    this.data = res;
    this.employee = this.data;
    this.form = new FormGroup({
      name: new FormControl(this.employee.name),
      email: new FormControl(this.employee.email),
      salary: new FormControl(this.employee.salary),
    });
    });
}
   
  updateData() {
this.employeesService.updateData(this.id,this.form.value).subscribe(res =>{
  this.data = res;
  this.toastr.success("DATA UPDATED SUCCESSFULLY");
  this.getEmployeesData();
});
  }
  getEmployeesData() {
    throw new Error('Method not implemented.');
  }
}
