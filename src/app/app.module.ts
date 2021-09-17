import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrasshopperComponent } from './components/grasshopper/grasshopper.component';
import { MagicFunctionComponent } from './components/magic-function/magic-function.component';
import { HumanCatDogYearsComponent } from './components/human-cat-dog-years/human-cat-dog-years.component';
import { CountByXComponent } from './components/count-by-x/count-by-x.component';

@NgModule({
  declarations: [
    AppComponent,
    GrasshopperComponent,
    MagicFunctionComponent,
    HumanCatDogYearsComponent,
    CountByXComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
