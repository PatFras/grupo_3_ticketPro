const {hashSync} = require('bcryptjs');

const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, 'users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath));

const user = function ({ userName, email, password}) {
    
    this.id = users[users.length - 1].id + 1;
    this.name = userName.trim();
    this.email = email.trim();
    this.password = hashSync(password,10);
    this.role = 'user';
    this.createAt = new Date;
}

module.exports = user