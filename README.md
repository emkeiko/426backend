3rd Party API
We utilized omdb's api to retrieve all the necessary movie information that was used to create user's movie list.

OMDB's website: http://www.omdbapi.com/

Backend Structure
Our backend is made with express.js and uses expressSession to keep track of session states.

It stores the necessary information needed for the frontend to operate in two different JSON files.

users.json stores the user's username and password
movie.json stores the movie's unique id, movie's title, the user who watched the movie, whether the user liked the movie, and an url to a poster for the movie.
Endpoint Documentation
{
  method: 'post',
  url: 'https://my-movie-list-2.herokuapp.com/register',
  withCredentials: true,
  data: {
    user: user,
    password: pw
  }
}
Purpose: Register a username and password onto the server.

Endpoint: POST - https://my-movie-list-2.herokuapp.com/register

Params: User (string): Required, username of the person registerting Password (string): Required, creates password for the current user

Response: True for successful user registration or a 404 error if an user with the same username already exists.

{
  method: 'post',
  url: 'https://my-movie-list-2.herokuapp.com/login',
  withCredentials: true,
  data: {
    user: user,
    password: pw
  }
}
Purpose: Login to the server.

Endpoint: POST - https://my-movie-list-2.herokuapp.com/login

Params: User (string): Required, username of the person logging in Password (string): Required, corresponding password of username

Response: True for successful logins, a 404 error for non-existing users, or a 403 error for incorrect password.

{
  method: 'get',
  url: 'https://my-movie-list-2.herokuapp.com/movies',
  withCredentials: true,
  }
}
Purpose: Obtain all the movies on the current user’s Movie List

Endpoint: GET - https://my-movie-list-2.herokuapp.com/movies

Params: No params required

Response: An array containing all of the Movie objects in the user’s Movie list in JSON format or a 400 error if somehow a request was sent without an user being logged in.

{
  method: 'put',
  url: `https://my-movie-list-2.herokuapp.com/movies/${ID}`,
  withCredentials: true,
  data:{
      liked: "true"
  }
}
Purpose: Updates the “liked” attribute of a movie watched by the user

Endpoint: PUT - https://my-movie-list-2.herokuapp.com/movies/:id <- ":id" needs to be replaced with the id of the Movie object that is being updated

Params: Liked (string): Required, whether or not the movie was “liked” by the user. true = move was liked. false = movie was disliked.

Response: The updated Movie object for successful requests, a 403 error if the user was incorrect(not the user who watched the movie or no user is logged in), or a 404 error if the movie doesn't exist for the user who's sent the request.

{
  method: 'post',
  url: `https://my-movie-list-2.herokuapp.com/movies`,
  withCredentials: true,
  data: {
    id: "tt0441773",
    user: "comp426user",
    title: "Kung Fu Panda"
    liked: "true"
    poster: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  }
}
Purpose: Adds a movie to current user’s Movie List

Endpoint: POST - https://my-movie-list-2.herokuapp.com/movies

Params: id (string): an unique string for the movie watched by the user user (string): the username of the logged in user title (string): the title of the movie being added liked (string): true or false to indicate whether the user liked the movie poster (string): an url for the movie's poster

Response: The added Movie object in a JSON format for successful requests or a 403 error if there is no users logged in.

{
  method: 'delete',
  url: `https://my-movie-list-2.herokuapp.com/movies/${ID}`,
  withCredentials: true
}
Purpose: Deletes a specific Movie object from current user’s movie list

Endpoint: DELETE - https://my-movie-list-2.herokuapp.com/movies/:id <- ":id" needs to be replaced with the id of the Movie object that is being deleted

Params: No params required

Response: True for successful requests, a 403 error if the user was not the user who watched the movie, or a 404 error if the movie was not found inside the current user's list.

{
  method: 'get',
  url: `https://my-movie-list-2.herokuapp.com/logout`,
  withCredentials: true
}
Purpose: Logout of current User session.

Endpoint: GET - https://my-movie-list-2.herokuapp.com/logout

Params: No params required

Response: True
