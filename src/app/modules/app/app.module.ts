import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';

import * as components from '../../components';

@NgModule({
  declarations: [
    components.App,
    components.HomePage,
    components.WorkExample,
    components.Navbar,
    components.Footer,
    components.ImageSlider,
    components.SectionIntro,
    components.SectionServices,
    components.SectionPortfolio,
    components.SectionAbout,
    components.SectionNews,
    components.SectionVideos,
    components.SectionSkills,
    components.SectionContact
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [components.App]
})
export class AppModule { }
