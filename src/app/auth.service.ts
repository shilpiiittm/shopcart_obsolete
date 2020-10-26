import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute) { 
    this.user$ = afAuth.authState;    
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    console.log('[auth-service]');

    // @ts-ignore
    return this.user$.pipe(switchMap((user) => {
      console.log('--->', user);
      if (user) {
        return this.userService.get(user.uid);
      }
      return of(null);
    }));
  }

}
