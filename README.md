# luontovahdit-full-dev
Luontovahdit backend
Luontovahdit is a map-based app where users can track activity in mining, prospecting, illegal dumping, and logging. Users can log in and create map hotspots and add images and/or comments when they discover relevant activity in the nature.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites
Node.js npm MongoDB The frontend React application can be run locally independent of the back-end Express.js REST API. The frontend client by itself can only display the map and some related features.

Installing
Get the development back-end up and running.

Install Node modules.

npm install
Example of MongoDB connection specification in local .env file.

ATLAS_URI=<your mongoDB (Atlas) short SRV connection string>
PORT=3003
SECRET="<yoursecred>"
Start the Node Express with a MongoDB connection.

npm start
Development roadmap
Implement backend functionality for image CRUD operations against Cloudinary API
Implement user position with (mobile) Leaflet
Implement fix for invalid GeoJSON error on fetching GTK ArcGIS data
Built With
Leaflet - an open-source JavaScript library for mobile-friendly interactive maps
Esri-Leaflet - Middleware for using ArcGIS map services in Leaflet
ArcGIS - ArcGIS is a geographic information system (GIS) for working with maps and geographic information.
Express - Express is a minimal and flexible Node.js web application framework.
License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
React-leaflet
GTK

Map 
Leaflet : Node module
-provides library of classes and functionality for such things as web map user interactions and user location 

Esri-Leaflet : Node module
-provides Leaflet integration with required map Esri Feature Layer and related classes.  used for fetching and processing National Land Survey of Finland data from GTK map server which implements Esri ArcGIS map service framework

React-Leaflet : React components
- provides (context API based) components and base classes for many of the Leaflet layers. Unfortunately Esri Feature Layers are not supported

Esri Feature Layer : React components
- should provide custom map components that combine React-Leaflet with Esri Feature Layer specifications   for fetching and displaying Esri Feature layer

OpenStreetMap, Kapsi : web map tile layers
-provides various base maps for the application. Idea is that user can switch the base map according to current situation and need. 

Frontend
-react
Used for creating interactive UIs and design views for each state in application. React efficiently update and render the right components when data changes.

-redux
 An open-source JavaScript library, used for managing application state.

-redux-forms
 Redux Form is a collection of reducer creators and action creators that make implementing complex and custom forms with React and Redux simple and performant.

-react-router
React Router is a powerful routing library, that helps add new screens and flows to application while keeping the URL in sync with what's being displayed on the page. Built on top of React.
 


-redux-thunk
Redux-Thunk is a middleware used to handle asynchronous actions in Redux.

-semantic-ui-react 
Semantic UI is a UI component framework for theming websites. Semantic UI enables  to build websites HTML, along with a complete mobile responsive experience. 

Backend 
(Node)

express - framework that used for creating API and simplify creating Server on Node.js. 
 
passport - Framework for user authentication. Used a lot different kind of strategy. In our case was used local strategy with plain username and password. 

bodyParser - Middleware that parses income request and populate it to req.body. 

express-validator - Used for validation user’s data. 

bcrypt - Used for encrypting and decrypting password before store it to database. 

express-session - create session for user authentication. 

connect-mongo - Used for storing session object to Mongo DB. 

mongoose - for using MongoDB, creating models for hotspots, comments, and users

Hosting 
(Heroku)

Data storage 
(MongoDB atlas)


