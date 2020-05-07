import { Secteur } from './../model/secteur.model';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class SecteurService{

secteurList: Array<Secteur> = ([
  { id: 1, secteur: 'Agriculture', image:'assets/images/pic01.jpg', ind:'ind01.jpg', hashtag:'#atnbagr'},
  { id: 2, secteur: 'Santé', image: 'assets/images/pic02.jpg', ind:'ind02.jpg', hashtag:'#atnbsan'},
  { id: 3, secteur: 'Education', image: 'assets/images/pic03.jpg', ind:'ind03.jpg', hashtag:'#atnbedu'},
  { id: 4, secteur: '', image: 'assets/images/pic04.jpg', ind:'ind04.jpg', hashtag:'#atnb'},
  { id: 5, secteur: 'Science', image: 'assets/images/pic06.jpg', ind:'ind06.jpg', hashtag:'#atnbsci'},
  { id: 6, secteur: 'Industrie', image: 'assets/images/pic05.jpg', ind:'ind05.jpg', hashtag:'#atnbind'},
  { id: 7, secteur: 'Peche', image: 'assets/images/pic08.jpg', ind:'ind08.jpg', hashtag:'#atnbpec'},
  { id: 8, secteur: 'Sport', image: 'assets/images/pic07.jpg', ind:'ind07.jpg', hashtag:'#atnbspo'},
  { id: 9, secteur: 'Economie', image: 'assets/images/pic09.jpg', ind:'ind09.jpg', hashtag:'#atnbeco'},
  { id: 10, secteur: 'Commerce', image: 'assets/images/pic12.jpg', ind:'ind12.jpg', hashtag:'#atnbcom'},
  { id: 11, secteur: 'Tourisme', image: 'assets/images/pic11.jpg', ind:'ind11.jpg', hashtag:'#atnbtou'},
  { id: 12, secteur: 'ArtCulture', image: 'assets/images/pic10.jpg', ind:'ind10.jpg', hashtag:'#atnbart'},
  { id: 13, secteur: 'Technologie', image: 'assets/images/pic13.jpg', ind:'ind13.jpg', hashtag:'#atnbtec'},
  { id: 14, secteur: 'Politique', image: 'assets/images/pic14.jpg', ind:'ind14.jpg', hashtag:'#atnbpol'},
  { id: 15, secteur: '', image: 'assets/images/pic15.jpg', ind:'ind15.jpg', hashtag:'#atnb'},
  { id: 16, secteur: '', image: 'assets/images/pic16.jpg', ind:'ind16.jpg', hashtag:'#atnb'}
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
