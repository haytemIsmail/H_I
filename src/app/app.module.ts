import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyBv12IcZKKZIg-M6Mlhibw1TgX40HgRAhs",
  authDomain: "haytem-ismail.firebaseapp.com",
  projectId: "haytem-ismail",
  storageBucket: "haytem-ismail.appspot.com",
  messagingSenderId: "510092631522",
  appId: "1:510092631522:web:c0f6783d853b8b65222dbb",
  measurementId: "G-35GYGYS4FF"
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
