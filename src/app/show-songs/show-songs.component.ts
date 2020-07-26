import { Component, PipeTransform, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { FormBuilder, Validators, FormGroup, Form } from '@angular/forms';
import { PlaySongService } from "../play-song.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-songs',
  templateUrl: './show-songs.component.html',
  styleUrls: ['./show-songs.component.css'],

})
export class ShowSongsComponent implements OnInit {
  songs = [];
  playlistForm;
  ID;
  url: string;
  playlists = [];
  constructor(private api: UserApiService, private fb: FormBuilder, private play: PlaySongService, private route: Router) {
    if (!localStorage.getItem("activeUser")) {
      this.route.navigateByUrl("");
    } this.api.showSongs().subscribe(res => {
      console.log(res);
      this.songs = res;
      console.log(this.songs);
    })

    var id = localStorage.getItem("activeUser");
    this.ID = parseInt(id);
    var request = {
      "id": this.ID
    }
    console.log(request);
    this.api.showUserPlaylists(request).subscribe(res => {
      res.forEach(element => {
        this.playlists.push(element);

      });
      console.log(this.playlists);
    })

    this.playlistForm = this.fb.group({
      "playlistId": this.fb.control("Choose a playlist", Validators.required)

    })


  }

  ngOnInit(): void {
    this.play.path.subscribe(message => this.url = message);

  }

  newMessage(value) {
    this.play.changeMessage(value)
  }

  addSong(s_id) {
    if (this.playlistForm.value.playlistId > 0) {
      var pid = parseInt(this.playlistForm.value.playlistId);
      console.log(typeof (pid));
      console.log(s_id);
      var request =
      {
        song_id: s_id,
        ownerId: this.ID,
        pl_id: pid
      }

      this.api.addSongToPl(request).subscribe(res => {
        if (res) {
          console.log(res);
          window.alert("Song Added");
        }
      })
    }
    else {
      window.alert("Please choose a playlist");
    }
  }


}

