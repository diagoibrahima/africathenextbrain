import { IdeesService } from './../service/idees.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as glob from '../../shared/global';

@Component({
  selector: 'app-new-contribution',
  templateUrl: './new-contribution.component.html',
  styleUrls: ['./new-contribution.component.css']
})
export class NewContributionComponent implements OnInit {

  constructor(private ideesService: IdeesService, private router: Router) { }

  ngOnInit() {
  }

  onSaveContribution(data: any) {

this.ideesService.saveRessource(this.ideesService.host + '/contributions', data)
.subscribe(res => {
this.router.navigateByUrl('/contributions');
}, err => {
console.log(err);
})
}

}
