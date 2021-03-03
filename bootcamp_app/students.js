const { Pool } = require('pg');
const queryValues = []
queryValues[0] = process.argv[2];
queryValues[1] = Number(process.argv[3]);

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

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM cohorts
JOIN students ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${queryValues[0]}%'
LIMIT ${queryValues[1]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});
