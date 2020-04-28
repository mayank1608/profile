import { Component, OnInit } from '@angular/core';
import { AOS } from 'aos';
import { Pipe, PipeTransform } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'mayank-ng-profile';
  ngonit(){    
    AOS.init();
  }
}
