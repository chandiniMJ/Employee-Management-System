import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"
import { EmployeeModel } from '../ems/employee-data';
import { EmpDataService } from '../services/emp-data.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employeeModelObj:EmployeeModel=new EmployeeModel()
  constructor(private api:EmpDataService) { }
  ngOnInit(): void {
    }
    namePattern:any="[a-zA-Z][a-zA-Z ]+"
    salPattern:any="^(?=[0-9]{4,6}$)0*[1-9][0-9]{3,}$"
    agePattern:any="^(1[89]|[2-9]\d)$"
    empdata=new FormGroup({
      empname:new FormControl("",[Validators.required,Validators.pattern(this.namePattern)]),
      empdesig:new FormControl("",[Validators.required,Validators.pattern(this.namePattern)]),
      empsal:new FormControl("",[Validators.required,Validators.pattern(this.salPattern)]),
      empage:new FormControl("",[Validators.required])
    })
  get empname(){
       return this.empdata.get('empname')
     }
     get empdesig(){
       return this.empdata.get('empdesig')
     }
     get empsal(){
       return this.empdata.get('empsal')
     }
    get empage(){
       return this.empdata.get('empage')
    }
    postData(){
      this.employeeModelObj.empname=this.empdata.value.empname
      this.employeeModelObj.empdesig=this.empdata.value.empdesig
      this.employeeModelObj.empsal=this.empdata.value.empsal
      this.employeeModelObj.empage=this.empdata.value.empage
      this.api.postEmpData(this.employeeModelObj).subscribe(res=>{
        console.log(res);
        alert("Employee data added successfully")
        this.empdata.reset()
      },err=>{alert('Something went wrong')})
    }

}
