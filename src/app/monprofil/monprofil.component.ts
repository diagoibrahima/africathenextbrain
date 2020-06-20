import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from '../services/keycloak-security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monprofil',
  templateUrl: './monprofil.component.html',
  styleUrls: ['./monprofil.component.css']
})
export class MonprofilComponent implements OnInit {

  constructor(public securityService:KeycloakSecurityService, private router:Router) { }

  ngOnInit() {
  }

onChangePassword(){
this.securityService.kc.accountManagement();
}

onLogout(){
     this.securityService.kc.logout();
    
}

onLogin(){
     this.securityService.kc.login();
    this.router.navigate(['/profil']);
}

}
