exports.getAll = function (req, res, next) {
    req.app.get('db').test().then(function (test) {
        res.status(200).send(test);
        console.log(test);
        console.log(res.params.body);
    });
};

exports.postUser = function(req,res,next){
    var user_data = [
        req.body.email,
        req.body.email_verified,
        req.body.given_name,
        req.body.family_name,
        req.body.picture,
        req.body.clientID,
        req.body.updated_at,
        req.body.user_id,
        req.body.nickname,
        req.body.created_at
        ];  
    req.app.get('db').postUser(user_data).then(function(response){
        console.log(user_data);
        res.status(200).send(response);
    });
}

// this end point is just to test server connectivity