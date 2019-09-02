handlers.getAllSongs = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let songs  = await songService.getAllSongs();
        let userId = sessionStorage.getItem('id');
        songs.forEach((song) => song.isCreator = song._acl.creator === userId);

        ctx.songs = songs;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            song: './templates/songs/song.hbs'
        }).then(function () {
            this.partial('./templates/songs/all.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    }catch (e) {
        console.log(e);
    }


}

handlers.getCreateSong = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/songs/create.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.getMySongs = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    songService.getAllMySongs().then(function (res) {
        let userId = sessionStorage.getItem('id');
        res.forEach((song) => song.isCreator = song._acl.creator === userId);
        ctx.songs = res;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            song: './templates/songs/song.hbs'
        }).then(function () {
            this.partial('./templates/songs/mySongs.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    })

}

handlers.createSong = function (ctx) {

    let data = {...ctx.params, likeCounter: 0, listenCounter: 0};

    if (data.title.length < 6) {
        notification.showError('The title should be at least 6 characters long!');
        ctx.redirect('#/mySongs');
    }else if (data.artist.length < 3){
        notification.showError('The artist should be at least 3 characters long!');
        ctx.redirect('#/mySongs');
    }else if(!data.imageURL.startsWith('http')){
        notification.showError('The image should start with "http://" or "https://"');
        ctx.redirect('#/mySongs');
    }else{
        songService.createSong(data).then(function (res) {
            notification.showSuccess('Song created successfully!');
            ctx.redirect('#/mySongs');
        }).catch(function (err) {

        })
    }
}

handlers.removeSong = function (ctx) {
   songService.removeSong(ctx.params.id).then(function () {
       notification.showSuccess('Song was removed successfully!');
       ctx.redirect('#/mySongs');
   }).catch(function (err) {
       console.log(err);
   })
}

handlers.likeSong = async function (ctx) {
    let id = ctx.params.id;
try {
    let song = await songService.getASong(id);
    let newLikes = Number(song.likeCounter) + 1;
song.likeCounter = newLikes;
    songService.likeSong(id,song).then(function () {

        notification.showSuccess('Song was liked successfully!');
        ctx.redirect('#/allSongs');

    }).catch(function (err) {
        console.log(err);
    })
}catch (e) {
    console.log(e);
}

}