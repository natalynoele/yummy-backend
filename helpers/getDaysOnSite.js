module.exports = (startDate) => {
  const registerDate = new Date(startDate);
  const today = Date.now();
  return Math.round((today - registerDate) / (1000 * 60 * 60 * 24));
};
