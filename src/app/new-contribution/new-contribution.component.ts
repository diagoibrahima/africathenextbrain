import { AlertService } from './../_alert/alert.service';
import { IdeesService } from './../service/idees.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as glob from '../../shared/global';
import { KeycloakSecurityService } from '../services/keycloak-security.service';

@Component({
  selector: 'app-new-contribution',
  templateUrl: './new-contribution.component.html',
  styleUrls: ['./new-contribution.component.css']
})
export class NewContributionComponent implements OnInit {

  @Input() sec: string;
  date_contrib : number;
  urlBack : string
@Input() isShow: boolean;

  constructor(private ideesService: IdeesService, private router: Router, private route: ActivatedRoute, public securityService:KeycloakSecurityService) { }

  ngOnInit() {
    this.sec = this.route.snapshot.params['id'];
    this.date_contrib = Date.now();
  }

  onSaveContribution(data: any) {
this.ideesService.saveRessource(glob.host+'contributions', data)
.subscribe(res => {
this.isShow = this.ideesService.toggleDisplay(this.isShow);
this.router.onSameUrlNavigation = 'reload';

//alert("Success Adding");

}, err => {
console.log(err);
})
}
}
