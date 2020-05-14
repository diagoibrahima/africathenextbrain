import { IdeesService } from './../service/idees.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as glob from '../../shared/global';

@Component({
  selector: 'app-new-contribution',
  templateUrl: './new-contribution.component.html',
  styleUrls: ['./new-contribution.component.css']
})
export class NewContributionComponent implements OnInit {

  @Input() sec: string;
  date_contrib : number;
  constructor(private ideesService: IdeesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sec = this.route.snapshot.params['id'];
    this.date_contrib = Date.now();
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
