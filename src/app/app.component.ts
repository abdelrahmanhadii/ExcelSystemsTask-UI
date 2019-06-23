import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnviromentService } from './enviroment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExcelSystemsTask';

  constructor(private router:Router, private env:EnviromentService){
    if(localStorage.getItem("Token").length > 0){
      env.btnName = "Log out"
    }else{
      env.btnName = "Log in"
    }
  }

  logAction(){
    if(this.env.btnName == "Log in"){
      this.router.navigate(['/login']);
    }else{
      this.logOut();
    }
  }
  logOut(){
    localStorage.setItem('Token', "");
    this.env.btnName = "Log in"
    this.router.navigate(['/login']);
  }
}
