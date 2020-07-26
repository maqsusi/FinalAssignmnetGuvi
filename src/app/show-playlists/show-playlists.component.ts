import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaySongService } from "../play-song.service";



@Component({
  selector: 'app-show-playlists',
  templateUrl: './show-playlists.component.html',
  styleUrls: ['./show-playlists.component.css']
})
export class ShowPlaylistsComponent implements OnInit {
  playlists = [];
  playlistForm;
  ID;
  url: string;
  constructor(private api: UserApiService, private route: Router, private fb: FormBuilder, private play: PlaySongService) {
    if (!localStorage.getItem("activeUser")) {
      this.route.navigateByUrl("");
    } 
    var id = localStorage.getItem("activeUser");
    this.ID = parseInt(id);
    var request = {
      "id": this.ID
    }
    console.log(request);
    this.api.showUserPlaylists(request).subscribe(res => {
      console.log(res);
      res.forEach(element => {

        var songs1 = [];
        this.api.showPlaylistSongs({ id: element.playlistId }).subscribe(res1 => {

          res1.forEach(element1 => {
            element1.show = true;
            songs1.push(element1);
            console.log(element1);

          });
        })
        var content =
        {
          p_name: element.playlist,
          p_id: element.playlistId,
          p_song: false,
          songs: songs1
        }
        this.playlists.push(content);
      });
      console.log(this.playlists);
    })



    this.playlistForm = this.fb.group({
      "PlaylistName": this.fb.control("", Validators.required)
    })


  }
  newMessage(value) {
    this.play.changeMessage(value)
  }

  ngOnInit(): void {
    this.play.path.subscribe(message => this.url = message);
  }

  toggle(i) {
    if (this.playlists[i].p_song == false) {
      this.playlists[i].p_song = true;
    }
    else {
      this.playlists[i].p_song = false;
    }
  }

  deleteSongFromPlaylist(pid, sid, index, i) {
    console.log(pid);
    console.log(sid);
    var request = {
      song_id: sid,
      pl_id: pid,
      ownerId: this.ID
    }
    this.api.removeSongFromPl(request).subscribe(res => {
      if (res) {
        console.log(res);
        this.playlists[i].songs[index].show = false;
        console.log(this.playlists[i].songs[index].show);
      }
    });
  }

  createPlaylist() {
    var request =
    {
      PlaylistName: this.playlistForm.value.PlaylistName,
      OwnerId: this.ID
    }

    this.api.createPlaylist(request).subscribe(res => {
      console.log(res);
      this.playlists = [];
      var request1 = {
        id: this.ID
      };
      this.api.showUserPlaylists(request1).subscribe(res => {
        console.log(res);
        res.forEach(element => {

          var songs1 = [];
          this.api.showPlaylistSongs({ id: element.playlistId }).subscribe(res1 => {

            res1.forEach(element1 => {
              element1.show = true;
              songs1.push(element1);
              console.log(element1);

            });
          })
          var content =
          {
            p_name: element.playlist,
            p_id: element.playlistId,
            p_song: false,
            songs: songs1
          }
          this.playlists.push(content);
        });
        console.log(this.playlists);
      })
    })



  }

}
