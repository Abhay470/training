// utils/response.js

exports.sendSuccess = (res, data, status = 200) => {
  return res.status(status).json({ success: true, data });
};

exports.sendError = (res, message, status = 400) => {
  return res.status(status).json({ success: false, error: message });
};
