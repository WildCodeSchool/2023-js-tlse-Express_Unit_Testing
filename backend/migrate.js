require('dotenv').config();

const fs = require('fs');
const mysql = require('mysql2/promise');

const migrate = async () => {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
console.log("--- ",DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'alain',
    password: 're6yaCQv',
    multipleStatements: true,
  });

  await connection.query(`drop database if exists cartes`);
  await connection.query(`create database cartes`);
  await connection.query(`use cartes`);

  const sql = fs.readFileSync('./sql/database.sql', 'utf8');

  await connection.query(sql);

  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}
