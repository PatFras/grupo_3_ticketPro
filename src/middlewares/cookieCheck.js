module.exports = (req,res,next) => {
    if(req.cookies.ticketProUser){
        req.session.userLogin = req.cookies.ticketProUser
    }
    next()
}