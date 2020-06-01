function checkAuthorization(req, res, next) {

    if (req.session) {
        if (req.session.user) {
            res.locals.isAuthenticated = true
            let user = req.session.user
            next()
        } else {
            res.redirect("/login")
        }
    } else {
        res.redirect("/login")
    }
}

module.exports = checkAuthorization