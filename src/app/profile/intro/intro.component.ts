import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
// import { ProfileComponent } from '../profile.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  public profileFullDesc: any;  
  public profileSkillsArray: any; 
  constructor(private profileService: ProfileService) { 
  }
  
  
  ngOnInit(): void {
    this.profileFullDesc = this.profileService.description();
    this.profileSkillsArray = this.profileService.skillList();
    
    // console.log(ProfileComponent.prototype);
  }
}
