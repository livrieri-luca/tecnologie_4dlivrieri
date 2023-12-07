import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EsercitazioneComponent } from './esercitazione/esercitazione.component';

@NgModule({
  declarations: [
    AppComponent,
    EsercitazioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
