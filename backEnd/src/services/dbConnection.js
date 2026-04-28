import { dbConfig } from "../config/db.config.js";
import { InternalServerError } from "../errors/ErrorType.js";
// import {models} from "" esto para cuando los modelos estén definidos

export const connectingDb = async() => {
    try {
        await dbConfig.authenticate(); 
        /* console.log(" 🟨 Initialing models and associations... ⏳");
            models <-- instancia modelos
            console.log(" ✅ Models and associations initialized!"); */
        await dbConfig.sync({alter: true}); //permite y sincroniza modificaciones en tablas de la DB
    } catch (error) {
        // Si el error viene de Sequelize (malas credenciales)
        if (error.name === 'SequelizeConnectionRefusedError' || error.name === 'SequelizeAccessDeniedError') {
            throw new InternalServerError("🚫 Database credentials are incorrect. Check your .env values.", 500, error);
        }
        
        throw new InternalServerError("🔴 Unable to connect to the DB, authentication error", 500 , error );

    }
}