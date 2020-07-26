import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {UserApiService} from '../user-api.service';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  userForm;
  exists = false;
  constructor(private route: Router, private fb: FormBuilder, private api: UserApiService) {
    this.userForm = this.fb.group({
      "FullName": this.fb.control("", Validators.required),
      "Username": this.fb.control("", Validators.required),
      "Password": this.fb.control("", Validators.required),
      "Age": this.fb.control("", Validators.required),
      "Gender": this.fb.control("", Validators.required)

    })
    
   }

  ngOnInit(): void {
  }

  register()
  {
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.api.registerUser(this.userForm.value).subscribe(res =>
        {
          console.log(res);
          if(res == false)
          {
            this.exists = true;
          }
          else
          {
            this.route.navigateByUrl("");
          }
        })
    }
  }

}
