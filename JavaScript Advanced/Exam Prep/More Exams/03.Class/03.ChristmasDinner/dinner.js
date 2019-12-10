class ChristmasDinner {

    constructor(budget) {
        if (budget < 0){ throw new Error('The budget cannot be a negative number')}

        this.budget = Number(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product){
        if (this.budget < +product[1]){
            throw new Error(`Not enough monet to buy this product`);
        }
        this.products.push(product);
        this.budget -= +product[1];
    }

    recipes(recipe){
        const recipes = {
           recipeName: recipe,
           productsList: []
       };
    }
    inviteGuests(name, dish){
        const findDish = this.dishes.find(d => d.name === name);
        if (!findDish === dish) {
            throw new Error(`We do not have this dish`)
        }
        //error
        if (!this.guests[name] === name){
            throw new Error(`This guest has already been invited`)
        }

       const obj = {
            guestsName: this.guests[name],
            dish: this.guests[dish]
        }
    }

    showAttendance(){
        return `${this.guests.name} will eat ${this.guests.dish} which consists of ${this.products}`
    }
}




let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
