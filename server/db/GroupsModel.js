var mongoose = require('mongoose')

var GroupsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  CreatedAt: { type: Date, default: Date.now },
  Pairs: []
})

var Groups = mongoose.model('Groups', GroupsSchema)

module.exports = Groups
