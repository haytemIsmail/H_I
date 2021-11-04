import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'src/utils/fnutils';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  loggedIn$: Observable<any>;
  isLoggedIn = false
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }


  signin(email: string, password: string) {
    this.loggedIn$ = from(
      this.firebaseAuth.signInWithEmailAndPassword(email, password))
      .pipe(
        tap(res => {
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/home'])
        })
      )
    this.loggedIn$.subscribe();
  }
  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }
  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);

  }
  isloggedIn$(): Observable<boolean> {
    return this.loggedIn$.pipe(
      map(loggedIn => isNotNullOrUndefined(loggedIn))
    )
  }
}
/* function tap(arg0: (res: any) => any): import("rxjs").OperatorFunction<import("firebase").auth.UserCredential, unknown> {
  throw new Error('Function not implemented.');
} */

