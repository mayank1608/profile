import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public profileFullDesc: any;
  public profileSkillSets:any;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileFullDesc = this.profileService.description();
    this.profileSkillSets = this.profileService.skills();
    // console.log(this.profileSkillSets);

  }

}
