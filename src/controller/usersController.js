module.exports = {
    register : require('./users/register'),
    processRegister : require('./users/processRegister'),
    login : require('./users/login'),
    processLogin : require('./users/processLogin'),
    profile : require('./users/profile'),
    update : require('./users/update'),
    logout : require('./users/logout')
}