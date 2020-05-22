import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { ProfileComponent } from '../profile.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  profileData = [];
  name:string;
  skills = []; 
  constructor(private profileService: ProfileService) { 
  }
  
  
  ngOnInit(): void {
    
    this.profileService.getProfileData().subscribe(
      data => 
      {
        this.profileData = data;
        // console.log(this.profileData[0].profileName);
        this.name = this.profileData[0].profileName;
        this.skills = this.profileData[0].profileSkills;
        for (let i = 0; i < this.skills.length; i++) {
          const element = this.skills[i]; 
          // console.log(this.skills[i]);         
        }
        // console.log(this.skills);
      },
      (err:HttpErrorResponse) => {
        console.log(err.message);        
      }

    );
  }
}
