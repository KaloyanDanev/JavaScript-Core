const handlers = {}

$(() => {
  const app = Sammy('#rooter', function () {
    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/index.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getHome);

    // user routes
    this.get('#/register', handlers.getRegister);
    this.get('#/login', handlers.getLogin);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logoutUser);

    this.get('#/allReceipts',handlers.getAllReceipts);

    this.get('#/shareRecipe',handlers.getShareRecipe);
    this.post('#/shareRecipe',handlers.shareRecipe);

    this.get('#/edit/:id',handlers.getEditRecipe);
    this.post('#/edit/:id', handlers.editRecipe);

    this.get('#/archive/:id',handlers.deleteRecipe);

    this.get('#/details/:id',handlers.getRecipeDetails);

    // ADD YOUR ROUTES HERE
  });
  app.run('#/home');
});