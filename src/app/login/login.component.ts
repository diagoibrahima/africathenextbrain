import { Router } from '@angular/router';
import { logging } from 'protractor';
import { AuhtenticationService } from './../service/auhtentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuhtenticationService, private router:Router) { }

  ngOnInit() {
  }

onLogin(dataForm:any){
  this.authService.login(dataForm.username, dataForm.password);
  if(this.authService.isAuthenticated){
      this.authService.saveAutntenticatedUser();
      //this.router.navigateByUrl('');
    }
}

}
