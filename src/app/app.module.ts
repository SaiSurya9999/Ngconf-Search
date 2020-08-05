import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgconfSearchModule} from 'ngconf-search';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgconfSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
