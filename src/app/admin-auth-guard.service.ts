import { Observable } from 'rxjs';
import { UserService } from './user.service';
//import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { map } from 'rxjs/operators';


@Injectable()
export class AdminAuthGuard
  implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
    .pipe(map(appUser => appUser.isAdmin));
  }

}

