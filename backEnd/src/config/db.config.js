import { Sequelize } from "sequelize";
import { config } from "./env.config.js";

const { host, user, pass, name, dialect, port } = config.db

if (!host || !user || !pass || !name || !dialect || !port) {
    console.error("🔴 Missing database configuration in env.config.js file");
    /* throw new Error 
            Reemplazar el console.error por manejo de errores
        */
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