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

    this.get('#/dashboard',handlers.getDashboard);
    this.get('#/myPets',handlers.getMyPets);
    this.get('#/addPet',handlers.getAddPet);

    this.post('#/addPet',handlers.addPet)
  });
  app.run('#/home');
});