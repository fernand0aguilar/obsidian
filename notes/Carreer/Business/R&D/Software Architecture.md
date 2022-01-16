[[how_to_software_engineer]]


      

  

  

# FullStack WebApp

process stripe transactions




mimic all the endpoints from the rec api and do them in node

with graphql and psql

and do them. in a way that is going to become easier to maintain

go back to the frontend react native code

maitain that code too, change it with the other code from lighthing leads

do them in a way that is going to be easier to develop both the native app and the ios app




![[Screen Shot 2022-01-13 at 12.36.28 PM.png]]


**3.  Architectural Goals and Constraints** **
> There are some key requirements and system constraints that have a significant bearing on the architecture. They are:

What am i trying to achieve here? 

Design the backend of the Rec system in order to map all the endpoints and all the routes and replicate them in nodejs
-  The existing system should allow an user to log in with their google account
-  The system must redirect the user a dashboard page 

Think that it is work for 3 to 6 weeks


i could do the backend in django after deploying
but first i'm gonna need to deploy
and in order to do that i've got to apply to a developer acount and to do that i've got to go through all the process of deploying an app to the app store and then i'll have 1 in 2 milion apps there



```
{ "signup": "[https://yfit-app-staging.herokuapp.com/api/v1/signup/](https://yfit-app-staging.herokuapp.com/api/v1/signup/)", "login": "[https://yfit-app-staging.herokuapp.com/api/v1/login/](https://yfit-app-staging.herokuapp.com/api/v1/login/)", "customtext": "[https://yfit-app-staging.herokuapp.com/api/v1/customtext/](https://yfit-app-staging.herokuapp.com/api/v1/customtext/)", "homepage": "[https://yfit-app-staging.herokuapp.com/api/v1/homepage/](https://yfit-app-staging.herokuapp.com/api/v1/homepage/)", "message": "[https://yfit-app-staging.herokuapp.com/api/v1/message/](https://yfit-app-staging.herokuapp.com/api/v1/message/)", "profile": "[https://yfit-app-staging.herokuapp.com/api/v1/profile/](https://yfit-app-staging.herokuapp.com/api/v1/profile/)", "chat": "[https://yfit-app-staging.herokuapp.com/api/v1/chat/](https://yfit-app-staging.herokuapp.com/api/v1/chat/)", "event": "[https://yfit-app-staging.herokuapp.com/api/v1/event/](https://yfit-app-staging.herokuapp.com/api/v1/event/)", "trainer-class": "[https://yfit-app-staging.herokuapp.com/api/v1/trainer-class/](https://yfit-app-staging.herokuapp.com/api/v1/trainer-class/)", "device/fcm": "[https://yfit-app-staging.herokuapp.com/api/v1/device/fcm/](https://yfit-app-staging.herokuapp.com/api/v1/device/fcm/)" }
```
[[Costumer Relati`o ]]`