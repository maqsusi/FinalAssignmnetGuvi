import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-show-artists',
  templateUrl: './show-artists.component.html',
  styleUrls: ['./show-artists.component.css']
})
export class ShowArtistsComponent implements OnInit {
  artists = [];
  id;
  constructor(private api: UserApiService, private route: Router) {
    if(!localStorage.getItem("activeUser"))
{
  this.route.navigateByUrl("");
}
    this.api.showArtists().subscribe(res => {

      res.forEach(element => {
        this.artists.push(element);


      });

    })
    console.log(this.artists);
    this.id = parseInt(localStorage.getItem("activeUser"));

  }

  ngOnInit(): void {
  }

  followArtist(i) {
    var request =
    {
      OwnerId: this.id,
      ArtistId: i
    }

    this.api.followArtist(request).subscribe(res =>
      {
        if(res)
        {
          console.log(res);
          window.alert("Followed");
        }
      })
  }


}
