import { Injectable } from '@angular/core';
import {KeycloakInstance} from "keycloak-js";
import * as glob from '../../shared/global';
declare var Keycloak:any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc : KeycloakInstance

  constructor() { }

  public async init(){
    console.log("Security Initilalisation....................");
    this.kc=new Keycloak({
      url:glob.url_server_auth,
      realm:glob.realm,
      clientId:glob.clientId
    });
    await this.kc.init({
        //Cette attribut parmet de demander une authentification au demarrage de l'app
      //onLoad:'login-required'

      /*fait appel a l'authentification a la demande avec cette methode il
      check dans les cookies un utilisateur connecté et si c'est le cas il n'auras
      pas besion de demander une authentification il le fera diretement avec le token disponible
      */
     onLoad:"check-sso"
    //promiseType:"native" seems to be deprecated
    });
      console.log(this.kc.token);
  }
}
