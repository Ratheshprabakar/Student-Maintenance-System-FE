## Student Maintanence Application Front End

### Components
- Get a particular student data
- Get grade of a student
- Get aggregate mark of a student
- CRED
  - Add a student
  - Remove a student
  - Update a student

### Back End
Stack : Spring REST, MySQL

### Back End API's Structure

- To Search a Student Data(path variable = id) - `/search/{id}`
- To Insert a Student Data(request body = StudentInfoBean) -  `/add`
- To Remove a Student Data(path variable = id) - `/remove/{id}`
- To Update student Email Address(request body = StudentInfoBean object contains id and email only) - `/update`
- To return Aggregate Marks(path variable = id) - `/getMark/{id}`
- To retrive Grade of the student(path variable = id) - `/getGrade/{id}`

[Source Code](https://github.com/Ratheshprabakar/Student-Maintenance-Application)
