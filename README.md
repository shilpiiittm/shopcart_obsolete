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

Step 2:
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

Step 3:
Firebase provides database, authentication (login facilities), storage (images, videos), messaging (SMS)

```
npm install firebase


```

```step 3
face of webpage
go to get bootstrap and choose from examples 
now copy code from there 
paste on app component html
````
``step 3.5
`divide appcomp.html content into navbar and mains (make ng g c bs-navbar)
```
step 4
```
make routes
```ng g c home
ng g c products
ng g c shopping-cart
ng g c check-out
ng g c order-success
ng g c my-orders
ng  g c admin/admin-products
ng g c admin/admin-orders
ng g c login
````
STEP 5
```in app module import { RouterModule} from'@angular/router'

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


Step 6
````
add router outlet in app comp. html
<router-outlet></router-outlet>