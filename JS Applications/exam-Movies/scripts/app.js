const handlers = {}

$(() => {
  const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/indexGetSCRIPTS.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getHome);

    // user routes
    this.get('#/register', handlers.getRegister);
    this.get('#/login', handlers.getLogin);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logoutUser);

    this.get('#/cinema',handlers.getCinema);
    this.get('#/addMovie',handlers.getAddMovie);
    this.post('#/addMovie',handlers.addMovie);

    // ADD YOUR ROUTES HERE
  });
  app.run('#/home');
});