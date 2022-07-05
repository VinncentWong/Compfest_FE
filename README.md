## Kantin Kejujuran Website - FE

Kantin Kejujuran is a task to create a website with several cases from Compfest UI. There are several features that you should make in this website.

## How to run
* Clone this repository or you can type in your terminal with ```git clone https://github.com/VinncentWong/Compfest_FE.git```
#### Make sure you have installed git
* Install NPM packages with
```npm install```
* Run the server with
```npm run start or npm start```
#### Note : Don't forget to run backend service first because the following code in this repository consumes API from backend service. If you haven't run the backend service, please go to [Compfest_BE](https://github.com/VinncentWong/Compfest_BE.git) repository and read the following readme.
``` Default Port = 3000```

## Endpoint that are available
```
  1. "/" -> Display landing page
  2. "/signup" -> Display signup page
  Note : User only can login with some ID pattern otherwise error would be occured
  3. "/login" -> Display login page
  4. "/home" -> Display home page +
  5. "/additem" -> Display add item page +
  6. "/searchitem" -> Display search item page +
  7. "/getitems" -> Display list of item page +
  8. "/account" -> Display account page +
  
+ -> User required to successfully login to access those pages otherwise User can't access those pages.
```
#### You can access the website with link that have been deployed(only on endpoint number 1,2, and 3 and also you can't do signup or login because the current database is still local)
#### It is recommended to do it only in local machine to access whole endpoint.
```Link Website Deployed = https://compfest-fe.herokuapp.com/```

## Video Demo


https://user-images.githubusercontent.com/88434717/177244452-5bb440ec-6351-451c-80af-d020674e36ed.mp4




