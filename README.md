# Friend Finder
Node.JS and Express with Deployment to github and Heroku

## Description 
This full stack app models a social compatibility site, with the user completing a survey, the results of which are weighted and compared to those previously submitted by others to find the closest match.  



## Technologies and tools
The app is developed using HTML, javascript, JQuery, node.JS, AJAX, JSON and Express.  

It uses the following NPM packages: 
* The 'express' package for server functions
* The 'path' package obtaing a path to files for all locally installed module executables 

It uses the following middle-ware:
* The express.urlencoded function to parse encoded URLs
* The express.json function to parse requests with json payloads

## Sources
The data used for the app is manufactured for demonstration purposes.   

## Functionality

HTML routes are defined in the server for the home page and the survey page. 

API routes are defined in the server getting raw participant data and for the posting of new data. 

When a survey for a new participant is completed the values for the answer (0 to 5) for the ten survey questions are compared to those of all previous participants. The differences are totaled as a "score". The previous participant with the lowest score is suggested as the the person with the closest compatibility quotient. A modal with the name and photo of that person is pushed to the survey page. 
  

## Components
* `server.js` - Contains the server code for the app.  
* `friendsData.js` - Contains participant data for the app. 
* `home.html` - Contains the HTML for the home page.
* `survey.html` - Contains the HTML for the survey page, along with javascript for the posting of survey results and retreiving the post results with the "best match" for display in the modal.
*`htmlRoutes.js` - Contains the routes contains the for the home page and the survey page.
* `apiRoutes.js` - Contains the routes for getting raw participant data and for the posting of new data.   
* `node_modules/` - Contains the node packages used by the app   
* `package.json` - Contains manifest data about the external package used by the app as well the urls for the git repo and issue list for the app    
* `package-lock.json` - Contains version and location information for every module from every external package used by the app   
* `README.md` - Contains documentation for the app.
*  * `.gitignore` - Contains a list of files which are not to be pushed to github, such as node_modules for NPM packages.  


## Instructions 
* The server is started with the command 'node server.js". 
* The app is access via HeroKu using the "https://glacial-fortress-38607.herokuapp.com/" url

## Artifacts
* `bigalr8/Friend-Finder` - github repo
* `"https://glacial-fortress-38607.herokuapp.com/"` - Heroku url
* ` https://bigalr8.github.io/Basic-Portfolio/` - Portfolio with link to 'Friend-Finder'        

## Notes
I encountered issues with using 'modal' because the jQuery libaray was defined before that for bootstrap. 

I encountered issues with using 'post' because a "slim" version of jquery was specified. 

I used class activity and group project code as references. 

I did not deploy validation of required fields in the survey. This was due to time constraints resulting from the issues listed above.