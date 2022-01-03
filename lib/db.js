const { Pool } = require('pg')
const connectionString = 'postgresql://curiousox1:d1V4jU4mTi1CXWLY3vWvvw@pg-serverg.postgres.database.azure.com/nextjs-db?sslmode=require'

export async function db() {
  const pool = new Pool({
    connectionString,
  })
  const { rows } = await pool.query('SELECT * FROM people')
  pool.end()
  return rows
}
