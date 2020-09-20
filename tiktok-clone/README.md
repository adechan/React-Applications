# Tik Tok Clone

I created this Tik Tok Clone mini-application following Clever Programmer's Tutorial using React and Firebase.
</br>
It allows you to scroll up and down to view people's posts using a *snap* functionality. 
It has the UI for viewing the number of likes, messages, shares that video has, and also the music played in the video.

**New things I learned doing this:**
* *useRef* Hook: to capture a reference to the video that it's on the screen (so we can play and stop the video whenever we want)
* How to use *react-ticker* component to move text from right to left for an infinite amount of time 
* How to add *snap* functionality: 
```
html {
  scroll-snap-type: y mandatory;
}

.app__videos {
  scroll-snap-type: y mandatory;
}
```

![tiktok](https://user-images.githubusercontent.com/29714385/93714886-53da2100-fb6e-11ea-9bce-317a570dda0b.PNG)


## If you want to try the application:
https://tik-tok-clone-2291e.web.app/
