import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { NewContributionComponent } from './new-contribution/new-contribution.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecteurService } from './service/secteur.service';
import { SecteurComponent } from './secteur/secteur.component';
import { SecteurViewComponent } from './secteur-view/secteur-view.component';
import { ListContributionComponent } from './list-contribution/list-contribution.component';
import { ContributionService } from './service/contribution.service';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [SecteurService, ContributionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
