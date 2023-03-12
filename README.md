# MERN frontend/backend with creation script to create MongoDB database and collections

This is a Vite React site with TypeScript/ES6-modules on the frontend, and a Node/Express API with TypeScript/ES6 modules on the backend which serves jobs and skills for the frontend to display. You can execute the script `npm run createdb` to create the MongoDB database (either local or at e.g. MongoDB Atlas) and fill the two database collections **jobs** and **skills** with data from two local .json files. I created this as a test full-stack app to convert to a Docker application, so it is very simple but has all the parts of a full-stack application (frontend, backend, database). Therefore, it might also be helpful as a template to get started with a full-stack MERN application.

![grafik](https://starters.tanguay.eu/images/starters/startersimplefrontbackmongo.png)

## features

- **frontend:** 
	- Vite/React 
	- Sass
	- TypeScript
	- ES6 modules
	- React Router
	- useContext
- **backend:** 
	- Node/Express 
	- TypeScript 
	- ES6 modules
	- simple MVC structure (`server.ts`/`model.ts`)
	- MongoDB database (local or e.g. MongoDB Atlas)
	- npm script to create database and fill with data (`npm run createdb`)

## CREATE ONE PROJECT FOR BOTH BACKEND AND FRONTEND

- open your terminal and go to your project directory
- create a directory for this project, e.g.
  - `mkdir mernfullstackapp`

## INSTALL BACKEND

### set up directory and editor for backend

- enter your project directory
  - `cd mernfullstackapp`
- create backend directory
  - `git clone git@github.com:edwardtanguay/starter-simple-frontbackmongo-backend.git mernfullstackapp-backend`
- open VSCode in the backend directory
  - `code mernfullstackapp-backend`
- open VSCode terminal
- install node_modules
  - `npm i`
- delete old and create new Git repository
  - `rm -rf .git`
  - `git init -b main`
  - make initial commit
- to distinguish your backend VSCode from your frontend VSCode, set the frame color
  - you need the [VSCode Peacock extension](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
  - **F1**
  - "Peacock: Enter a Color"
  - `navy` (**b**lue for **b**ackend)

### create .env file for backend

- create a `.env` file in the root directory of your project and copy in the following content

  ``` text
	APP_NAME = MERN Full-Stack MongoDB App
	PORT = 5503
	MONGODB_URL = mongodb://localhost:27017
	MONGODB_DBNAME = mernfullstackapp
  ```

### create database

- make sure your URL and DBNAME variables are correct in the .env file
- execute `npm run createdb`
- if successful, your script will return nothing and your database will exist with two collections

### start and test the backend

- `npm run dev`
- click on URL shown in the terminal (e.g. http://localhost:5503)
- click on `/jobs` link
- change data in your MongoDB database to see that the changes are reflected in the browser
- you can also test your routes with the `test.rest` file (you need the VSCode extension [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client))

## INSTALL FRONTEND

### set up directory and editor for frontend

- enter your project directory
  - `cd mernfullstackapp`
- create frontend directory
  - `git clone git@github.com:edwardtanguay/starter-simple-frontbackmongo-frontend.git mernfullstackapp-frontend`
- open VSCode in the frontend directory
  - `code mernfullstackapp-frontend`
- open VSCode terminal
- install node_modules
  - `npm i`
- delete old and create new Git repository
  - `rm -rf .git`
  - `git init -b main`
  - make initial commit
- to distinguish your frontend VSCode from your backend VSCode, set the frame color
  - you need the [VSCode Peacock extension](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
  - **F1**
  - "Peacock: Enter a Color"
  - `purple` (**f**uchsia for **f**rontend)

### create .env file for frontend

- create an `.env` file in the root directory of your project
- copy in the following content and change backend port if necessary

  ``` text
  VITE_BACKEND_URL = http://localhost:5503
  ```
  
### start the frontend

- `npm run dev`
- open in browser
- click url in terminal

## more starters, templates and frameworks

https://starters.tanguay.eu
