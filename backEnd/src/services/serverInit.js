
export const serverInit = async(app , PORT) => {
    try {
        // await para la dbConnection que viene de sercices y que consumirá la db.config desde config
        app.listen(PORT, ()=>{
            console.log("   Starting Server");
            console.log(`🟢 Server running at port ${PORT}`)
        })
    } catch (error) {
        console.error("🔴 Error conecting to server", error)
    }
}