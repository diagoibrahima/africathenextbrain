import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloakSecurityService } from './keycloak-security.service';
import * as glob from '../../shared/global';

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {

  constructor(private http:HttpClient, private securityService:KeycloakSecurityService) { }

  public getContributions(){
  return this.http.get(glob.host+"contributions");
                        
}

/*
public getContributionsBySecteur(mc: string, page: number, size: number) {
  return this.http.get("http://localhost:8081/contributions/search/byDomainePage?mc=" + mc + "&page=" + page + "&size=" + size + "&sort=date_contrib,desc");
}
*/

public getContributionsBySecteur(mc: string, page: number, size: number) {
  return this.http.get(glob.host+"listContributionsByDomaine?mc=" + mc + "&page=" + page + "&size=" + size );
}

public getContributionsByUser(mc: string, page: number, size: number) {
  return this.http.get(glob.host+"listContributionsByUser?mc=" + mc + "&page=" + page + "&size=" + size );
}


public deleteContribution(mc: string) {
  return this.http.get(glob.host+"deleteContribution/"+mc);
}


} 
