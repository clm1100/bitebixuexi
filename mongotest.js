var mongoose = require('mongoose');
var cdb = mongoose.connect("mongodb://127.0.0.1:27017/test");
var db = mongoose.connection;
var Schema = mongoose.Schema;
// 0、定义schema 结构
var userSchema = Schema({
    name: {
        type: String,
    }
});
// 1、静态属性




userSchema.statics.login = function(){
    console.log("statics",this)
}

userSchema.methods.ceshimethods = function(){
    console.log(this,"ceshimethods")
}

// 2、定义模型
var userModel = mongoose.model('user',userSchema)
userModel.jingtai = function(){
    console.log("jingtai",this)
}
userModel.prototype.ceshiPro = function(){
    console.log(this,"测试prototype")
}

// 3、实例化模型
var xiaoming = new userModel({name:'南京1'});
xiaoming.ceshiPro()
xiaoming.ceshimethods()

// 4、调用模型的方法
userModel.login();
// userModel.jingtai()
userSchema.post('save',function(next){
    console.log("post");
    next()
})

userSchema.pre('save', function(next){
    console.log("pre");
    this.name = "hhhhh"
    next()
})

xiaoming.save(function(err,data){
    console.log("save ok")
})


mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

mongoose.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});