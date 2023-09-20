const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const users = readJSON('users.json');
    const user = users.find(user => user.id == req.session.userLogin.id);
    let successMsg = 0;
    return res.render('users/profile',{
        ...user,
        successMsg
    })
}