import { Component, OnInit } from '@angular/core';
import * as glob from '../shared/global';
import { AuhtenticationService } from './service/auhtentication.service';
import { KeycloakSecurityService } from './services/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
title = 'frontatnbv1';

constructor(public securityService:KeycloakSecurityService){

}

ngOnInit(): void {
  //this.authService.loadAuthenticatedUserFromLocalStorage();
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
