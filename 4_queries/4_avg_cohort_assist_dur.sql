SELECT cohorts.name as name, AVG(assistance_requests.completed_at - assistance_requests.started_at) as average_assistance_request_duration
FROM assistance_requests 
JOIN students on students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY AVG(assistance_requests.completed_at - assistance_requests.started_at);