# Discord Clone

I created this Discord Clone application following Clever Programmer's Tutorial using React, Redux, and Firebase.
</br>
</br>
The application has Google authentication, which allows you to log into your account using Google account. Also you can add multiple channels, and post messages in each one of them.

**New things I learned doing this:**
* *named* VS *default* exports: 
  * *named* exports: 
    * *export { name }*
    * *import { name } from ...*
    * you can have multiple named exports per file
    * the name of imported module has to be the same as the name of exported module
  * *default* exports: 
    * *export default name*
    * *import any_name from ...* 
    * you can have only one default export per file
    * the name of imported module doesn't have to be the same as the name of exported module
* How to get rid of border when you click on the input:
  ``` input { outline-width: 0; } ```
* How to create *Google* authentication: 
  * you need to have a *Google auth provider*: ``` provider = new firebase.auth.GoogleAuthProvider(); ```
  * in the *login* function: opens a popout box with multiple Google accounts ``` auth.signInWithPopup(provider); ```
* Use *npx-create-react-app _name --template redux* to create the app with Redux configuration


![discord](https://user-images.githubusercontent.com/29714385/95742392-a0f67200-0c98-11eb-9a62-023fe695054c.PNG)



## If you want to try the application:
https://discord-clone-70ddd.web.app/
