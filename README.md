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