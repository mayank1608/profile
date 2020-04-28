import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  public profileServiceData:any;
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileServiceData = this.profileService.services();
  }

}
