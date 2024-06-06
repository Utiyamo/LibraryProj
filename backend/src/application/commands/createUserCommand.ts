import { Pool } from 'pg';

class CreateUserCommand {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async execute(user: any) {
    const { name, email, password } = user;
    const result = await this.pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result.rows[0];
  }
}

export default CreateUserCommand;