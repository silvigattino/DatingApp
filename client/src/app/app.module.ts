import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http';
 
import{AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    // Other components, directives, or pipes should be declared here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
 
})

export class AppModule { }