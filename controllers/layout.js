exports.getLanding = (req, res, next) => {
    res.render('landing.ejs', {
        pageTitle: "Landing Page"
    })
}