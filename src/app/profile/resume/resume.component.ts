import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public profileService: ProfileService) { }
  public profileExperience: any;
  public profileEducation:any;
  ngOnInit(): void {
    this.profileExperience = this.profileService.experience();
    this.profileEducation = this.profileService.qualification();
  }

}
