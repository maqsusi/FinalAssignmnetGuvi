import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user;
  loaded = false;
  constructor(private api: UserApiService, private route: Router) {
    
    if(!localStorage.getItem("activeUser"))
{
  this.route.navigateByUrl("");
}
    var request = {
      OwnerId: parseInt(localStorage.getItem("activeUser"))
    }
    this.api.getUserInfo(request).subscribe(res =>
      {
        this.user = res;
        this.loaded = true;
        console.log(this.user);
      })
   }
  
  ngOnInit(): void {
  }

}
