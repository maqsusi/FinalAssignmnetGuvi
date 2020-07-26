import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ShowSongsComponent } from './show-songs/show-songs.component';
import { ShowPlaylistsComponent } from './show-playlists/show-playlists.component';
import { FollowedArtistsComponent } from './followed-artists/followed-artists.component';
import { ShowArtistsComponent } from './show-artists/show-artists.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponentComponent
  },
  {
    path: "",
    component: UserLoginComponent
  },
  {
    path: "songs",
    component: ShowSongsComponent
  },
  {
    path: "playlists",
    component: ShowPlaylistsComponent
  },
  {
    path: "yourArtists",
    component: FollowedArtistsComponent
  },
  {
    path: "artists",
    component: ShowArtistsComponent
  },
  {
    path: "profile",
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
