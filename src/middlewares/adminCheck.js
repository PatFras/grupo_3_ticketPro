
module.exports = (req,res,next) => {
    if (!(req.session.userLogin && req.session.userLogin.role == "admin")) {
        return res.redirect('/productList');
    }
    return next()
}