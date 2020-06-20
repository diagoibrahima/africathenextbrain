import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from '../services/keycloak-security.service';
import { ContributionsService } from '../services/contributions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contribution-by-user',
  templateUrl: './list-contribution-by-user.component.html',
  styleUrls: ['./list-contribution-by-user.component.css']
})
export class ListContributionByUserComponent implements OnInit {

public contributions: any;
public suppliers: any;
public size = 2;
public currentPage = 0;
public totalPages: number;
public pages: Array<number>;
public errorMessage: any;
isShow:boolean;
isShow2:boolean;

  constructor(public securityService:KeycloakSecurityService,
              private contributionsService:ContributionsService, private router:Router) { }

  ngOnInit() {
      this.onGetContributions();
  }

 onGetContributions() {
this.contributionsService.getContributionsByUser(this.securityService.kc.tokenParsed['user_id'], this.currentPage, this.size)
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
}
  }

gomenu= function () {
        this.router.navigateByUrl('/');
};

onDelete(mc:String){
  
}
}
