# Amazon Clone

I created this Amazon Clone application following Clever Programmer's Tutorial using React and Firebase.
</br>
</br>
It has user authentification, allowing you to create accounts and log into your account. On the main page you can see a list of products, which you can add into your cart; and in your cart page, you can see the list with the products you wanted to buy, and the total sum for buying these items. 
</br> 
</br>
In this application I used React Context API for creating global variables that can be passed around in a React app to avoid props drilling. 
Also I used React Router for creating a single-page web application with navigation *without* the page refresh. 

**New things I learned doing this:**
* How to use *React Context API*: it's like creating *global variables* that can be passed around in the app, instead of passing them as props from grandparent to parent to child.. 
* *React Context API idea*: 
  * define a *data layer context*
  * build a *Provider* and give access to the data layer
  * wrap the App inside the Provider
  * define the *initial state* 
  * define *actions* to describe what to change
  * define *reducer functions* to handle those actions (returns the next state of the app)
  * *useStateValue* function gives you ```[state, dispatch]```
    * *state* keeps the current state of the current data layer
    * *dispatch*: to add/ remove from the state
    * you can change the state only by *dispatching actions*

* *React Router* (*react-router-dom*): allows you to have a multipage functionality in a single page app 
* *React Router* gives the app the feel of desktop apps so you can switch between pages without talking to the server, thus the page doesn't reload
* React *hates* refreshing
  * ```<Route>```determines what is gonna load at what page url 
  * use ```<Link>``` to move between pages (doesn't cause a refresh)
* *mask-image*: to add gradient to an image
* How to use *react-currency-format*
* How to use *reduce* function



![amazon](https://user-images.githubusercontent.com/29714385/93488141-b0d79c00-f90e-11ea-9a20-3156f912d253.PNG)


## If you want to try the application:
https://clone-c15cd.web.app/
