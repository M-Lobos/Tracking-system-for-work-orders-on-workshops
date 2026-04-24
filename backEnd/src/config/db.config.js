import { Sequelize } from "sequelize";
import { config } from "./env.config.js";
import { InternalServerError } from "../errors/ErrorType.js";

const { host, user, pass, name, dialect, port } = config.db

if (!host || !user || !pass || !name || !dialect || !port) {
    //It only watches that env var dont come empty, toss down the app it they are empty
    throw new InternalServerError("🔴 Missing a env variable in database configuration, check your env values.");
}

export const dbConfig = new Sequelize(
    name,
    user,
    pass,
    {
        host,
        dialect,
        port,
        logging: console.log()
    }
)