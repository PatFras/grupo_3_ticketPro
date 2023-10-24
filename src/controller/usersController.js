module.exports = {
    register : require('./users/register'),
    processRegister : require('./users/processRegister'),
    login : require('./users/login'),
    processLogin : require('./users/processLogin'),
    profile : require('./users/profile'),
    edit : require('./users/edit'),
    logout : require('./users/logout')
}