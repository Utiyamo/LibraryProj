import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, jwtSecret, (err : any, user : any) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export default authenticateJWT;