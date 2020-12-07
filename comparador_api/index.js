import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import router from "./routes/";
const database = require("./config/database");
import {} from "dotenv/config";

//coneccion a la base de datos
database.connectDatabase();

const app = express();

//gestiono peticiones remotas
app.use(cors());

//muestra peticiones http en la consola
app.use(morgan("dev"));

//permito que el servidor reciba peticiones JSON a traves de post
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//configurando direccion de archivos estaticos publicos
app.use(express.static(path.join(__dirname, "public")));

//rutas
app.use("/api", router);

//asigno puerto por defecto del sistema, o en su defecto el puerto 4000
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"));
});
