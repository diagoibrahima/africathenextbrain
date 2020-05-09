import { Injectable } from '@angular/core';
import { Contribution } from './../model/contribution.model';
export class ContributionService{


contributionList: Array<Contribution> = ([
  {id: 1, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Agriculture'},
  {id: 2, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Santé'},
  {id: 3, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Science'},
  {id: 4, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Education'},
  {id: 5, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Commerce'},
  {id: 6, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Technologie'},
  {id: 7, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Economie'},
  {id: 8, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Industrie'},
  {id: 9, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Tourisme'},
  {id: 10, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Peche'},
  {id: 10, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Elevage'},
  {id: 10, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Economie Numérique'},
  {id: 10, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Transport'},
  {id: 10, message: 'Je pense que pour ce qui converne ', etat: 1, secteur:'Autre'},
])

getContribution(){
    return this.contributionList;
  }

getContributionBySecteur(secteur: string){
    const contrib = this.contributionList.find(
    (contributionObject) => {
    return contributionObject.secteur === secteur;}
    );
      return contrib;
  }


}
