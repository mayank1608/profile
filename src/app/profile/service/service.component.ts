import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  profileData = [];
  serviceData = [];
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfileData().subscribe(
      data => {
        this.profileData = data;
        this.serviceData = this.profileData[0].profileServices;
      },
      (error:HttpErrorResponse) => {
        console.log(error.message)
      }
    );
  }

}
