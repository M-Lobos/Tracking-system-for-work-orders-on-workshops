import { connectingDb } from "./dbConnection.js";

export const serverInit = async(app , PORT) => {
    try {
        console.log("🟡 Verifying connection to DB...")
        await connectingDb()

        app.listen(PORT, ()=>{
            console.log("   Starting Server");
            console.log(`🟢 Server running at port ${PORT}`)
        })
    } catch (error) {
        console.error("🔴 Error conecting to server", error)
    }
}