handlers.getAddMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/addMovie.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.addMovie = function (ctx) {

    let data = {...ctx.params};

        movieService.addMovie(data).then(function (res) {
            notifications.showSuccess('Movie created successfully.');
            ctx.redirect('#/home');
        }).catch(function (err) {
            console.log(err);
        })

}

handlers.getCinema = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let cinema  = await songService.getCinema();
        let userId = sessionStorage.getItem('id');

        ctx.cinema = cinema;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/cinema.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    }catch (e) {
        console.log(e);
    }


}
