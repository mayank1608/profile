import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  profileData = [];
  aboutData:any;
  skillData:any;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfileData().subscribe(
      data => {
        this.profileData = data;
        this.aboutData = this.profileData[0];
        this.skillData = this.profileData[0].profileSkillSets;
      },
      (err:HttpErrorResponse) => {
        console.log(err.message);
      }
    );

  }

}
