import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @Output()
  isLogout = new EventEmitter<boolean>()
  title = 'webSite-Haytem';
  isSignedIn = false
  constructor(
    public firebaseService: FirebaseService
    , private router: Router) { }
  ngAfterViewInit(): void {
    var cta = document.querySelector(".cta");
    var check = 0;

    cta.addEventListener('click', function (e) {
      var text = e.target['nextElementSibling'];
      var loginText = e.target['parentElement'];
      text.classList.toggle('show-hide');
      loginText.classList.toggle('expand');
      if (check == 0) {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
      }
      else {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
      }
    })
  }
  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }
  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }
  /* async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
    this.router.navigate(['/home']);
  }  */
  onSignin(email: string, password: string) {
    console.log("email", email, password);
    this.firebaseService.signin(email, password)
  }
  handleLogout() {
    this.isSignedIn = false

  }
}
