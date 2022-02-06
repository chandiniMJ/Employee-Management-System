import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpDataService } from '../services/emp-data.service';
import { EmployeeModel } from './employee-data';

@Component({
  selector: 'app-ems',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.css']
})
export class EMSComponent implements OnInit {
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

employeedata:any

employeeModelObj:EmployeeModel=new EmployeeModel()
constructor(private api:EmpDataService) { }
ngOnInit(): void {
  this.getEmployeedata()
  }
getEmployeedata()
{
  this.api.getEmpData().subscribe(data=>{this.employeedata=data})
}
deleteEmployee(row:any)
{
  this.api.deleteEmpData(row.id).subscribe(data=>{
    alert('! data deleted Sucessfully')
    this.getEmployeedata()
  })
}
onEdit(row:any)
{
  this.employeeModelObj.id=row.id
  this.empdata.controls['empname'].setValue(row.empname)
  this.empdata.controls['empdesig'].setValue(row.empdesig)
  this.empdata.controls['empsal'].setValue(row.empsal)
  this.empdata.controls['empage'].setValue(row.empage)
  // this.updateEmployeeData()
}
updateEmployeeData()
{
  this.employeeModelObj.empname=this.empdata.value.empname
  this.employeeModelObj.empdesig=this.empdata.value.empdesig
  this.employeeModelObj.empsal=this.empdata.value.empsal
  this.employeeModelObj.empage=this.empdata.value.empage
  this.api.updateEmpData(this.employeeModelObj,this.employeeModelObj.id)
  .subscribe(res=>{alert('Updated Sucessfully')
    // this.empdata.reset()
    this.getEmployeedata()
  })
}

}
