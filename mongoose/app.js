// jshint esversion:6
// create database, reading from databases, data validation
// updating and deleting data

const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true}); 
const fruitSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "no name specified please check!"]
        },
        rating:{
            type: Number,
            min:1,
            max:10
        },
        review: String
    }
);
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    // name:"Apple",
    name:"Apple",
    // rating:72,
    rating:10,
    review:"Pretty awesome fruit."
});

// you will get a validation error because the min and max value is between 1 to 10 and you have given it 72.
//there is one more error where name field is required
// fruit.save();

// const personSchema = new mongoose.Schema({
//     name:String,
//     age:Number
// });

// const Person = mongoose.model("person", personSchema);

// const person = new Person({
//     name:"Shreyas",
//     age:20
// });

// person.save();

// const kiwi = new Fruit({
//     name:"Kiwi",
//     rating:10,
//     review:"The best fruit"
// });
// const orange = new Fruit({
//     name:"orange",
//     rating:7,
//     review:"Too sour for me"
// });
// const banana = new Fruit({
//     name:"banana",
//     rating:5,
//     review:"wierd"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("successfully saved");
//     }
// });

// Fruit.find(function(err,fruits){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(fruits);
        // fruits.forEach(function(fruit){
        //     console.log(fruit.name);
        // });
        // mongoose.connection.close(); 
//     }
// }); 

// update

// Fruit.updateOne({rating:7},{name:"peach"},function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("updated");
//     }
// });

//delete

// Fruit.deleteOne({rating:5},function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Deleted");
//     }
// });


//All apple gets deleted:---

// Fruit.deleteMany({name:"Apple"},function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("apple deleted");
//     }
// });


// IMP: from one collection to another collection we can send data, here we are having two collections fruits and person where a person name shreyas likes a fruit so you can put the fruits data in to the persons data collection

// const pineapple = new Fruit({
//         name:"pineapple",
//         rating:9,
//         review:"great fruit"
//     });

//     pineapple.save();

// const person = new Person({
// name:"Amruta",
// age:12,
// favouriteFruit: pineapple
// })

// and define "favouriteFruit: fruitSchema" in the person scehma