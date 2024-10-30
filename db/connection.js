const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'employeeTracker_db',
  password: '',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to the employeeTracker_db database.'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
