import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

import { RemovewhitespacesPipe } from '../../custompipe/removewhitespaces.pipe';
import { HttpErrorResponse } from '@angular/common/http';
// import * as mixitup from 'mixitup';
// import { mixitup } from 'mixitup';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  profileData = [];
  portfolioTags:any;
  portfolioData:any;
  constructor(private profileService: ProfileService) { }
  ngOnInit(): void {
    this.profileService.getProfileData().subscribe(
      data => {
        this.profileData = data;	 // FILL THE ARRAY WITH DATA.
        this.portfolioTags = this.profileData[0].profilePortfolioTags;
        this.portfolioData = this.profileData[0].profilePorfolioData;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    // var mixer = mixitup('.portfolio-filter'); 
  }

}
