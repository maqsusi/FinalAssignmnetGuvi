import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {UserApiService} from '../user-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  invalid = false;
  incorrect = false;
  userForm;
  constructor(private route: Router, private fb: FormBuilder, private api: UserApiService) {
    this.userForm = this.fb.group({
      "Username" : this.fb.control("", Validators.required),
      "Password": this.fb.control("", Validators.required)
    })
   }

  ngOnInit(): void {
  }

  userLogin()
  {
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.api.userLogin(this.userForm.value).subscribe(res =>
        {
          console.log(res);
          if(res == -2)
          {
            this.invalid = false;
            this.incorrect = true;
          }
          else if(res == -1)
          {
            this.incorrect = false;
            this.invalid = true;
          } 
          else if(res > 0)
          {
            console.log(res);
            localStorage.setItem("activeUser", res);
            this.route.navigateByUrl("songs")
          }
        });
    }
  }
}
