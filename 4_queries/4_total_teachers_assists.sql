SELECT teachers.name as teacher, cohorts.name as cohort, COUNT(assistance_requests.id) as total_assistances
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id AND cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY teacher;