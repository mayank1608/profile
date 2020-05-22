import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public profileService: ProfileService) { }
  profileData = [];
  expData = [];
  eduData = [];
  ngOnInit(): void {
    this.profileService.getProfileData().subscribe(
      data => {
        this.profileData = data;
        this.expData = this.profileData[0].profileExperience;
        this.eduData = this.profileData[0].profileQualification;
      },
      (error:HttpErrorResponse) => {
        console.log(error.message)
      }
    );
  }

}
