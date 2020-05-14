import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as glob from '../../shared/global';

@Injectable({
  providedIn: 'root'
})
export class IdeesService {

  public host = glob.host;
  constructor(private httpClient: HttpClient) { }

  public getContributions(page: number, size: number) {
  return this.httpClient.get(this.host + '/contributions?page=' + page + '&size=' + size + '&sort=date_contrib,desc');
}

public getContributionsByKeyword(mc: string, page: number, size: number) {
  return this.httpClient.get(this.host + '/contributions/search/byMessagePage?mc=' + mc + '&page=' + page + '&size=' + size + '&sort=date_contrib,desc');
}
public deleteRessource(url) {
  return this.httpClient.delete(url);
}

public saveRessource(url, data) {
  return this.httpClient.post(url, data);
}

}
