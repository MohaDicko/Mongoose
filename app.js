const mongoose = require("mongoose");
require("dotenv").config();

// console.log(process.env.MONGO_URI)
const Person = require("./models/Person");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connexion MongoDB OK"))
  .catch((err) => console.error("Une erreur est survenue => .", err));

// création d'une instance et sa sauvegarde
// const NewPerson = new Person({
//   name: "John",
//   age: 25,
//   favoriteFoods: ["Pizza", "Pasta"],
// });

// NewPerson.save().then(()=> {
//     console.log("Sauvegarde OK")
// });

// instruction 2 : creation de plusieurs documents

// const arrayOfPeople = [
//   {
//     name: "MDicko1",
//     age: 25,
//     favoriteFoods: ["Pizza", "Pasta" , "burritos"],
//   },
//   {
//     name: "MBen1",
//     age: 22,
//     favoriteFoods: ["Tajine", "Rfissa" , "burritos"],
//   },
//   {
//     name: "ASou1",
//     age: 40,
//     favoriteFoods: ["Couscous", "Chwaya" , "burritos"],
//   },
// ];

// Person.create(arrayOfPeople).then((data)=> {
//     console.log("Documents crées", data)
// }).catch((err) => console.error("Une erreur est survenue => .", err));

//Instruction 3 : Use model.find() to Search Your Database Find all the people having a given name, using Model.find() -> [Person]

// Person.find({ name: { $exists: true } })
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Une erreur est survenue => .", err));

// Instruction 4 Find just one person which has a certain food in the person's favorites, using Model.findOne() -> Person.
//  Use the function argument food as a search key.

// const food = 'Tajine'
// Person.findOne({favoriteFoods : food})
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Une erreur est survenue => .", err));

//instruction 5
// const PersonId = '6655d30d12bd9582495c4839'
// Person.findById(PersonId)
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Une erreur est survenue => .", err));

//instruction 6
// const PersonId = "6655d30d12bd9582495c4839";
// Person.findById(PersonId)
//   .then((data) => {
//     data.favoriteFoods.push("Hamburger");
//     data.save().then((modif) => {
//       console.log("Document modifié", modif);
//     });
//   })
//   .catch((err) => console.error("Une erreur est survenue => .", err));

// instruction 7
// const PersonName = 'John'
// Person.findOneAndUpdate({ name: PersonName }, {age : 20}, {new : true})
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Une erreur est survenue => .", err));

//Instruction 8
// const PersonId = "6655d30d12bd9582495c4839";
// Person.findOneAndDelete(PersonId)
// .then((data) => console.log('Deleted' , data))
// .catch((err) => console.error("Une erreur est survenue => .", err));

// instruction 9
// Person.deleteMany({name : 'Mary'})
// .then((data) => console.log('Deleted' , data))
// .catch((err) => console.error("Une erreur est survenue => .", err));

// instruction 10

// Person.find({ favoriteFoods: "burritos" })
//   .sort("name")
//   .limit(2)
//   .select("-age")
//   .exec()
//   .then((d) => console.log(d))
//   .catch((e) => console.error(e));
