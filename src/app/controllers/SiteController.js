const { render } = require("node-sass");

class SiteController {

    // [GET] /
    index(req, res) {
        res.render('home');
    }

    //  [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;