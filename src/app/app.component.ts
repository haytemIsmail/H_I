import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webSite-Haytem';
  isSignedIn$: Observable<boolean>;
  constructor(public firebaseService: FirebaseService) { }
  ngOnInit() {
    this.isSignedIn$ = this.firebaseService.isloggedIn$();
  }


}
