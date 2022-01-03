const { Pool } = require('pg')
const connectionString = 'postgresql://curiousox1:d1V4jU4mTi1CXWLY3vWvvw@pg-serverg.postgres.database.azure.com/nextjs-db?sslmode=require'

export default async function handler(req,res) {
  const pool = new Pool({
    connectionString,
  })
  const { rows } = await pool.query('SELECT name, age FROM people')
  pool.end()
  console.log('rows', rows)
  console.log('rows[0].name', rows[0].name)
  res.status(200).json({name: rows[0].name})
}
