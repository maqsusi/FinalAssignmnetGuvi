import { Component, OnInit } from '@angular/core';
import { PlaySongService } from "../play-song.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  url: string;
  toPlay:string;
  constructor(private play: PlaySongService) { }

  ngOnInit(): void {
    this.play.path.subscribe(message => this.url = message);
    this.toPlay = this.url;
  }

}
