import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signin(reg:NgForm){

    localStorage.setItem('regpass',reg.value.pass)
    localStorage.setItem('regcpass',reg.value.cpass)
    if(localStorage.getItem('regpass')==localStorage.getItem('regcpass')){ 
         console.log(reg.value); 
         alert('Registration Successful')
    }else{
      alert('Password Mismatch')
    }
  }
 

}
