var redis = require("redis"),
    client = redis.createClient();
 
client.on("connect", function () {
    client.set("foo_rand000000000000", "some fantastic value", redis.print);
    client.expire("foo_rand000000000000",1*8)
    client.get("foo_rand000000000000", function (err,value) {
        console.log(value,"333333333333")
    });
});