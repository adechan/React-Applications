# Spotify Clone

I created this Spotify clone application following Clever Programmer's Tutorial using React and Firebase.
</br>
To use this application, you need to have a spotify account. I use Spotify API to authentificate into my Spotify account, and then I'm doing requests to the Spotify API to get information about my playlists, and the songs found in discovery weekly. 

**New things I learned doing this:**
* How to do requests to *Spotify API*
  * To access private data through this Web API (profiles, playlists), the application must get the user's permission to access the data, so the *authorization* is made via the Spotify Accounts service
    * I authorize the app through *User Authorization* (grant the app permission to access/ modify the user's own data)
    * *Scopes*: enable your app to access specific API endpoints on behalf of a user; 
    * Usage of *scopes*: it provides to Spotify users using third party apps, the confidence that only info they choose to share will be shared and nothing more
    * Have your application request authorization; the user logs in and authorizes access: so we have to send a *GET request* to /authorize endpoint (*https://accounts.spotify.com/authorize*)
    * Example of request: *GET https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09*
    * More information about authorization can be found [here](https://developer.spotify.com/documentation/general/guides/authorization-guide/) 
* `` means *string interpolation*: combines JavaScript with string
* Use *spotify-web-api-js*: easy way to interact with Spotify API
  * It's a wrapper for the Spotify API that includes *helper functions* for all the Spotify's endpoints, such as fetching metadata (search and look-up of albums, artists, tracks, playlists, new releases, podcasts) and user's information (follow users, artists and playlists, and saved tracks management).
* Use *React Context API* to avoid props drilling
  * *Data Layer*: this layer can anytime push info to it and pull from it 
    * We interaact with the *Data Layer* by *dispatching actions* to it
  * *createContext()*: preparing the Data Layer
  * *reducer*:
    * *actions*: shows how we manipulate what the Data Layer looks like
    * *state*: how the Data Layer currently looks 
  * *useContext()*: how to use the Data Layer in our app
    * ``` export const useDataLayerValue = () => useContext(DataLayerContext); ```
  * ``` [{}, dispatch] = useDataLaterValue(); ```
    * *{}*: what we need to grab from the Data Layer
    * *dispatch*: to update the Data Layer

    
    
![spotify](https://user-images.githubusercontent.com/29714385/94337561-050c0b80-fff4-11ea-86aa-bf064d1294bb.PNG)



## If you want to try the application:
https://spotify-clone-52ee3.web.app/
