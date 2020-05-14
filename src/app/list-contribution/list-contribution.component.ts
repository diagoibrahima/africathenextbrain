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
prifillinkedin = "el-hadji-ibrahima-diago-11729466"
@Input() sec: string;

isShow = false;

  constructor(private ideesService: IdeesService) { }

  ngOnInit() {
    //this.contributionList = this.contributionServive.getContribution();

    this.onGetContributions();

  }

  onGetContributions() {
this.ideesService.getContributions(this.currentPage, this.size)
.subscribe(data => {
this.totalPages = data['page'].totalPages;
this.pages = new Array<number>(this.totalPages);
this.contributions = data;

  }, err => {
  console.log(err);
  });
}

onPageContributionNext() {


      this.currentPage = this.currentPage + 1;
      this.onGetContributions();
      console.log(this.currentPage);





}

onPageContributionPrevious() {
while(this.currentPage>0){
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

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

}
