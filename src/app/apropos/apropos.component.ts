import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from '../services/keycloak-security.service';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {

  constructor(public securityService:KeycloakSecurityService) { }

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
    //this.router.navigate(['/profil']);
}

}
