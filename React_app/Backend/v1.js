const express = require('express');

const app = express();
const port = 3001;
var bodyparser=require("body-parser");
var cookieParser = require('cookie-parser');
const path=require('path');
var cors = require('cors');
var passport=require('passport');
var localStrategy=require('passport-local');
var passportLocalMongoose=require('passport-local-mongoose');
var session=require('express-session');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/campgrounds');
// var testAPIRouter = require("./routes/testAPI");
var Campground=require('./model/camp.js');
var Comment=require('./model/comment.js');
var User=require('./model/User.js');
var mongoose =require('mongoose');
mongoose.connect("mongodb+srv://shivansh:shivansh@cluster0-fpqlm.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});
mongoose.connection.once('open',()=>{
  console.log("mongoDbs connected");
});

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(session({
   secret:"My name is khan",
   resave: false,
   saveUninitialized: false
 }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	next();
});


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
  res.send("jai mata di");
});
app.get("/user",function(req,res){
  if(req.user)
  {
    res.json({user:req.user})
  }
  else{
    res.json({user:null})
  }
})

app.post("/login",passport.authenticate('local'),function(req,res){
    
    console.log("done login "+ req.user)
  res.json({user:req.user});
}
);

app.post("/register",function(req,res){
  console.log("register request")
	var newUser=new User({username: req.body.username,email:req.body.email,phone:req.body.ph});
	User.register(newUser,req.body.password,function(err,user){
		if(err)
			{
				console.log("err hai");
			  res.json(err);
      }
      else
		{
      console.log("done")
			res.json({user:null});
		}});
  });

app.get("/logout",function(req,res){
  console.log("logged out")
	req.logout();
	res.json("logged out");
});

app.get('/campgrounds',isLoggedIn,function(req, res, next) {
  console.log("Get request aa gaya");
  console.log(req.user)
  Campground.find()
  .then(con=>res.json(con))
  .catch(err=>res.json(err));
});

app.post("/campgrounds/new",function(req,res){

console.log("post kr re")
console.log(req.user)
	var name=req.body.name;
	var image=req.body.image;
	var desc=req.body.description;
	
  var camps={name: name,image: image,description: desc};
    // ,author:{id:req.user._id,username:req.user.username}};
    console.log("aa gaye");
	Campground.create(camps,function(err,newlyCreated){
		if(err)
		console.log(err);
	else
		{
			res.json(newlyCreated);
		}
	})
	
 });


 app.get("/campgrounds/:id",function(req,res){
	 console.log("swagat hai");
	Campground.findById(req.params.id).populate("comment").exec(function(err,fcamps){
		if(err)
		console.log(err);
	else
		{
			console.log(fcamps);
			res.json(fcamps);
		}
	});
});

app.post("/campgrounds/:id/comment",function(req,res){
    
    Campground.findById(req.params.id,function(err,camp){
        if(err)
        res.json(err);
        else
        {
            
             Comment.create({text:req.body.comment},function(err,comm){
                    if(err)
                    res.json(err);
                    else{
                        console.log(comm);
                        comm.save();
                        camp.comment.push(comm);
                        camp.save();
                        res.json(comm);
                    }
            })
        }
    })
})

app.delete("/campgrounds/delete/",function(req,res){
  console.log(req.query.id)
	Campground.findByIdAndDelete(req.query.id,function(err,camp){
		if(err){
			res.json(err);
		}
		else{
			res.json(req.query.id);
		}
	})
});

app.put("/campgrounds/update/:id",function(req,res){
  var name=req.body.name;
	var image=req.body.image;
	var desc=req.body.description;
	
  var camps={name: name,image: image,description: desc};
  Campground.findByIdAndUpdate(req.params.id,camps,function(err,camp){
          if(err)
          res.json(err)
          else
          res.json(camp)
  })
})


function isLoggedIn(req,res,next){
  if(req.isAuthenticated())
  return next();
  else
  res.json("not authenticated");
}


// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));