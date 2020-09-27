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
go to get bootstrap and choose from examples 
now copy code from there 
paste on app component html
````