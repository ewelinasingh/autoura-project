Welcome to the Autoura project README file. 

Autoura provides self-driving vehicles with on-screen tourism services.
This web app allows users of self-driving vehicles to find a suitable place to eat based on the group type and food type.

The project was deployed to Firebase and can be accessed via the below link.
[https://autoura-project.firebaseapp.com/#/](https://autoura-project.firebaseapp.com/#/)

The GitHub repository can be accessed via the following link.
[https://github.com/ewelinasingh/autoura-project](https://github.com/ewelinasingh/autoura-project)

#### Designer and Developer: Ewelina Singh
#### Project Setup
```
npm install v8
nvm use 8
npm install -g @vue/cli
vue create my-first-app
npm run serve
```

#### Important Commands
 Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```
    
#### Installation of Dependencies
```
npm install axios --save
npm install bootstrap --save
npm install vue2-leaflet leaflet --save
npm install sass-loader node-sass webpack --save
npm install popper.js --save
npm install vue-headful --save
npm install vue-meta --save
npm install vue-router --save
```
   
#### How to connect to GitHub and push messages
```
git remote add origin <GitHub Repository link>
git push -u origin master
git add .
git commit -m "enter message here"
git push
```

#### How to deploy to FireBase
```
npm install -g firebase-tools
npm run build
firebase init
firebase deploy --only hosting --project autoura-project
```

#### Step by Step
1. On the home page, click the 'ENTER' button.
2. Choose the type of group, e.g. Friends.
3. Choose the type of place you are interested in, e.g. Restaurant.
4. Hover over the list of places on the left side to magnify the map marker of the place on the map.
5. Click on a place that interests you and details about the place will show under the map. 
6. Click the 'NAVIGATE' button to be navigated to the location. (Note: This button does not currently work.)
7. Click on the 'WEBSITE' button to be redirected to the place's website.
    


