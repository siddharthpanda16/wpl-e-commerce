import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AdminComponent } from './admin/admin.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'account', component: AccountComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'top-rated', component: TopRatedComponent},
  {path: 'recommended', component: RecommendedComponent},
  {path: 'movie/:id', component: DetailsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
