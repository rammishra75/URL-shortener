const {getUser} = require('../servic/auth');

async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies ?.uid;
    if(!userUid) return res.redirect('/login');
    if(!user) return res.redirect('/login');
    req.user = user;
    next();
}
async function checkAuth(req, res, next){
    const userUid = req.cookies ?.uid;
    if(!userUid) return res.redirect('/login');
    req.user = user;
    next();
}
module.exports = {
    restrictToLoggedinUserOnly,
};