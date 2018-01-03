var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, "User name must be more than 2 character"]
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
UserSchema.pre('save', function (done) {
    this.password = this.generateHash(this.password);
    done();
})

mongoose.model('User', UserSchema);