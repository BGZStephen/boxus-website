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
    components.SectionIntro,
    components.SectionServices,
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [components.App]
})
export class AppModule { }
