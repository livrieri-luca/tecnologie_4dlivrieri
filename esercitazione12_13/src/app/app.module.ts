import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppSecondComponentComponent } from './app-second-component/app-second-component.component';
import { AppThirdComponentComponent } from './app-third-component/app-third-component.component';
import { AppFourthComponentComponent } from './app-fourth-component/app-fourth-component.component';
@NgModule({
 declarations: [
    AppComponent,
    AppSecondComponentComponent,
    AppThirdComponentComponent,
    AppFourthComponentComponent
 ],
 imports: [
    BrowserModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }


