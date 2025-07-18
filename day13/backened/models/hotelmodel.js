// models/hotelModel.js

// In real apps, you'd use Mongoose or Sequelize here.
class Hotel {
  constructor(id, name, location) {
    this.id = id;
    this.name = name;
    this.location = location;
  }
}

module.exports = Hotel;
