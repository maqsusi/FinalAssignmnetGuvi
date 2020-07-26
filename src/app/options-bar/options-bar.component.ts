import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.css']
})
export class OptionsBarComponent implements OnInit {

  constructor(private route: Router ) { }

  ngOnInit(): void {
  }
logout()
{
  
    localStorage.removeItem("activeUser");
    this.route.navigateByUrl("");
  
}
}
