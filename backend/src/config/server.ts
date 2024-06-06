import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import router from '../interfaces/controllers/index';

export class Server{
  public app : express.Application;
  public port: Number | string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || 3000;
  }

  private middleware() {
    this.app.use(bodyParser.json());
    this.app.use(express.urlencoded({ extended: false}));
    this.app.use(cookieParser());
    this.app.use(cors({
      credentials: true,
      allowedHeaders: [ 'content-type'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      origin: (request : any): boolean => {
        const origin = request?.headers.get('origin');

        if(!origin)
          return false;

        return true;
      }
    }));
  }

  private routes(){
    this.app.use('/api', router);
  }

  start(){
    this.app.listen(this.port, () => {
      console.log(`This server is running on port ${this.port}`);
    })
  }
}