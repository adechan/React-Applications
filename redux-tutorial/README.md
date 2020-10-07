# Redux Tutorial

![Redux-Pattern](https://user-images.githubusercontent.com/29714385/95359010-578dd780-08d2-11eb-804c-7b26b9590fea.png)

**New things I learned doing this:**
* I used *npx-create-react-app _name_ --template redux* to create the app
* *Redux*: global state management library which helps avoiding props drilling
* The *values* are stored in the *Redux store*, not in a simple state 
* The main idea of Redux: 
  * split each layer into *slices*, and combine them into a *store*
  * *dispatch actions*
  * *reducer functions*: listens for actions
  * use *selector* to pull data from Redux store
* You can also have *middlewares*: which allows you to dispatch actions only when, for example, you are authenticated
