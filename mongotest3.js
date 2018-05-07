var mongoose = require('mongoose');
var cdb = mongoose.createConnection("mongodb://127.0.0.1:27017/test");
setTimeout(()=>{
    // console.log(mongoose)
    console.log(mongoose.connection)
    console.log(cdb)
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

var userModel = mongoose.model('user',userSchema)
var xiaoming = new userModel({name:'南京1'});

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