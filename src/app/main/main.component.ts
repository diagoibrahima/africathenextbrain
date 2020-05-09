import { SecteurService } from './../service/secteur.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as glob from '../../shared/global';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ind: string;
  constructor(private router: Router) { }

  ngOnInit() {

  }

changementDePage(){
this.router.navigate(['/secteur']);
}

}
