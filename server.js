const app = require("./app");
require("colors");

const { connectDB } = require("./config");

const { PORT } = process.env;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`.blue.bold);
    });
  })
  .catch((error) => {
    console.log(error.message.red.bold);
    process.exit(1);
  });
