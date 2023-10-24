const { readJSON } = require("./index");

const products = readJSON('products.json');

const Product = function ({name, price, category, description, image, location, address, serviceCharge, section, date}) {
            this.id = products[products.length - 1].id + 1;
			this.name = name.trim();
			this.price = +price;
			this.category = category;
			this.description = description.trim();			
			this.image = image;
            this.location = location;
            this.address = address;
            this.serviceCharge = +serviceCharge;
            this.section = section;
            this.date = date;
}

module.exports = Product

