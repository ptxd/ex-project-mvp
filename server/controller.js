exports.getAll = function (req, res, next) {
    req.app.get('db').test().then(function (test) {
        res.status(200).send(test);
        console.log(test);
        console.log(res.params.body);
    });
};

// this end point is just to test server connectivity