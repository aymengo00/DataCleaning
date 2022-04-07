import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { CreateAccountComponent } from './logged-out/create-account/create-account.component';
import { LogInComponent } from './logged-out/log-in/log-in.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DashboardComponent } from './main-page/dashboard/dashboard.component';
import { HomeComponent } from './main-page/home/home.component';
import { GridViewComponent } from './main-page/grid-view/grid-view.component';
import { SingleViewComponent } from './main-page/grid-view/single-view/single-view.component';
import { UserNameComponent } from './main-page/user-name/user-name.component';
import { EditProfileComponent } from './main-page/user-name/edit-profile/edit-profile.component';
import { HistoryComponent } from './main-page/user-name/history/history.component';
import { FiltersComponent } from './main-page/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggedOutComponent,
    CreateAccountComponent,
    LogInComponent,
    MainPageComponent,
    DashboardComponent,
    HomeComponent,
    GridViewComponent,
    SingleViewComponent,
    UserNameComponent,
    EditProfileComponent,
    HistoryComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
