handlers.getDashboard = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    }).then(function () {
        this.partial('../views/pets/dashboard.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.getMyPets = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    }).then(function () {
        this.partial('../views/pets/myPets.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.getAddPet = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    }).then(function () {
        this.partial('../views/pets/createPet.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.addPet = function (ctx) {

let data = {...ctx.params};

    petService.addPet(data).then(function(res) {

    }).catch(function (err) {
    
})
}