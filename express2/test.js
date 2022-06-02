const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });
BlogPost.create(
  {
    title: "The Mythbuster's Guide to Saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when went on ITV Tonight to dispense a masterclass in saving money on energy you get past the boring bullet-point lists, a whole new world of thrifty them everything at this time of year. They go like this:",
  },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);
BlogPost.find({}, (error, blogspot) => {
  console.log(error, blogspot);
});
BlogPost.find(
  {
    title: "The Mythbuster's Guide to Saving Money on Energy Bills",
  },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);
BlogPost.find(
  {
    title: /The/,
  },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);
var id = "5cb436980b33147489eadfbb";
BlogPost.findById(id, (error, blogspot) => {
  console.log(error, blogspot);
});
BlogPost.findByIdAndUpdate(
  id,
  { title: "Updated title" },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);
BlogPost.findByIdAndDelete(id, (error, blogspot) => {
  console.log(error, blogspot);
});
