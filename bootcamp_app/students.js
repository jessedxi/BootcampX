const { Pool } = require('pg');
const queryValues = []

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));

const queryString = `
SELECT students.id, students.name, cohorts.name as cohort
FROM cohorts
JOIN students ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2`;

const cohortName =process.argv[2];
const limit = process.argv[3] || 5;

const values = [`%${cohortName}%`, limit]

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});
