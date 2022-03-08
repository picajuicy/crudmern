//memorize steps from 1 to 19
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//creating new database and connecting it with mongoose
mongoose.connect(
  "mongodb://127.0.0.1/sovizpicaDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("DB connected sucessfully");
    } else {
      console.log("DB error");
    }
  }
);
// }{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }),
//   () => {
//     console.log("DB connected");
//   };

//creating user Schemas
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//creating models
const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "password didn't match" });
      }
    } else {
      res.send({ message: "User not registred" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registred" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registred", user });
        }
      });
    }
  });
});

app.listen(5000, () => {
  console.log("Connection started at port 5000");
});
