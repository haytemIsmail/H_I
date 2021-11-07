import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { FirebaseService } from './services/firebase.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webSite-Haytem';
  isSignedIn$: Observable<boolean>;
  parametri = {
    from_name: "haythemIsmail",
    
    to_name: "da Haythem",
    message: "questo è una mail di prova inviata da appComponent"
  }
  data = {
    codiceValuta: "BTC",
    prezzoAttuale: 12
  }
  constructor(public firebaseService: FirebaseService, public db: AngularFireDatabase) { }
  ngOnInit() {
    this.isSignedIn$ = this.firebaseService.isloggedIn$();
    this.firebaseService.logout()
    // window['inviaMail'](this.parametri);
    // this.db.list('risorse').push(this.data);

    // this.db.list('risorse').valueChanges().subscribe(_ => console.log("valueChange", _))
  }


}
