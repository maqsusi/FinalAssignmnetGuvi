import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { ShowSongsComponent } from './show-songs/show-songs.component';
import { OptionsBarComponent } from './options-bar/options-bar.component';
import { DecimalPipe } from '@angular/common';
import { ShowPlaylistsComponent } from './show-playlists/show-playlists.component';
import { FollowedArtistsComponent } from './followed-artists/followed-artists.component';
import { ShowArtistsComponent } from './show-artists/show-artists.component';
import { PlayerComponent } from './player/player.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FreeBarComponent } from './free-bar/free-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    UserLoginComponent,
    ShowSongsComponent,
    OptionsBarComponent,
    ShowPlaylistsComponent,
    FollowedArtistsComponent,
    ShowArtistsComponent,
    PlayerComponent,
    UserProfileComponent,
    FreeBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
