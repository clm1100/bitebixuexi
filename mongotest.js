var mongoose = require('mongoose');
var cdb = mongoose.connect("mongodb://127.0.0.1:27017/test");
var db = mongoose.connection;
var Schema = mongoose.Schema;
var userSchema = Schema({
    name: {
        type: Number,
        get: v =>1111,
        set: function(v){
            console.log(v,"setset");
            return v
        },
    }
});
userSchema.methods.speak = function(){
    this.name = 22222
    console.log(this.name,"this.name")
}
var userModel = mongoose.model('user',userSchema);
userModel.prototype.say = function(){
    console.log(this);
}

var xiaoming = new userModel({name:'小明'});
console.log(xiaoming)

xiaoming.speak()
xiaoming.say()
xiaoming.save(function(err,data){
    console.log(data)
})



mongoose.connection.on("error", function (error) {

    console.log("数据库连接失败：" + error);

});

mongoose.connection.on("open", function () {

    console.log("------数据库连接成功！------");

});