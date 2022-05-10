import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import { useContext } from "react"
import CoursesContext from "../context/CoursesContext"


export const Classes = () => {
  const { courses, setCourses, handleAddCourse,
    handleRemoveCourse,
    handleUpdateCourse } = useContext(CoursesContext)

  // Courses Functionality:
  // - Add a new course
  // - Remove a course
  // - Update a course

  // CRUD with array of objects
  // Create
  

  return (
    <Box style={{marginTop: 30}}>
      {/* Courses Heading */}
      <Typography variant="h4" component="h3">Courses</Typography>

      <Button onClick={handleAddCourse}>Add Course</Button>

      {/* List of Courses */}
      <Box style={{marginTop: 20}}>
        {/* Course: Name, Course #, Score/Grade */}
        {courses.map((course) => (
          <Card key={course.id} style={{marginTop: 10, marginBottom: 10, padding: 10}}>
            <CardContent>
              <Typography>Name: {course.name}</Typography>
              <Typography>Course #: {course.number}</Typography>
              <Typography>Score: {course.score}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleRemoveCourse(course.id)}>Remove</Button>
              <Button onClick={() => handleUpdateCourse(course.id, "NO CLASS")}>Edit</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}