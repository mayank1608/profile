import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './profile/header/header.component';
import { IntroComponent } from './profile/intro/intro.component';
import { ProfileService } from './profile/profile.service';
import { AboutComponent } from './profile/about/about.component';
import { ServiceComponent } from './profile/service/service.component';
import { ResumeComponent } from './profile/resume/resume.component';
import { PortfolioComponent } from './profile/portfolio/portfolio.component';
import { RemovewhitespacesPipe } from './custompipe/removewhitespaces.pipe';
import { BlogComponent } from './profile/blog/blog.component';
import { FooterComponent } from './profile/footer/footer.component';
import { ContactComponent } from './profile/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ServiceComponent,
    ResumeComponent,
    PortfolioComponent,
    RemovewhitespacesPipe,
    BlogComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
