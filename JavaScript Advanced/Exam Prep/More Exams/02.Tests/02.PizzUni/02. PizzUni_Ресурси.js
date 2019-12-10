// Example of a WORKING PizzUni Class
let expect = require("chai").expect;


class PizzUni {
    constructor() {
        this.registeredUsers = [];
        this.availableProducts = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };
        this.orders = [];
    }

    registerUser(email) {

        const user = this.doesTheUserExist(email);

        if (user) {
            throw new Error(`This email address (${email}) is already being used!`)
        }

        const currentUser = {
            email,
            orderHistory: []
        };

        this.registeredUsers.push(currentUser);

        return currentUser;
    }

    makeAnOrder(email, orderedPizza, orderedDrink) {

        const user = this.doesTheUserExist(email);

        if (!user) {
            throw new Error(`You must be registered to make orders!`);
        }

        const isThereAPizzaOrdered = this.availableProducts.pizzas.includes(orderedPizza);

        if (!isThereAPizzaOrdered) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        }

        let userOrder = {
            orderedPizza
        };

        const isThereADrinkOrdered = this.availableProducts.drinks.includes(orderedDrink);

        if (isThereADrinkOrdered) {
            userOrder.orderedDrink = orderedDrink;
        }

        user.orderHistory.push(userOrder);

        const currentOrder = {
            ...userOrder,
            email,
            status: 'pending'
        };
        this.orders.push(currentOrder);

        return this.orders.length - 1;
    }

    detailsAboutMyOrder(id) {
        if (this.orders[id]) {
            return `Status of your order: ${this.orders[id].status}`;
        }
    }

    doesTheUserExist(email) {
        return this.registeredUsers.filter((user) => user.email === email)[0];
    }

    completeOrder() {
        if (this.orders.length > 0) {
            const index = this.orders.findIndex((o) => o.status === "pending");
            this.orders[index].status = 'completed';

            return this.orders[index];
        }
    }
}
module.exports = PizzUni; // This piece of code exports the PizzUni Class, so it could be accessed in other files.

describe("PizzUni", function() {
    let input;
    beforeEach(function () {
        input = new PizzUni('Pesho');
    });

    it("test constructor", function () {
        expect(input.registeredUsers).to.deep.equal([]);
        expect(typeof input.availableProducts).to.equal('object');
        expect(input.orders).to.deep.equal([]);
        expect(typeof input.registeredUsers).to.equal('object');
        expect(input.registeredUsers.length).to.equal(0);
    });

    it('should register User', function () {
        input.registerUser('email@abv.bg');
        expect(input.registeredUsers).to.have.length(1);
    });
    it('should register Email', function () {
       let result = input.registerUser('email@abv.bg');
        expect(result.email).to.equal('email@abv.bg')
    });
    it('test drinks count', function () {
        let drinks = input.availableProducts.drinks.length;
        expect(drinks).to.equal(3);
    });
    it('test pizzas count', function () {
        let pizzas = input.availableProducts.pizzas.length;
        expect(pizzas).to.equal(3);
    });
    it('should return error registerUser', function () {
        let result = input.registerUser('email@abv.bg');
        expect(() => result.to.throw('This email address (email@abv.bg) is already being used!'));
    });
    it('should test pizzaOrder', function () {
        let register = input.registerUser('email@abv.bg');
        let result = input.makeAnOrder('email@abv.bg','Italian Style','Fanta');
        expect(result).to.equal(0)
    });
    it('status of order', function () {
        let register = input.registerUser('email@abv.bg');
        let result = input.makeAnOrder('email@abv.bg','Italian Style','Fanta');
        let id = input.detailsAboutMyOrder(result);
        expect(id).to.equal(`Status of your order: pending`)
    });
    it('should complete order', function () {
        let register = input.registerUser('email@abv.bg');
        let result = input.makeAnOrder('email@abv.bg','Italian Style','Fanta');
        let id = input.detailsAboutMyOrder(result);
        let complete = input.completeOrder(id);
        expect(complete.status).to.equal('completed')
    });
    it('should order 0 pizza', function () {
        let register = input.registerUser('email@abv.bg');
        let result = () => input.makeAnOrder('email@abv.bg','','Fanta');
        expect(result).to.throw(Error, 'You must order at least 1 Pizza to finish the order.');
        });

});
