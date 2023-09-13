module.exports = (req,res,next) => {
    if(req.cookies.ticketPro){
        req.session.userLogin = req.cookies.ticketPro
    }
    next()
}