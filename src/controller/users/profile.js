const db = require("../../database/models");

module.exports = (req, res) => {
    db.User.findByPk(req.session.userLogin.id)
        .then(user => {
            if (user) {
                let successMsg = 0;
                return res.render('users/profile', {
                    ...user.dataValues,
                    successMsg
                });
            }
        });
};