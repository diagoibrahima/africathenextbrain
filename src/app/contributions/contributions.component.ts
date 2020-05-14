import { IdeesService } from './../service/idees.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as glob from '../../shared/global';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {

public contributions: any;
public size = 100;
public currentPage = 0;
public totalPages: number;
public pages: Array<number>;
private currentKeyword: string;

  constructor(private ideesService: IdeesService) { }

  ngOnInit() {

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

onPageContribution(i) {
  this.currentPage = i;
  this.chercherContributions();
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
}
