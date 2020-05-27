import { AuhtenticationService } from './../service/auhtentication.service';
import { AlertService } from './../_alert/alert.service';
import { ActivatedRoute } from '@angular/router';
import { IdeesService } from './../service/idees.service';
import { ContributionService } from './../service/contribution.service';
import { Component, OnInit, Input } from '@angular/core';
import * as glob from '../../shared/global';

@Component({
  selector: 'app-list-contribution',
  templateUrl: './list-contribution.component.html',
  styleUrls: ['./list-contribution.component.css']
})
export class ListContributionComponent implements OnInit {






public contributions: any;
public size = 2;
public currentPage = 0;
public totalPages: number;
public pages: Array<number>;
private currentKeyword: string;
urlLinkedin = glob.linkedinUrl;


@Input() sec: string;

isShow = false;
isconnected=true;

  constructor(protected ideesService: IdeesService,
              private route: ActivatedRoute,
              protected alertService: AlertService, protected authService: AuhtenticationService) { }

  ngOnInit() {
    //this.contributionList = this.contributionServive.getContribution();
    this.isShow=false;
    this.isconnected=true;
    this.sec = this.route.snapshot.params['id'];
    this.onGetContributions();



  }

  onGetContributions() {
this.ideesService.getContributionsBySecteur(this.sec, this.currentPage, this.size)
.subscribe(data => {
this.totalPages = data['page'].totalPages;
this.pages = new Array<number>(this.totalPages);
this.contributions = data;

  }, err => {
  console.log(err);
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
this.totalPages = data['page'].totalPages;
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

  toggleDisplay(isShow, isconnected) {
   this.isShow=this.ideesService.toggleDisplay(this.isShow)
   this.isconnected=this.ideesService.toggleDisplay(this.isconnected)

      console.log("isShow: " + this.isShow)
      console.log("isisconnected: " + this.isconnected)
  }



}
