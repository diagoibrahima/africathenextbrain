import { AproposComponent } from './apropos/apropos.component';
import { SecteurViewComponent } from './secteur-view/secteur-view.component';

import { MainComponent } from './main/main.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContributionsComponent} from './contributions/contributions.component';
import {NewContributionComponent} from './new-contribution/new-contribution.component';



const routes: Routes = [
  {
    path: 'contributions', component: ContributionsComponent
  },
  {
    path: 'new-contribution', component: NewContributionComponent
  },
{
    path: 'main', component: MainComponent
  },
{
  path: 'secteur/:id', component: SecteurViewComponent
},
  {
    path: '', redirectTo:'main', pathMatch:'full'
  },
{
    path: 'apropos', component: AproposComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
