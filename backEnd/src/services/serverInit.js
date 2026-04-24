import { connectingDb } from "./dbConnection.js";
import { InternalServerError } from "../errors/ErrorType.js";

export const serverInit = async(app , PORT) => {
    try {
        console.log("🟡 Verifying connection to DB...")
        await connectingDb()

        app.listen(PORT, ()=>{
            console.log("   Starting Server");
            console.log(`🟢 Server running at port ${PORT}`)
        })
    } catch (error) {
        console.error("🔴", error);
    }
}