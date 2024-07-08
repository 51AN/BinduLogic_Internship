import jwt, {JwtPayload} from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;
    
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token has been provided.' });
    }
    const secret = process.env.SECRET;
    if (!secret) {
        return res.status(500).json({ message: 'Internal server error. Secret not set.' });
    }

    try {
        const decodedToken = jwt.verify(token, secret) as jwt.JwtPayload;
        req.user = decodedToken;
        next(); 
    } catch (error) {
        res.status(403).json({ message: 'Token invalid.' });
    }
}   