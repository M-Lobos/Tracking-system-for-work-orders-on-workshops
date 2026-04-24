import { CustomError } from "./CustomError.js";

export class InternalServerError extends CustomError {
    constructor(message, status, details){
        super(
            message || "🔴 An internal server error just ocurred",
            status || 500,
            details || "Well...something went wrong, obviously"
        )
    }
};

