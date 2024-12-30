// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname+"/date.js");

const app = express();
//place below the const app = exress();
//copy exactly the same.
// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // to be able to access css in list.ejs

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true}); 

const itemsSchema = {
  name:String
};

const Item = mongoose.model("item", itemsSchema)

const item1 = new Item({
  name: "welcome to todolist."
});
const item2 = new Item({
  name: "Hit the + button to add a new item."
});
const item3 = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1,item2,item3];

const listSchema = {
  name:String,
  items:[itemsSchema]
};

const List = mongoose.model("List", listSchema);

// Item.insertMany(defaultItems, function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Successfully saved default items to DB.")
//   }
// });

//GET function for home route
app.get ("/", function(req,res){

  Item.find({}, function(err, foundItems){
    if(foundItems.length===0){

      Item.insertMany(defaultItems, function(err){
        if(err){
          console.log(err);
        } else{
          console.log("Successfully saved default items to DB.")
        }
      });
      res.redirect("/");
        } else{
          res.render("list", {listTitle:day, newListItems: foundItems});
        }
    // console.log(foundItems);
  });

const  day = date.getDate(); //date module from date.js
});

app.get("/:customListName", function(req,res){
  const customListName = req.params.customListName;

List.findOne({name:customListName}, function(err, foundList){
  if(!err){
    if(!foundList){
    // console.log("Doesn't Exist!");
    // create new list 
    const list = new List ({
      name:customListName,
      items:defaultItems
    });
  list.save();
  res.redirect("/" + customListName);
    } else{
      // console.log("Exist!");
      // show current list
      res.render("list",{listTitle: foundList.name, newListItems: foundList.items})
    }
  }
})


});


 


//POST function for home route
app.post("/", function(req, res){
  // console.log(req.body);
const itemName = req.body.newItem;
const listName = req.body.list;
const item = new Item({
  name:itemName
});
if(listName==="today"){
  item.save();
  res.redirect("/");
} else{
  List.findOne({name: listName}, function(err,foundList){
    foundList.items.push(item);
    foundList.save();
    res.redirect("/" + listName);
  })
}


  // if(req.body.list === "Work list"){
  //   workItems.push(item);
  //   res.redirect ("/work");
  // }else{
  //   items.push(item);
  //   res.redirect ("/");
  // }
});


 app.post("/delete", function(req,res){
  const checkedItemId = req.body.checkbox;
  Item.findByIdAndRemove(checkedItemId, function(err){
    if(!err){
      console.log("Successfully deleted checked item.");
      res.redirect("/");
    };
  })
 })





//GET function for Work route
app.get("/work", function(req,res){
  res.render("list", {listTitle:"Work list", newListItems:workItems});
});

//POST function for home route
app.post("/work", function(req,res){
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

//GET function for About route

app.get("/about", function(req,res){
  res.render("about");
});


app.listen(3000, function(){
console.log("Server is running on port 3000");
});
