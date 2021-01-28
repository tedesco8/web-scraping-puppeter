import mongoose from 'mongoose';

function connectDatabase() {
  mongoose.Promise = global.Promise;
  const dbUrlPro = `mongodb://${process.env.USR_DB_VPS}:${process.env.PWD_DB_VPS}@${process.env.HOST_VPS}:${process.env.PORT_VPS_MONGO}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
  let dbConnect = "";

  process.env.NODE_ENV = process.env.NODE_ENV || "dev";
  if (process.env.NODE_ENV == "dev") {
    dbConnect = dbUrlPro;
  } else {
    dbConnect = dbUrlPro;
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
