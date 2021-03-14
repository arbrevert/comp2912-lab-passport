# comp2912-lab-passport

## task1
* status - done
* user id
  * local user should use lower id (1 - 1,000,000)
  * user from github has id = 1,000,000 + (github profile id)
* use /auth/github for both clicking github login button and github callback

## task2
* status - done
* access point: http://localhost:8000/adminboard (link available in dashbaord page if role is admin)
* if login user role is not `admin`, will redirect to /dashboard, which will show the role.
* use `GET` method to revoke session, not ideal but works.
* manipulating sessionStore works for this senario, it is not a general solution.