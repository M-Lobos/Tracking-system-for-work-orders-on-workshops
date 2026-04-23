import { dbConfig } from "../config/db.config.js";
// import {models} from "" esto para cuando los modelos estén definidos

export const connectingDb = async() => {
    try {
        await dbConfig.authenticate(); 
        /* console.log(" 🟨 Initialing models and associations... ⏳");
            models <-- instancia modelos
            console.log(" ✅ Models and associations initialized!"); */
            await dbConfig.sync({alter: true}); //permite y sincroniza modificaciones en tablas de la DB
    } catch (error) {
        console.error(" 🟥 Unable to connect to the DB, authentication error",error)
        /* throw new Error 
            Reemplazar el console.error por manejo de errores
        */
    }
}