# Social Network API

## Description
This project attempts to produce a generic API for a very simple social media application. There are users. Users can create thoughts. Thoughts are bodies of text. Other users can react to those thoughts by replying by creating their own text bodies. Users can also make other users their friend in the application.

## Table of Contents
**[Description](#description)**  

**[Tools](#tools)**

## Tools
The application used JavaScript in the Node.js environment.  
MongoDB was used for database. As a result, mongoose Object Document Mapper (ODM) was used.
For serving, Express.js was used. This established the HTTP request methods for the API.
Finally, Insomnia was used for testing all the routes and controllers.

## Directory Structre
This application is completely backend. Therefore, there is no front-end aspects such as "public" folder.  
The application is divided between "model, controllers, routes". There are folders for each of them.  "model" structures the data saved in the database. "controler" performs operations on the data saved in the database (create, delete, update data etc). Finally, "route" takes in the user request and decides which controller to user based on user request.

## Installation Instruction
This application can requires the user to have Node.js, MongoDB, and VScode installed in their machine. Then:
- Clone this Git repo.
- Open the local repo in the VScode.
- Open the VScode integrated terminal
- Make sure the current directory of the terminal is the root folder of this repo
- Type in the comman `npm i` for installing the appropriate node modules.
- Finally, `npm start` command will start the server. Which can then be tested through Insomnia or simlar applications.

## Usage
Since this is purely a backend application, the user can only interact with it through some other application such as Insomina. Users can make GET, DELETE, PUT, and POST request for retrieving, deleteing, updating, and createing data in the database.  

###  GET Request
  - Get all users saved in the database.
  - Get one user with their Id (created automatically when the user is created)
  - Get all thoughts saved in the databse.
  - Get one though based on thought Id.

### DELETE Request
  - Delete one user based on Id. Doing so will delete all the thoughts and their reactions associated with this user.
  - Delete one thought based on Id.
  - Delete a friend from the user.
### PUT request
  - Update one user based on Id.
  - Update a thought based on User Id.
### POST request
  - Create one user
  - Create a thought
  - Create reaction
  - Add friend to an user.
