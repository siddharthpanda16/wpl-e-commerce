import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';

import { DataService } from './data.service';
import { UserService } from './services/userServices';
import { MovieService } from './services/movieServices';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    HomeComponent,
    PlaylistComponent,
    AdminComponent,
    NavComponent,
    TopRatedComponent,
    RecommendedComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DataService,
    UserService,
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
