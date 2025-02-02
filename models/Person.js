const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});


const Person = mongoose.model('Person', PersonSchema)

module.exports = Person
