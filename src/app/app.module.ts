import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardsComponent } from './components/cards/cards.component';
import { UpcomingHackathonsComponent } from './components/upcoming-hackathons/upcoming-hackathons.component';
import { HackathonDeetsComponent } from './components/hackathon-deets/hackathon-deets.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateHackComponent } from './components/create-hack/create-hack.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HackPageComponent } from './components/hack-page/hack-page.component';
import { RegisterComponent } from './components/register/register.component';
import { NavContentComponent } from './components/nav-content/nav-content.component';
import { NavContentPrevComponent } from './components/nav-content-prev/nav-content-prev.component';
import { NavContentCompComponent } from './components/nav-content-comp/nav-content-comp.component';
import { NavContentCurrentComponent } from './components/nav-content-current/nav-content-current.component';
import { NavContentAllComponent } from './components/nav-content-all/nav-content-all.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    DashboardComponent,
    CardsComponent,
    UpcomingHackathonsComponent,
    HackathonDeetsComponent,
    FooterComponent,
    CreateHackComponent,
    CreateTeamComponent,
    HackPageComponent,
    RegisterComponent,
    NavContentComponent,
    NavContentPrevComponent,
    NavContentCompComponent,
    NavContentCurrentComponent,
    NavContentAllComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMyDatePickerModule,
    NgMultiSelectDropDownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
