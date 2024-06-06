import { Server } from './config/server';
import { Database } from './config/database';

const app = new Server();
const database = new Database();
app.start();