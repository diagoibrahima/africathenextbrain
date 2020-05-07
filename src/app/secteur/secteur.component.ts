import { Secteur } from './../model/secteur.model';
import { Router } from '@angular/router';
import { SecteurService } from './../service/secteur.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secteur',
  templateUrl: './secteur.component.html',
  styleUrls: ['./secteur.component.css']
})
export class SecteurComponent implements OnInit {


secteurList: any;

  constructor(private secteurService: SecteurService, private router: Router) { }

  ngOnInit() {
    this.secteurList = this.secteurService.getSecteur();
  }
}
