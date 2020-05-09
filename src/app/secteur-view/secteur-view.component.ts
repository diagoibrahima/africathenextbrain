import { ContributionService } from './../service/contribution.service';
import { SecteurService } from './../service/secteur.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private secteurService: SecteurService, private contributionService: ContributionService) { }

  ngOnInit() {
  this.sec = this.route.snapshot.params['id'];
    const sec = this.route.snapshot.params['id'];
    this.ind = this.secteurService.getSecteurBySecteur(sec).ind;
    this.hashtag = this.secteurService.getSecteurBySecteur(sec).hashtag;

    this.contributionList = this.contributionService.getContribution();

  }

onChangePage(){

}

}
