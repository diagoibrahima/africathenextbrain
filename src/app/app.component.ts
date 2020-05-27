import { Component, OnInit } from '@angular/core';
import * as glob from '../shared/global';
import { AuhtenticationService } from './service/auhtentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
title = 'frontatnbv1';

constructor(private authService:AuhtenticationService){

}

ngOnInit(): void {
  this.authService.loadAuthenticatedUserFromLocalStorage();
}

}
