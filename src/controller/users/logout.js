module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('ticketProUser', null,{
        maxAge : -1
    })
    
    return res.redirect('/')
}