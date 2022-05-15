import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import { useCourses } from "../context/CoursesContext"


export const Classes = () => {
  const { courses, handleAddCourse, handleRemoveCourse, handleUpdateCourse } = useCourses()

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