import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataComponent} from './data.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
