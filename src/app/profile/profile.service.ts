import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    // profileName: string;
    // profileSkills: Array<any>; 
    // profileDesc: string;
    // profileSkillSets: Array<any>;
    // profileServices: Array<any>;

  constructor(private http: HttpClient) { }
  
  profileDescription = {
    "profileName": "Mayank Sharma",
    "profilePic":"assets/images/mak.jpg",
    "profileBannerImgUrl": "assets/images/homebanner2.jpg",
    "profileDesc": "I am passionate about web designing &amp; development. I work structured with quality in mind. I have <b>designing and developing skills</b> and find it easy to familiarize myself with new technologies.<br>I am able to <b>work both in project teams and as an individual.</b> I am a good team player and able to find the best solutions together with the rest of the organization.",
    "profileFbLink":"https://www.facebook.com/pages/Mayank-Sharma/589655841055164",
    "profileTwitterLink":"https://twitter.com/SharmaMayank88",
    "profileLinkedinLink":"https://www.linkedin.com/in/mayank-sharma-46b89bb4",
    "profileGithubLink":"https://github.com/mayank1608",
    "profileWpLink":"https://mayanksharma88.wordpress.com/",
    "profilePdfLink":"assets/Mayank-CV.pdf"
  }  
  profileSkills:any = ["FRONTEND DEVELOPER","ANGULAR DEVELOPER","UI DEVELOPER","WEB DESIGNER"];
  profileSkillSets:any = [
    {
      "id":"1",
      "skillName":"HTML5",
      "bgColor":"#4ba5cf",
      "progress":"90%",
    },
    {
      "id":"2",
      "skillName":"CSS3",
      "bgColor":"#ffbb37",
      "progress":"85%",
    },
    {
      "id":"3",
      "skillName":"JavaScript",
      "bgColor":"#239191",
      "progress":"60%",
    },
    {
      "id":"4",
      "skillName":"jQuery",
      "bgColor":"#735baf",
      "progress":"65%",
    },
    {
      "id":"5",
      "skillName":"Angular",
      "bgColor":"#4ba5cf",
      "progress":"70%",
    },
    {
      "id":"6",
      "skillName":"Photoshop",
      "bgColor":"#ffbb37",
      "progress":"65%",
    },
    {
      "id":"7",
      "skillName":"PHP",
      "bgColor":"#735baf",
      "progress":"40%",
    }
  ];
  profileServices:any = [
    {
      "id": "1",
      "serviceName": "Frontend Development",
      "serviceDesc":"Creating Web App using HTML5, CSS3, Bootstrap, Zurb Foundation, Materialize, jQuery, JavaScript, Angular, Gulp JS.",
      "iconClass":"fa fa-code fa-2x",
      "serviceURL":"javascript:void(0)"
    },
    {
      "id": "2",
      "serviceName": "WEB DESIGN",
      "serviceDesc":"Converting PSD’s to HTML in div based form using the tool HTML5, CSS3 and Bootstrap",
      "iconClass":"fa fa-css3 fa-2x",
      "serviceURL":"javascript:void(0)"
    },
    {
      "id": "3",
      "serviceName": "WEB DEVELOPMENT",
      "serviceDesc":"Creating Websites Using WordPress CMS, Bootstrap Responsive, Php and JavaScript, JQuery",
      "iconClass":"fa fa-laptop fa-2x",
      "serviceURL":"javascript:void(0)"
    }
  ];
  profileExperience:any = [
      {
        'id': '1',
        "from_to_month_year": "MAY 2018 - PRESENT",
        "organization": "AV DEVS Solution",
        "designation": "Sr. Front End Dev",
        "details": "Working on HTML5, CSS3, Bootstrap, JQuery, JavaScript, SASS, Gulp JS, GIT, SVG."
      },
      {
        'id': '2',
        "from_to_month_year": "Jan 2017 - Apr 2018",
        "organization": "Alept Consulting",
        "designation": "Front End Dev",
        "details": "Working on HTML5, CSS3, Bootstrap, JQuery, JavaScript, SASS, Gulp JS, GIT, SVG."
      },
      {
        'id': '3',
        "from_to_month_year": "Sep 2014 - Jan 2017",
        "organization": "Darshan Softech",
        "designation": "Sr. Web Designer",
        "details": "Working on HTML5, CSS3, Bootstrap, JQuery, JavaScript, SASS, Gulp JS, GIT, SVG."
      },
      {
        'id': '4',
        "from_to_month_year": "May 2014 - Aug 2014",
        "organization": "V Can Technologies",
        "designation": "Sr. Web Designer",
        "details": "Working on HTML5, CSS3, Bootstrap, JQuery, JavaScript, SASS, Gulp JS, GIT, SVG."
      },
      {
        'id': '5',
        "from_to_month_year": "Dec 2012 - Apr 2014",
        "organization": "Dreams Design",
        "designation": "Web Designer & Developer",
        "details": "Working on HTML5, CSS3, Bootstrap, JQuery, JavaScript, SASS, Gulp JS, GIT, SVG."
      },
  ];
  profileQualification:any =[
    {
      'id': '1',
      'from_to_month_year': 'Aug 2010 - Jun 2013',
      'education': 'M.C.A',
      'institution': 'Sardar Patel University (V.V.N)'
    },
    {
      'id': '2',
      'from_to_month_year': 'Aug 2009 - Dec 2010',
      'education': 'Web Designing',
      'institution': 'Ascent Computer Education'
    },
    {
      'id': '3',
      'from_to_month_year': 'Aug 2006 - Jul 2009',
      'education': 'B.Sc (IT)',
      'institution': 'I. K. Gujral Punjab Technical University'
    },
    {
      'id': '4',
      'from_to_month_year': 'Jul 2005 - Mar 2006',
      'education': 'H.S.C (Science Stream)',
      'institution': 'Gujarat Board'
    },
    {
      'id': '5',
      'from_to_month_year': 'Jul 2003 - Mar 2004',
      'education': 'S.S.C',
      'institution': 'Gujarat Board'
    },
  ];

  profilePortfolioTags:any = ["All", "Web Design", "Web Development", "Angular", "UI Design"];

  profilePorfolioData:any = [
    {
      "id":"1",
      "portfolioName":"Swami Krishnananda Website",
      "portfolioImage":"assets/images/portfolio/website-swamikrishnananda.jpg",
      "portfolioTag":"Web Design",
      "portfolioTech":"HTML, CSS, Bootstrap, jQuery",
      "portfolioURL":"javascript:void(0)"
    },
    {
      "id":"2",
      "portfolioName":"Angular Book App",
      "portfolioImage":"assets/images/portfolio/angular-app.jpg",
      "portfolioTag":"Angular",
      "portfolioTech":"HTML, CSS, Bootstrap, Angular",
      "portfolioURL":"https://github.com/mayank1608/Angular5"
    },
    {
      "id":"3",
      "portfolioName":"Flight Booking",
      "portfolioImage":"assets/images/portfolio/flight-booking.jpg",
      "portfolioTag":"UI Design",
      "portfolioTech":"Photoshop",
      "portfolioURL":"javascript:void(0)"
    },
    {
      "id":"4",
      "portfolioName":"Flight Booking Landing",
      "portfolioImage":"assets/images/portfolio/flight-booking.jpg",
      "portfolioTag":"Web Design",
      "portfolioTech":"HTML, SCSS, Bootstrap, jQuery, Gulp",
      "portfolioURL":"https://github.com/mayank1608/Air-Ticket-Booking"
    },
    {
      "id":"5",
      "portfolioName":"Magirsha Industries",
      "portfolioImage":"assets/images/portfolio/wordpress-magirsha.jpg",
      "portfolioTag":"Web Development",
      "portfolioTech":"WordPress CMS",
      "portfolioURL":"https://magirsha.in/"
    },
    {
      "id":"6",
      "portfolioName":"nViso Website",
      "portfolioImage":"assets/images/portfolio/nviso.jpg",
      "portfolioTag":"Web Design",
      "portfolioTech":"HTML, CSS, Bootstrap, jQuery",
      "portfolioURL":"https://www.nviso.ai/en"
    },
    {
      "id":"8",
      "portfolioName":"Book Store App",
      "portfolioImage":"assets/images/portfolio/angular-app-2.jpg",
      "portfolioTag":"Angular",
      "portfolioTech":"HTML, CSS, Bootstrap, AngularJS",
      "portfolioURL":"https://github.com/mayank1608/Angular"
    },
    {
      "id":"9",
      "portfolioName":"Profile App",
      "portfolioImage":"assets/images/portfolio/mayank-profile.jpg",
      "portfolioTag":"Angular",
      "portfolioTech":"HTML, CSS, Bootstrap, Angular",
      "portfolioURL":"https://mayank-profile.web.app/"
    },
    {
      "id":"10",
      "portfolioName":"Profile App",
      "portfolioImage":"assets/images/portfolio/mayank-profile.jpg",
      "portfolioTag":"UI Design",
      "portfolioTech":"Photoshop",
      "portfolioURL":"https://mayank-profile.web.app/"
    }
  ]
  
  description(){
    // return this.http.get(this.baseUrl + 'profileDesc');
    return this.profileDescription;
  }
  skillList(){
    // return this.http.get(this.baseUrl + 'profileSkills');
    return this.profileSkills;
  }
  skills(){
    // return this.http.get(this.baseUrl + 'profileSkillSets');
    return this.profileSkillSets;
  }

  services() {
    // return this.http.get(this.baseUrl + 'profileServices');
    return this.profileServices;
  }
  experience() {
    // return this.http.get(this.baseUrl + 'profileExperience');
    return this.profileExperience;
  }
  qualification() {
    // return this.http.get(this.baseUrl + 'profileQualification');
    return this.profileQualification;
  }

  portfoliotags(){
    // return this.http.get(this.baseUrl + 'profilePortfolioTags');
    return this.profilePortfolioTags;
  }

  portfoliodata(){
    // return this.http.get(this.baseUrl + 'profilePorfolioData');
    return this.profilePorfolioData;
  }


}
