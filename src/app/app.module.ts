import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrasshopperComponent } from './components/grasshopper/grasshopper.component';
import { MagicFunctionComponent } from './components/magic-function/magic-function.component';

@NgModule({
  declarations: [
    AppComponent,
    GrasshopperComponent,
    MagicFunctionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
