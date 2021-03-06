import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TabellaPrezziCryptoComponent } from './components/crypto/tabella-prezzi-crypto/tabella-prezzi-crypto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcquisizioneDatiComponent } from './components/crypto/acquisizione-dati/acquisizione-dati.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FirebaseService } from './services/fireBase/firebase.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProgettiComponent } from './components/progetti/progetti.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
// import { MatFormFieldModule } from '@angular/material/form-field';

const firebaseConfig = {
  apiKey: "AIzaSyBv12IcZKKZIg-M6Mlhibw1TgX40HgRAhs",
  authDomain: "haytem-ismail.firebaseapp.com",
  databaseURL: "https://haytem-ismail-default-rtdb.europe-west1.firebasedatabase.app",
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
    CryptoComponent,
    TabellaPrezziCryptoComponent,
    AcquisizioneDatiComponent,
    AboutComponent,
    SkillComponent,
    ProgettiComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
