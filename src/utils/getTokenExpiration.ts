import { jwtDecode } from "jwt-decode";
import type { JwtPayload } from "./checkTokenExp";

export function getTokenExpiration(token: string){
    try {
        const {exp} = jwtDecode<JwtPayload>(token);
        if(!exp) return null;

        return exp * 1000;
    } catch (error) {
        console.error("Failed to decode token: ", error);
        return null;
    }
}