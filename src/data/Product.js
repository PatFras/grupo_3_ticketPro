const { readJSON } = require("./index");

const products = readJSON('products.json');

const Product = function ({name, price, discount, category, description, location, addres, serviceCharge, section, date}) {
            this.id = products[products.length - 1].id + 1;
			this.name = name.trim();
			this.price = +price;
			this.discount = +discount;
			this.category = category;
			this.description = description.trim();			
			this.image = null;
            this.location = location;
            this.addres = addres;
            this.serviceCharge = +serviceCharge;
            this.section = section;
            this.date = date;
}

module.exports = Product