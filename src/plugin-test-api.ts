import { Pool } from 'pg'

const pg = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
  max: 3
})

export class TestAPI {

  async method(): Promise<{ id: number, m_name: string, m_mail: string }> {

    const connect = await pg.connect()

    await connect.query(`
      CREATE TABLE members (
        id      SERIAL PRIMARY KEY,
        m_name  text NOT NULL,
        m_mail  text NOT NULL
      );
    `)
    await connect.query(`
      insert into members (m_name, m_mail) values ('nnn', 'mmm')
    `)
    const res = await connect.query(`
      select * from members
    `)

    connect.release(true)

    return res.rows[0];
  }

}
