import { Component, OnInit } from '@angular/core';
import {UserApiService} from '../user-api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-followed-artists',
  templateUrl: './followed-artists.component.html',
  styleUrls: ['./followed-artists.component.css']
})
export class FollowedArtistsComponent implements OnInit {
  Id;
  artists = [];
  follow = false;
  length = 0;
  constructor(private api: UserApiService, private route: Router) {
    if(!localStorage.getItem("activeUser"))
    {
      this.route.navigateByUrl("");
    }


    this.Id = parseInt(localStorage.getItem("activeUser"));
    var request = {
      ownerId : this.Id
    }
    this.api.followedArtists(request).subscribe(res =>
      {
        res.forEach(element => {
          this.artists.push(element);
          
        });
      })
      console.log(this.artists);

      console.log(this.length);
      this.artists.forEach(element => {
        console.log(element);
      });

      if(this.length > 0)
      {
        this.follow = true;
        console.log(this.artists);
      }

   }

  ngOnInit(): void {
  }

  unfollowArtist(i)
  {
    console.log(typeof(i));
    var request =
    {
      OwnerId: this.Id,
      ArtistId: i
    }
    this.api.unfollowArtist(request).subscribe(res =>
      {
        if(res)
        {
          this.artists = [];
          console.log(res);
          this.api.followedArtists(request).subscribe(res =>
            {
              res.forEach(element => {
                this.artists.push(element);
                
              });
            })
            console.log(this.artists);
      
            console.log(this.length);
            this.artists.forEach(element => {
              console.log(element);
            });
        }
        else
        {
          window.alert("Unable to unfollow");
        }
      })

  }

}
