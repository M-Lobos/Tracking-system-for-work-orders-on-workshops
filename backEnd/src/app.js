import express from "express";


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