# dectify-note-app


dectify-note-app is an API that allows you perform CRUD operations on notes

Note: For learning purposes, you can follow the commit history of this repo.

To use the routes, visit Notes API
Features
* Users can create a notes.
* Users can get a notes.
* Users can get all notes.
* Users can edit a notes.
* Users can add note category.
* Users can get notes by category.
* Users can delete a notes.

Authorization: No authorization required

Endpoints
This is the link in which to access the api.

Below are the collection of routes.
```
 app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the Detectify API!',
	}));
	
	// User routes
	app.post('/api/user/create', userController.create);
	
	// Notes routes
	app.post('/api/user/:userId/notes', noteController.create);
	app.get('/api/user/:userId/notes', noteController.list);
	app.get('/api/user/:userId/notes/:noteId', noteController.retrieve);
	app.put('/api/user/:userId/notes/:noteId', noteController.update);
	app.delete('/api/user/:userId/notes/:noteId', noteController.destroy);
```

Technologies Used
* Node.js
* Express
* Sequelize
* Installation
* Clone the project repository.
* Run the command below to clone:
* git clone ```git@github.com:ckOfor/dectify-note-app.git.```

Change directory into the dectify-note-app directory.
Install all necessary packages in the package.json file. Depending on if you are using npm, you can use the command below:
npm install

#### Things to note
1. I have created an online database to help make things faster all you need to do is create a .env file and add 
```
NODE_ENV = production
DATABASE_URL=postgres://hqerlckr:kuN7z9cmJs4fs6AfmKOfs95eaP8APpqB@salt.db.elephantsql.com:5432/hqerlckr
```

2. type the following code on your command line
```
export DATABASE_URL=postgres://hqerlckr:kuN7z9cmJs4fs6AfmKOfs95eaP8APpqB@salt.db.elephantsql.com:5432/hqerlckr
```

3. Run sequelize migrate command below:
```
sequelize db:migrate
```

4. Run the command below to start the application locally:
```
npm run start-dev
```

Test the routes above on POSTMAN or any other application of choice
Contributing
Fork this repository to your account.
Clone your repository: git clone git@github.com:ckOfor/dectify-note-app.git.
Commit your changes: git commit -m "did something".
Push to the remote branch: git push origin new-feature.
Open a pull request.
Licence
ISC

Copyright (c) 2019 Chinedu Ofor
