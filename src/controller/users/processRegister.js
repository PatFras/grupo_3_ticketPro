const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../../data");
const User = require("../../data/user");

module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const users = readJSON('users.json');
        const user = new User(req.body);
    
        users.push(user);
        writeJSON(users,'users.json')
    
        return res.redirect('/')
    }else {
        return res.send(errors.mapped())
    }
    
 
}