var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(){
    console.log('users controller loaded up');
    return{
        create: function(req, res){
            console.log(req.body);
            var newUser = new User(req.body);
            newUser.save(function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(422);
                    res.json(err);
                }
                else {
                    console.log(data);
                    res.json(data);
                }
            })
        },
        login: function (req, res) {
            console.log(req.body);
            var user = User.findOne({username: req.body.username}, function (err, data) {
                if(data == null) {
                    console.log("inside the err");
                    // console.log(err);
                    res.status(422);
                    // err.data = "failed"
                    res.json({data: {errors: {login: {message: "invalid credentials" }}}});
                } else if(data && data.validPassword(req.body.password)){
                    console.log("inside the else if");
                    console.log(data);
                    res.json({_id: data._id});
                } else {
                    console.log("Final else password was wrong");
                    res.status(422);
                    res.json({data: {errors: {login: {message: "invalid credentials" }}}});
                }
            })
        }
    }
}();