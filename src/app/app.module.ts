import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
	HttpClientModule,
	HTTP_INTERCEPTORS
} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
