import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Signinform = new FormGroup({
    umail: new FormControl("",[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
    upass: new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/)])
  })
  get umail(){
    return this.Signinform.get("umail")
  }
  get upass(){
    return this.Signinform.get("upass")
  }

   SigninData(){
    localStorage.setItem('logemail',this.Signinform.value.umail)
    localStorage.setItem('logpass',this.Signinform.value.upass)

    if (localStorage.getItem('regemail')==localStorage.getItem('logemail') && localStorage.getItem('regpass')==localStorage.getItem('logpass') ){
      alert('Login Sucess')
    }else{
      alert('Invalid Login Credientials')
    }
    console.log(this.Signinform.value)
  }
}
