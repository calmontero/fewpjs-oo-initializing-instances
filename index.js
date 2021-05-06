// Write your code here

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

let newbfast = new Breakfast("eggs","juice");
newbfast;

class Lunch {
    constructor(salad,soup,drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea');
newlunch;

class Dinner {
    constructor(salad, soup, entree, _dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = _dessert;
    }
}

let newDinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake');
newDinner;
