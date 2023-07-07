const { connect } = require("mongoose");
const { DB_HOST } = process.env;

const connectDB = async () => {
  try {
    const db = await connect(DB_HOST);
    console.log(
      `Database is connected. Name:${db.connection.name}. Port:${db.connection.port}. Host:${db.connection.host}`
        .green.italic.bold
    );
  } catch (error) {
    console.log(error.message.red.bold);
  }
};

module.exports = connectDB;
