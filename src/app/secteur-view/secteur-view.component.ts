import { KeycloakSecurityService } from './../services/keycloak-security.service';
import { AuhtenticationService } from './../service/auhtentication.service';
import { ContributionService } from './../service/contribution.service';
import { SecteurService } from './../service/secteur.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as glob from '../../shared/global';

@Component({
  selector: 'app-secteur-view',
  templateUrl: './secteur-view.component.html',
  styleUrls: ['./secteur-view.component.css']
})
export class SecteurViewComponent implements OnInit {

  @Input() sec: string;
  ind: string;
  hashtag: string;
  urlimages = glob.urlimages;


  contributionList: any;

  constructor(private route: ActivatedRoute, private secteurService: SecteurService,
              private contributionService: ContributionService,
              private router:Router,
              public authService:AuhtenticationService,
              public securityService:KeycloakSecurityService) { }

  ngOnInit() {
  this.sec = this.route.snapshot.params['id'];
    const sec = this.route.snapshot.params['id'];
    this.ind = this.secteurService.getSecteurBySecteur(sec).ind;
    this.hashtag = this.secteurService.getSecteurBySecteur(sec).hashtag;

    this.contributionList = this.contributionService.getContribution();

  }

onChangePage(){

}
/*
onLogout(){
      this.authService.removeTokenFromLocalStorage();
      this.router.navigateByUrl('/');
}
*/

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
