import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './@shared/components/login/login.component';
import { LogoutComponent } from './@shared/components/logout/logout.component';
import { RegisterComponent } from './@shared/components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './@shared/components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { MovieHistoryComponent } from './components/main-page/movie-&-history-page/movie-history/movie-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    LogoutComponent,
    NavbarComponent,
    WelcomeComponent,
    ProfileComponent,
    RankingsComponent,
    MovieHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
