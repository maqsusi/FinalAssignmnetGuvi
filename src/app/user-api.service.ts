import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  registerUser(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/register", request);
  }

  userLogin(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/login", request);
  }

  showSongs(): Observable<any> {
    return this.http.get("https://akshat-assignment.azurewebsites.net/api/users/showsongs");
  }

  showUserPlaylists(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/userplaylist", request)
  }

  showPlaylistSongs(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/songsinplaylist", request)
  }

  addSongToPl(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/addsongtoplaylist", request);
  }

  removeSongFromPl(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/RemoveSongFromPL", request);
  }

  followedArtists(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/YourArtists", request);
  }

  unfollowArtist(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/UnfollowArtist", request);
  }

  showArtists(): Observable<any> {
    return this.http.get("https://akshat-assignment.azurewebsites.net/api/admin/artists");
  }

  followArtist(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/FollowArtist", request);
  }

  createPlaylist(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/AddPlaylist", request);
  }

  getUserInfo(request): Observable<any> {
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/users/UserInfo", request);
  }

}
