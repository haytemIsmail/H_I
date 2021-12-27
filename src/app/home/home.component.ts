import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/fireBase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }
  // logout() {
  //   this.firebaseService.logout()
  // }

}
