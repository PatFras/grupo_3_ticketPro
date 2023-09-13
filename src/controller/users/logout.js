module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('ticketPro', null,{
        maxAge : -1
    })
    
    return res.redirect('/')
}