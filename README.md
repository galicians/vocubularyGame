## Language app with angularJS


We would like you to implement a very simple vocabulary game.  
The technology is AngularJS, Bootstrap and LessCSS on front end, with NodeJS communication endpoint on backend.

### App

You will find 11 words with keyphrases and spanish translation hardcoded in words AngularJS value in *public/js/services.js*.  

1. On every round one random word is chosen - question asked to the player. We show player english word with english keyphrase.  
2. We also provide 3 answers - shown to user in Spanish - chosen randomly from 11 words provided (one of them is translation of previously randomly chosen word).   
3. The game consists of 3 rounds. If the user chooses the wrong answer the game is finished.
4. When the game is finished the
 user can enter his name. If he does, the score is sent to the server, and will appear on "High score" subpage of the app. This subpage will download highscore list, using $http AngularJS service.


No need to use any database persistence on server-side - keeping data in NodeJS memory is sufficient for this test._

### Running the app
    
    npm start / nodemon app.js / node app.js  (The 3 options are valid)

    then go to [http://localhost:3000] 


### Testing the app:   

    npm test                            (unit tests)
    protractor protractor-conf.js       (end to end tests)


### Functionality:


The goals for this challenge are:  
- clean app structure (you are welcome to change files organisation)  
- code formatting and naming  
- object-oriented design and implementation
- proper use of components (controllers, directives)


### Additonal tasks

- Unit tests (Karma)  
- Add timing to game
- Correct OO architecture (directives, controllers, services)
- Performance
- Comments on performance and architecture decisions


## Directory Layout(not up to date)
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.less        --> less stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.html        --> main page for app
      partials/         --> angular view partials (pure HTML, you can use Jade as well)


##Useful links
#### [AngularJS](http://angularjs.org/), [LessCSS](http://lesscss.org/)


