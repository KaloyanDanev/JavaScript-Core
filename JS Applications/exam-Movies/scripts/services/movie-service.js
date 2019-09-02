const movieService = (() => {

    function addMovie(data){
        return kinvey.post('appdata','movies', 'kinvey', data)
    }

    function getCinema() {
        return kinvey.get('appdata','movies', 'kinvey');
    }

    function getAllMyMovies() {
        return kinvey.get('appdata','movies', 'kinvey');

    }

    function removeMovie (id) {
        return kinvey.remove('appdata',`movies/${id}`, 'kinvey');

    }


    function getAMovie (id){
        return kinvey.get('appdata',`movies/${id}`, 'kinvey');
    }

    return{
        addMovie,
        getCinema,
        getAllMyMovies,
        removeMovie,
        getAMovie
    }
})();