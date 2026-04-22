import express from "express";
import { config } from "./config/env.config.js"; /* De mientras que no se define el db.config.js
La cadena de sucesos, db.config.js (que demanda el import de config) es invocada luego por dbConnection(pendiente) que
termina por inicializar las variables de entorno, luego, cuando serverInit.js consume dbConnection con las .env inicializadas
llega al archivo de arranque(presente) hace que no sea necesario mantener el import {config} from ... aquí
*/


import { serverInit } from "./services/serverInit.js";

const app = express();
const PORT = process.env.PORT;

//Middlewares for parsing request bodies on json and multiformat
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware to access to resources via browser from another domain
//CORS LIBRARY FOR THIS | app.use(cors());
//MORGAN library as logger to track in detail http request | app.use(morgan('dev'));

//routes centralized endpoint.

serverInit(app, PORT);