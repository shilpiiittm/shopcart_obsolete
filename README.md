# Shopcart

## Push/Pull to/from GitHub
1. Push

VSCode > Left Menu > Go to Tree Icon (Scissors)
Click + to stage files
Add commit message (any sentence: useful)
in terminal write
```
git push -u origin master
```


## Install Bootstrap
Step 1:
```
npm i -- save bootstrap
```
Step 2:
In style.css Add following line
```
@import "~bootstrap/dist/css/bootstrap.css";
```
Step 3:
Open angular.json
in styles array add
```
"node_modules/bootstrap/dist/css/bootstrap.min.css",
```

## Install Firebase
Step 1:
Create account on firebase https://firebase.google.com/
and copy to environment.ts and environment.prod.ts

## Step 2:
Copy these in app.module.ts
```
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

...
  imports: [
    ...
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
...  
```

## Step 3:
Firebase provides database, authentication (login facilities), storage (images, videos), messaging (SMS)

```
npm install firebase
```

## Step 3

face of webpage
go to get bootstrap and choose from examples 
now copy code from there 
paste on app component html

## step 3.5
divide appcomp.html content into navbar and mains (make ng g c bs-navbar)


## step 4: make routes

```
ng g c home
ng g c products
ng g c shopping-cart
ng g c check-out
ng g c order-success
ng g c my-orders
ng  g c admin/admin-products
ng g c admin/admin-orders
ng g c login
````

## STEP 5
in app module

```js 
import { RouterModule} from'@angular/router'

now in imports[ AngularFireAuthModule,
RouterModule.forRoot([
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'check-out',component:CheckOutComponent},
  {path:'order-success',component:OrderSuccessComponent},
  {path:'login',component:LoginComponent,},
  {path:'admin/products',component:AdminProductsComponent},
  {path:'admin/orders',component;AdminOrdersComponent},
])]
```

## Step 6
add router outlet in app comp. html
```html
<router-outlet></router-outlet>
```
## Step 7
in bs-navbar there is dropdown menu  
change href to routerLink and # to root(which is written as /)
```
now install in terminal npm i --save @ng-bootstrap/ng-bootstrap
```
in appmodule import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
now in imports array[ NgbModule,

## step7.5
in navbar template
do necessary changes

change Navbar to Shopcart
<li ngbDropdown class="nav-item dropdown">
                <a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Username</a>
                <div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdown01">
                    <a class="dropdown-item" routerLink="/my/orders">My Orders</a>
                    <a class="dropdown-item" routerLink="/admin/orders">Manage Orders</a>
                    <a class="dropdown-item" routerLink="/admin/products">Manage Products</a>
                    <a class="dropdown-item" >Log Out</a>


 in navbar css
 .dropdown-toggle {
   cursor:pointer;
 }   
 in navbar html
   <a class="navbar-brand" routerLink="/">Shopcart</a>

   remove home as shopcart is home page 

   in appmodule add {path:'my/orders',component: MyOrdersComponent},

## Step 8 Deployment
install firebase
```
sudo npm i g firebase-tools 
```
now firebase login shilpiiittm@gmail.com

now run
```
firebase init
```
now select hosting
 now select project
  now two file comeup
  firebase.json
  .firebaserc

  open firebase.json
  add
  {
  "hosting": {
    "public": "dist/shopcart",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}


now in terminal
ng build --prod

after its done
$firebase deploy

now we have hosting url which we can copy and open in browser


## Project Authentication and Authorization 

## Step 9 Implementing Google login

open firebase in console go to project and click on authentication 
here there is users, signin method and templates 
click sign-in method -> enable google and save this setting

## step 9.5
in navbar html add

            <li class="nav-item">
                <a class="nav-link" routerLink="/login">Login</a>
            </li>

now open login html and add button
<button
(click)="login()"
class="btn btn-primary">Login with Google</button>

now open login component and add
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) {

   }

  login() {
     this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}


now we can click on login with google 
and can check in firebase -> in authentication click on users and we can see our gmail id  and UID


## step 10 Implement the logout
open navbar html and do changes
 <a class="dropdown-item" (click)="logout()">Log Out</a>

 open navbar component ts and add these things
 import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(x=> console.log(x));   ///this line for console so that we can now if 
   }                                                     logout happend///

  logout() {
    this.afAuth.auth.signOut();
  }

}

## step 10.5 how to display user name 

open navbar ts and add 

```
import * as firebase from 'firebase';
```
```
export class BsNavbarComponent {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.user=user);
   }
```

now in navbar html do necessary changes

<li  *ngIf="!user" class="nav-item">
                <a class="nav-link" routerLink="/login">Login</a>
            </li>
            <li ngbDropdown *ngIf="user" class="nav-item dropdown">
                <a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">{{ user.displayName}}</a>   ///string ///
                <div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdown01">
                    <a class="dropdown-item" routerLink="/my/orders">My Orders</a>
                    <a class="dropdown-item" routerLink="/admin/orders">Manage Orders</a>


## Step 11 using async pipe 
(so that every time  data gets destroys and its not overload )
open navbar component 
```
import { Observable } from 'rxjs';
```
export class BsNavbarComponent {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;


 open navbar html
  <ng-template #anonymousUser>
            <li  class="nav-item">     ///remove  *ngIf="!user$" as we are using else ///
                <a class="nav-link" routerLink="/login">Login</a>
            </li>
        </ng-template>
            <li ngbDropdown *ngIf="user$ | async as user; else anonymousUser" class="nav-item dropdown">   




## Step 12 Extracting a service
we are doing it so that it is testable and later on if we use other service istead of firebase than project will work so here we are delegating thinngs ///distributing responsibilities properly ///to auth  service (we are using firebase for authentication) so we are providing authentication in a seperate service

Now in TERMINAL ng g s auth

```
now in app module in providers add//register it as [AuthService]

now open auth service ts
in constructor inject
```
constructor(private afAuth:AngularFireAuth) {
```
  now add
  login(){}

  logout(){}   

  and from login component cut login template and paste it here in  auth serveive ///logout template is in navbar component we will do it after login///
  ```
  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }


  logout(){
    this.afAuth.auth.signOut();
  }
  ```

  changes in login component
  import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


  ```
  export class LoginComponent {

  constructor(private auth: AuthService) {

   }

  login() {
     this.auth.login();
  }
}
```

in auth service add
```
import * as firebase from 'firebase';
```


now cut logout template from navbar component and add it in authservice
other changes in navbar component
```
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(public auth: AuthService) {
    
   }

  logout() {
    this.auth.logout();
  }

}
```

in auth service in constructor we are bringing temlate from constructor of navbar component
 this.user$ = afAuth.authState;

in navbar component delete observable and in constuctor changes
constructor(public auth: AuthService) {

now in navbar html add 
```
<li ngbDropdown *ngIf="auth.user$ | async as user; e
```

now we nee to change from private to piblic so in navbar component we will change
 constructor(public auth: AuthService)
 now changes in import over here
 import { AuthService } from './../auth.service';

import { Component, OnInit } from '@angular/core';



