import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import { nanoid } from 'nanoid'
import { useState } from 'react'

const courseData = {
  id: nanoid(),
  name: 'Math',
  number: 4044,
  score: 98,
}

const coursesData = [
  {...courseData},
  {
    id: nanoid(),
    name: 'English',
    number: 202,
    score: 65
  },
  {
    id: nanoid(),
    name: 'Science',
    number: 204,
    score: 80
  }
]

export const Classes = () => {
  const [courses, setCourses] = useState(coursesData)

  return (
    <Box style={{marginTop: 30}}>
      {/* Courses Heading */}
      <Typography variant="h4" component="h3">Courses</Typography>

      {/* 'Add Course' Button */}
      <Button>Add Course</Button>

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
              <Button>Remove</Button>
              <Button>Edit</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}