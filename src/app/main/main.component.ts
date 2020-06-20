import { SecteurService } from './../service/secteur.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as glob from '../../shared/global';
import { KeycloakSecurityService } from '../services/keycloak-security.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ind: string;
  constructor(private router: Router, public securityService:KeycloakSecurityService) { }

  ngOnInit() {
this.router.onSameUrlNavigation = 'reload';
  }

changementDePage(){
this.router.navigate(['/secteur']);
}

onChangePassword(){
this.securityService.kc.accountManagement();
}

onLogout(){
     this.securityService.kc.logout();
    
}

onLogin(){
     this.securityService.kc.login();
    //this.router.navigate(['/profil']);
}

}
