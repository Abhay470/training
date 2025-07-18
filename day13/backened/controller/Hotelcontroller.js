// controllers/hotelController.js

const { getHotels, addHotel } = require('../config/db');
const { sendSuccess, sendError } = require('../utils/response');

exports.getAllHotels = (req, res) => {
  const hotels = getHotels();
  return sendSuccess(res, hotels);
};

exports.createHotel = (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return sendError(res, 'Name and location are required');
  }
  const hotel = { id: Date.now(), name, location };
  addHotel(hotel);
  return sendSuccess(res, hotel, 201);
};
