import {jwtDecode} from 'jwt-decode'

export interface JwtPayload {
    exp: number;
    [key: string]: any;
}

export function isTokenExpired(token: string): boolean{
    if(!token) return true;

    try {
        const { exp } = jwtDecode<JwtPayload>(token);
        if(!exp) return true;

        //if exp is not expired:
        return Date.now() >= exp * 1000
        
    } catch (error) {
        console.error("Failed to decode token:", error)
        return true;
    }
}