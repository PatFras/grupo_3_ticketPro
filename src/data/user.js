const {hashSync} = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');


const User = function ({ userName, email, password}) {
    
    this.id = uuidv4();
    this.name = userName.trim();
    this.email = email.trim();
    this.password = hashSync(password,10);
    this.role = 'user';
    this.createAt = new Date;
}

module.exports = User