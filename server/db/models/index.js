const Ability = require('./ability')
const Character = require('./character')
const Question = require('./question')
const User = require('./user')

User.belongsTo(Character)
Character.hasMany(User)

User.belongsToMany(Ability)
Ability.belongsToMany(User)

Ability.belongsTo(Category)
Category.hasMany(Ability)

Category.hasMany(Question)
Question.belongsTo(Category)

module.exports = {
  Ability,
  Character,
  Question,
  User
}
