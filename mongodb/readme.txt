show dbs
use <databasename>      //learn   mycollect
show collections
db.<collectionname>.insertOne({name: "shri", age: "21"})
db.mycollect.insertMany([{name: "shri", age: "21"}, {name: "teju", age: "21"}, {name:"prc", age: "21"}, {name:"rutika", age: "21",rollno: "60"}])
db.mycollect.deleteOne({name: "shri"})
db.mycollect.deleteMany([{name: "shri", age: "21"}, {name: "teju", age: "21"}, {name:"prc", age: "21"}, {name:"rutika", age: "21",rollno: "60"}])
db.mycollect.find()
db.mycollect.find({name: "shri"})
db.mycollect.find({age: {$gt: "20"}})
db.mycollect.find({name: "teju", age: {$gt: "20"}})
db.mycollect.find({$or:[{name: "teju"}, {age: {$gt: "20"}}]})
db.mycollect.find({age: {$gt: "20"}}, {name: 1})
db.mycollect.updateOne({name: "shri"}, {$set: {age: 20}})
db.mycollect.updateMany({name: "shri"}, {$set: {age: 20}})


install moongoose in nodejs using npm