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
import { ReviewComponent } from './components/review/review.component';
import { MoviesComponent } from './components/movies/movies/movies.component';
import { MoviesItemComponent } from './components/movies/movies-item/movies-item.component';
import { MoviesDateComponent } from './components/movies/movies-date/movies-date.component';
import { EventsComponent } from './components/history/events/events.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleClassModule } from 'primeng/styleclass';
import { NumberWithCommasPipe } from '../assets/pipe/number-with-commas.pipe';
import { FavouritesComponent } from './components/favourites/favourites/favourites.component';
import { FavouriteItemComponent } from './components/favourites/favourite-item/favourite-item/favourite-item.component';

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
    ReviewComponent,
    MoviesComponent,
    MoviesItemComponent,
    MoviesDateComponent,
    EventsComponent,
    NumberWithCommasPipe,
    FavouritesComponent,
    FavouriteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    MatTabsModule,
    ButtonModule,
    BrowserAnimationsModule,
    StyleClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


