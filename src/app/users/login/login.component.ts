import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EnviromentService } from 'src/app/enviroment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private service:UsersService, private router:Router, private env:EnviromentService) { 
    this.loginForm = new FormGroup({
      UserName: new FormControl(),
      Password: new FormControl()
   });
  }
  ngOnInit() {
    
  }
  login(){
    console.log(this.loginForm);
    this.service.login(this.loginForm.value).subscribe(a=>{
      if (a.token.length > 0) {
        this.router.navigate(['/allbooks']);
        this.env.btnName = "Log out";
        localStorage.setItem('Token', a.token);
      }else{
        window.alert("check your inputs!");
      }
    });
  }
}
