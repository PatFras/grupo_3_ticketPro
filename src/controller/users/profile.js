const db = require("../../database/models");

module.exports = (req, res) => {
    let successMsg = 0;
    db.User.findByPk(req.session.userLogin.id)
        .then(user => {
            return res.render('users/profile', {
                ...user,
                successMsg: 0
            });
        })
        .catch(error => console.log(error));
}