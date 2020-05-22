import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profileData = [];
  name:string;
  constructor(private profileService:ProfileService) { }
  ngOnInit(): void {
    this.profileService.getProfileData().subscribe(
      data => {
        this.profileData = data;	 // FILL THE ARRAY WITH DATA.
        // console.log(this.profileData[0].profileName);
        this.name = this.profileData[0].profileName;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  nightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  

}
