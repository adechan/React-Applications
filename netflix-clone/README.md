# Netflix Clone

I created this Netflix clone application following Clever Programmer's Tutorial using React and Firebase.
</br>
I'm doing a request to TMDB (a 3rd party server) so I can populate the rows with movie/ series posters. 
</br> 
Once you click on a poster it's gonna pop out a trailer for it. 

**New things I learned doing this:**
* How to do requests to a *3rd party server*: TMDB 
* When you send requests outside to a 3rd party server you have to make *asynchronouos calls*
* *axios*: helps you make HTTP requests
* *movie-trailer*: fetch Youtube trailers url for any movie 
* *react-youtube*: to play a Youtube video
* ```transform: scale(1.08);```: to scale an image
* Importing
  * ```{ name } ``` means that the export was ``` export as name ```
  * ``` name ``` means that the export was ``` export default as name ``` (you can call *name* however you want when you import it)

![netflix](https://user-images.githubusercontent.com/29714385/93003042-fd545d80-f543-11ea-98de-d1390c25e784.PNG)



## If you want to try the application:
https://netflix-clone-8db03.web.app/
