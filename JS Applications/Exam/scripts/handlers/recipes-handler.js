handlers.getShareRecipe = function (ctx) {


    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.firstName = sessionStorage.getItem('firstName');
    ctx.lastName = sessionStorage.getItem('lastName');

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/receipt/share.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.shareRecipe = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.firstName = sessionStorage.getItem('firstName');
    ctx.lastName = sessionStorage.getItem('lastName');

    let data = {...ctx.params, likeCounter: 0};

    if (data.meal < 4) {
        notifications.showError('Meal name should be at least 4 characters.');
    }
    else if (data.ingredients < 2) {
        notifications.showError('Ingredients should be at least 2.');
    }
    else if (data.prepMethod < 10) {
        notifications.showError('Preparation method should be at least 10 characters.');
    }else if (data.description < 10) {
        notifications.showError('Description should be at least 10 characters.');

    }else if (!data.foodImageURL.startsWith('http')) {
        notification.showError('The image should start with "http://" or "https://"');
    }

    else{
        recipeService.shareRecipe(data).then(function (res) {
            notifications.showSuccess('Recipe shared successfully!');
            ctx.redirect('#/home');
        }).catch(function (err) {

        })
    }
}

handlers.showAllReceipts = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let receipts  = await recipeService.showAllReceipts();
        let userId = sessionStorage.getItem('id');
        receipts.forEach((receipt) => receipt.isCreator = receipt._acl.creator === userId);

        ctx.receipts = receipts;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            receipt: './templates/receipt/receipt.hbs'
        }).then(function () {
            this.partial('./templates/receipt/receipts.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    }catch (e) {
        console.log(e);
    }


}

handlers.getEditRecipe = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.firstName = sessionStorage.getItem('firstName');
    ctx.lastName = sessionStorage.getItem('lastName');

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/receipt/edit.hbs');
    }).catch(function (e) {
        notifications.showError(e.responseJSON.description);
    });
};

handlers.editRecipe = function (ctx) {
    ctx.firstName = sessionStorage.getItem('firstName');
    ctx.lastName = sessionStorage.getItem('lastName');

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let receiptId = sessionStorage.getItem('receiptId');
    recipeService.showAllReceipts().then(function (receipts) {
        let receipt = receipts.filter(e => e._id === receiptId)[0];

        let meal = ctx.params.meal;
        let ingredients = ctx.params.ingredients;
        let prep = ctx.params.prepMethod;
        let description = ctx.params.description;
        let imgUrl = ctx.params.foodImageURL;
        let category = ctx.params.category;


        recipeService.editReceipt(receiptId, receipt, meal, ingredients, prep, description, imgUrl, category).then(function () {
            notifications.showSuccess('Receipt edited successfully.');
            ctx.redirect('#/home');
            sessionStorage.removeItem('receiptId');
        });
    }).catch(function (e) {
        notifications.showError(e.responseJSON.description);
    });
};

handlers.deleteReceipt = function (ctx) {
    let receiptId = sessionStorage.getItem('receiptId');
    ctx.firstName = sessionStorage.getItem('firstName');
    ctx.lastName = sessionStorage.getItem('lastName');
    recipeService.deleteReceipt(receiptId).then(function () {
        notifications.showSuccess('Receipt archived successfully');
        ctx.redirect('#/home');
        sessionStorage.removeItem('receiptId');
    }).catch(function (e) {
        notifications.showError(e.responseJSON.description);
    });
};


handlers.getRecipeDetails = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.firstName = sessionStorage.getItem('firstName');
    ctx.lastName = sessionStorage.getItem('lastName');

    let id = ctx.params.id;

    recipeService.getReceipt(id)
        .then(function (res) {

            ctx.meal = res.meal;
            ctx.description = res.description;
            ctx.imageURL = res.imageURL;
            ctx.prepMethod = res.prepMethod;
            ctx.ingredients = res.ingredients;




            ctx._id = res._id;

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            })
                .then(function () {
                    this.partial('./templates/receipt/details.hbs');
                })
                .catch(function (err) {
                    notifications.handleError(err);
                });

        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};

handlers.likeRecipe = async function (ctx) {
    let id = ctx.params.id;
    try {
        let recipe = await recipeService.getReceipt(id);
        let newLikes = Number(recipe.likeCounter) + 1;
        recipe.likeCounter = newLikes;
        recipeService.likeRecipe(id,recipe).then(function () {
            notification.showSuccess('Recipe was liked successfully!');
        }).catch(function (err) {
            console.log(err);
        })
    }catch (e) {
        console.log(e);
    }

}

