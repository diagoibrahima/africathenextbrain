import { Secteur } from './../model/secteur.model';
import { Injectable } from '@angular/core';
import * as glob from '../../shared/global';

@Injectable({
providedIn: 'root'
})
export class SecteurService{

secteurList: Array<Secteur> = ([
  { id: 1, secteur: 'Agriculture', image:'pic01.jpg', ind:'ind01.jpg', hashtag:'#atnbagr'},
  { id: 2, secteur: 'Santé', image: 'pic02.jpg', ind:'ind02.jpg', hashtag:'#atnbsan'},
  { id: 3, secteur: 'Education', image: 'pic03.jpg', ind:'ind03.jpg', hashtag:'#atnbedu'},
  { id: 4, secteur: 'Transport', image: 'pic04.jpg', ind:'ind04.jpg', hashtag:'#atnbtra'},
  { id: 5, secteur: 'Science', image: 'pic06.jpg', ind:'ind06.jpg', hashtag:'#atnbsci'},
  { id: 6, secteur: 'Industrie', image: 'pic05.jpg', ind:'ind05.jpg', hashtag:'#atnbind'},
  { id: 7, secteur: 'Peche', image: 'pic08.jpg', ind:'ind08.jpg', hashtag:'#atnbpec'},
  { id: 8, secteur: 'Sport', image: 'pic07.jpg', ind:'ind07.jpg', hashtag:'#atnbspo'},
  { id: 9, secteur: 'Economie', image: 'pic09.jpg', ind:'ind09.jpg', hashtag:'#atnbeco'},
  { id: 10, secteur: 'Commerce', image: 'pic12.jpg', ind:'ind12.jpg', hashtag:'#atnbcom'},
  { id: 11, secteur: 'Tourisme', image: 'pic11.jpg', ind:'ind11.jpg', hashtag:'#atnbtou'},
  { id: 12, secteur: 'Art & Culture', image: 'pic10.jpg', ind:'ind10.jpg', hashtag:'#atnbart'},
  { id: 13, secteur: 'Technologie', image: 'pic13.jpg', ind:'ind13.jpg', hashtag:'#atnbtec'},
  { id: 14, secteur: 'Politique', image: 'pic14.jpg', ind:'ind14.jpg', hashtag:'#atnbpol'},
  { id: 15, secteur: 'Elevage', image: 'pic15.jpg', ind:'ind15.jpg', hashtag:'#atnbele'},
  { id: 16, secteur: 'Autre', image: 'pic16.jpg', ind:'ind16.jpg', hashtag:'#atnb'}
])

constructor(){}
  getSecteur(){
    return this.secteurList;
  }

  getSecteurBySecteur(secteur: string){
    const sect = this.secteurList.find(
    (secteurObject) => {
    return secteurObject.secteur === secteur;}
    );
      return sect;
  }

}
