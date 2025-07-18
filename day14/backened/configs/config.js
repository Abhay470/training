// config/db.js

// Simulated DB (in-memory array for simplicity)
let hotels = [];

const getHotels = () => hotels;

const addHotel = (hotel) => {
  hotels.push(hotel);
};

module.exports = { getHotels, addHotel };
