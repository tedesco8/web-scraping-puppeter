import mongoose from 'mongoose';

function connectDatabase() {
  mongoose.Promise = global.Promise;
  const dbUrlDev = `mongodb+srv://${process.env.USR_DB}:${process.env.PSW_DB}@cluster0-kzisw.gcp.mongodb.net/db-comparador?retryWrites=true&w=majority`;
  let dbConnect = "";

  process.env.NODE_ENV = process.env.NODE_ENV || "dev";
  if (process.env.NODE_ENV == "dev") {
    dbConnect = dbUrlDev;
  } else {
    dbConnect = dbUrlDev;
  }

  mongoose
    .connect(dbConnect, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((mongoose) => console.log("Conectado a la base de datos"))
    .catch((err) => console.log(err));
}

module.exports = {
    connectDatabase,
  };
