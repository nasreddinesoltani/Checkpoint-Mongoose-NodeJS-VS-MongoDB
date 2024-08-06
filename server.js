import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./Model/user.js";

const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

await mongoose.connect(process.env.DB_URL);

// async function start() {
//   const person = await User.create({
//     name: "Saif",
//     age: 27,
//     favoriteFoods: ["Pizza"],
//   });
//   console.log(person);
// }
// start();

//////////////////////////////////////////////////////////

// async function start() {
//   const arrayOfPersons = [
//     { name: "Ahmed", age: 23, favoriteFoods: ["Pizza"] },
//     { name: "Donia", age: 25, favoriteFoods: ["Hamburger"] },
//   ];

//   await User.create(arrayOfPersons);
// }

////////////////////////////////////////
// async function start() {
//   const persons = await User.find({ name: "Saif" });
//   console.log(persons);
// }

// start();

//////////////////////////////////////////////////////////

// async function start() {
//   const persons = await User.findOne({ name: "Saif" });
//   console.log(persons);
// }

// start();
//////////////////////////////////////////////////////////

// async function start() {
//   const person = await User.findById("6650e72d4ff0f52cae712222");
//   console.log(person);
// }

// start();

////////////////////////////////////////////////////////

// async function start() {
//   await User.findByIdAndUpdate("6650e72d4ff0f52cae712222", {
//     $push: { favoriteFoods: "Juice" },
//   });
// }
// start();

///////////////////////////////////////////////////////

// async function start() {
//   await User.findByIdAndUpdate("6650e72d4ff0f52cae712221", { age: 30 });
// }
// start();

///////////////////////////////////////////////////

// async function start() {
//   await User.findOneAndUpdate(
//     { name: "Donia" },
//     { $push: { favoriteFoods: "Strawbery" } }
//   );
// }
// start();

/////////////////////////////////////////
async function start() {
  await User.updateMany({ age: { $gt: 20 } }, { favoriteFoods: ["Spaghetti"] });
}
start();

///////////////////////////////////////////////////

// async function start() {
//   await User.updateMany(
//     { name: { $regex: /a\b/gi } },
//     { $set: { name: "DONIA" } }
//   );
// }

// start();
///////////////////////////////////////////////////

// async function start() {
//   await User.findByIdAndDelete("6650e685bc182e7551cef654");
// }
// start();

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
