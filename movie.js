const movie_data = require('data-store')({path: process.cwd() + '/data/movie.json'})

class Movie {

    constructor(id, user, title, liked, poster) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.liked = liked;
        this.poster = poster;
    }

    update(liked) {
        this.liked = liked;
        movie_data.set(this.id.toString(), this)
    }
    
    delete() {
        movie_data.del(this.id.toString())
    }

}

Movie.getAllIDs = () => {
    return Object.keys(movie_data.data).map((id => {return parseInt(id);})); //turn keys of movie data into array of id's; parseInt -> string to int

}

Movie.getAllMoviesUser = (user) => {
    let array = Object.keys(movie_data.data).filter(id => movie_data.get(id).user == user)
    return array.map(id => Movie.findByID(id))
    
}

Movie.findByID = (id) => {
    let mdata = movie_data.get(id)
    if (mdata != null) {
        return new Movie(mdata.id, mdata.user, mdata.title, mdata.liked, mdata.poster)
    }
    return null
    
}

// User.next_id = User.getAllIDs().reduce((max, next_id) => { //finds max existing id, adds 1, this is new id user is created under
//     if (max < next_id) {
//         return next_id
//     }
//     return max;
// }, -1) + 1

Movie.create = (id, user, title, liked, poster) => {
    // let id = User.next_id;
    // User.next_id += 1;
    let m = new Movie(id, user, title, liked, poster)
    movie_data.set(m.id.toString(), m)
    return m
}

// Dummy user examples


module.exports = Movie;