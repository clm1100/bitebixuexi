var mongoose = require('mongoose');
var cdb = mongoose.connect("mongodb://127.0.0.1:27017/test");
var db = mongoose.connection;
setTimeout(function(){
    // cdb.then(function(data){
    //     console.log(data)
    // })
    console.log(mongoose.model.toString());
    console.log("===================")
    console.log(mongoose.connection.model.toString())
},3000)

var Schema = mongoose.Schema;
// 0、定义schema 结构
var userSchema = Schema({
    name: {
        type: String,
    }
});
// console.log(userSchema.path('name'))
userSchema.path('name').validate(function(value){
    // console.log("=========",this,value)
    console.log('validate')
    return true
},"报错了")
userSchema.virtual("aname").get(function(){
    return this.name+="9999999"
})
userSchema.virtual('fullname').set(function(v){
    console.log("9898989")
    this.name = v;
})

var userModel = db.model('user',userSchema)
var xiaoming = new userModel({name:'南京1'});
// xiaoming.fullname = "99999999999"
// console.log(xiaoming.aname)

console.log(xiaoming.name,"name")



xiaoming.save(function(err,data){
    console.log("save ok")
})


mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

mongoose.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});