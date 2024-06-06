import { Pool } from 'pg';

export class Database{
  public pool : Pool;

  constructor(){
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || '5432', 10),
    });

    this.connect();
  }

  private connect() {
    this.pool.connect()
      .then(() => {
        console.log("Server connected to database");
      })
      .catch(err => {
        console.error(`Error to connect to database ${err}`)
      });
  }
}