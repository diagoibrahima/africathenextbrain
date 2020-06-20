import { AuhtenticationService } from './../service/auhtentication.service';
import { AlertService } from './../_alert/alert.service';
import { ActivatedRoute } from '@angular/router';
import { IdeesService } from './../service/idees.service';
import { ContributionService } from './../service/contribution.service';
import { Component, OnInit, Input } from '@angular/core';
import * as glob from '../../shared/global';
import { KeycloakSecurityService } from '../services/keycloak-security.service';
import { ContributionsService } from '../services/contributions.service';

@Component({
  selector: 'app-list-contribution',
  templateUrl: './list-contribution.component.html',
  styleUrls: ['./list-contribution.component.css']
})
export class ListContributionComponent implements OnInit {






public contributions: any;
public suppliers: any;
public size = 5;
public currentPage = 0;
public totalPages: number;
public pages: Array<number>;
private currentKeyword: string;
urlLinkedin = glob.linkedinUrl;
 public errorMessage: any;

@Input() sec: string;

isShow:boolean;
isShow2:boolean;
 public agentProfile: any = {};


  constructor(protected ideesService: IdeesService,
              private route: ActivatedRoute,
              protected alertService: AlertService, 
              protected authService: AuhtenticationService, 
              protected securityService:KeycloakSecurityService,
              private contributionsService:ContributionsService) { }

  ngOnInit() {
    //this.contributionList = this.contributionServive.getContribution();
    this.sec = this.route.snapshot.params['id'];
  
  // if(this.securityService.kc.authenticated) this.onGetContributions();
  /*  this.contributionsService.getContributions()
      .subscribe(data=>{
          this.contributions=data;
        },err=>{
          console.log(err);
        });
*/
/*if(this.securityService.kc.authenticated){
      this.contributionsService.getContributions()
      .subscribe(data=>{
        this.suppliers=data;
        }, err=>{  
          this.errorMessage=err.error.message;    
    });
}*/
/*if(this.securityService.kc.authenticated){
      this.contributionsService.getContributions()
      .subscribe(data=>{
        this.contributions=data;
        }, err=>{  
          this.errorMessage=err.error.message;    
    });
}*/
this.onGetContributions();
if(this.securityService.kc.authenticated){
this.securityService.kc.loadUserProfile().then(user => {
            this.agentProfile = user;
        })
}

  }

  onGetContributions() {
this.contributionsService.getContributionsBySecteur(this.sec, this.currentPage, this.size)
.subscribe(data => {
this.totalPages = data['totalPages'];
this.pages = new Array<number>(this.totalPages);
this.contributions = data;
  }, err => {
  this.errorMessage=err.error.message;
  });
}

onPageContributionNext() {

      if(this.currentPage<this.totalPages-1){
      this.currentPage = this.currentPage + 1;
      this.onGetContributions();
      console.log(this.currentPage);
      }




}

onPageContributionPrevious() {
if(this.currentPage>0){
  this.currentPage = this.currentPage - 1;
  this.onGetContributions();
  console.log(this.currentPage)
}

}

onChercher(form: any) {
this.currentPage = 0;
this.currentKeyword = form.keyword;
this.chercherContributions();
}

chercherContributions() {
this.ideesService.getContributionsByKeyword(this.currentKeyword, this.currentPage, this.size)
.subscribe(data => {
this.totalPages = data['totalPages'];
this.pages = new Array<number>(this.totalPages);
this.contributions = data;

  }, err => {
  console.log(err);
  });
}

onDeleteContribution(c) {
const conf = confirm('Etes vous sure');
if (conf) {
this.ideesService.deleteRessource(c._links.self.href)
.subscribe(data => {
this.chercherContributions();
}, err => {
 console.log(err);
});
}

}

  toggleDisplay() {
  if(this.securityService.kc.authenticated){
       if(this.isShow==true){
          this.isShow=false;
        }else{
          this.isShow=true;
        }
        console.log(this.isShow);
    }else{
      console.log("Get login");
       if(this.isShow2==true){
          this.isShow2=false;
        }else{
          this.isShow2=true;
        }
      //this.securityService.kc.login();
}
  
   //this.isconnected=this.ideesService.toggleDisplay(this.isconnected)

     // console.log("isShow: " + this.isShow)
      //console.log("isisconnected: " + this.isconnected)
  }



}
