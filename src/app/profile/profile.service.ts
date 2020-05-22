import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProfile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    // profileName: string;
    // profileSkills: Array<any>; 
    // profileDesc: string;
    // profileSkillSets: Array<any>;
    // profileServices: Array<any>;
  
  constructor(private http: HttpClient) {  }
  public baseUrl:string = window.location.href; 
  public data_url:string = "assets/data/profile.json";
  public getProfileData(): Observable<IProfile[]> {
    console.log( this.baseUrl + this.data_url);
    // console.log( this.http.get(this.data_url)); 
    return this.http.get<IProfile[]>(this.data_url);     
  }


}
