import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

import { RemovewhitespacesPipe } from '../../custompipe/removewhitespaces.pipe';
// import * as mixitup from 'mixitup';
// import { mixitup } from 'mixitup';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public profileService: ProfileService) { }
  public portfolioTags:any;
  public portfolioData:any;
  ngOnInit(): void {
    this.portfolioTags = this.profileService.portfoliotags();
    this.portfolioData = this.profileService.portfoliodata();
    console.log("temp");
    // var mixer = mixitup('.portfolio-filter'); 
  }

}
