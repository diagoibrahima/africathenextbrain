import { KeycloakSecurityService } from './services/keycloak-security.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { NewContributionComponent } from './new-contribution/new-contribution.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecteurService } from './service/secteur.service';
import { SecteurComponent } from './secteur/secteur.component';
import { SecteurViewComponent } from './secteur-view/secteur-view.component';
import { ListContributionComponent } from './list-contribution/list-contribution.component';
import { ContributionService } from './service/contribution.service';
import { AlertModule } from './_alert';
import { LoginComponent } from './login/login.component';
import { AproposComponent } from './apropos/apropos.component';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { MonprofilComponent } from './monprofil/monprofil.component';
import { ListContributionByUserComponent } from './list-contribution-by-user/list-contribution-by-user.component';

export function kcFactory(kcSecurity:KeycloakSecurityService){
  return ()=> kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ContributionsComponent,
    NewContributionComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SecteurComponent,
    SecteurViewComponent,
    ListContributionComponent,
    LoginComponent,
    AproposComponent,
    MonprofilComponent,
    ListContributionByUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule,AlertModule
  ],
  providers: [SecteurService, ContributionService,
  {provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:RequestInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
