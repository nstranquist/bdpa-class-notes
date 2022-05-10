import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'
import { Classes } from './components/Classes'
import { Container, makeStyles } from '@material-ui/core';
import { CourseForm } from './components/CourseForm';
import CoursesContext from './context/CoursesContext'
import { coursesData } from './data/courses.data';
import { nanoid } from 'nanoid'

const newCourse = {
  id: nanoid(),
  name: 'Math',
  number: 4044,
  score: 98,
}

const useStyles = makeStyles((theme) => ({
  appContainer: {

  },
  layoutContainer: {
    marginTop: '64px'
  }
}))

function App() {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [courses, setCourses] = useState(coursesData)

  const addClass = (newClass) => {
    // update class state
  }

  const handleAddCourse = () => {
    setCourses(previousCourses => ([
      ...previousCourses,
      {
        ...newCourse,
        id: nanoid()
      }
    ]))
  }

  // Remove
  const handleRemoveCourse = (courseId) => {
    setCourses(previousCourses => previousCourses.filter(course => course.id !== courseId))
  }

  // Update
  const handleUpdateCourse = (courseId, newCourseName) => {
    setCourses(previousCourses => {
      const index = previousCourses.findIndex(course => course.id === courseId)
      if(index === -1) {
        alert("Course not found")
        return previousCourses;
      }
      return [
        ...previousCourses.slice(0, index),
        {
          ...previousCourses[index],
          name: newCourseName // UPDATING THE NAME
        },
        ...previousCourses.slice(index + 1)
      ]
    })
  }

  const handleUpdateCourseVersion2 = (courseId, newCourseName) => {
    setCourses(previousCourses => previousCourses.map(course => {
      if(course.id === courseId) {
        return {
          ...course,
          name: newCourseName
        }
      }
      return course;
    }))
  }

  return (
    <div className={classes.appContainer}>
      <Navbar name={name} />

      {/* Content Section */}
      <CoursesContext.Provider value={{
        courses: courses,
        setCourses: setCourses,
        handleAddCourse,
        handleRemoveCourse,
        handleUpdateCourse
      }}>
        <Container className={classes.layoutContainer} style={{paddingTop: 12}}>
          {/* Profile */}
          <Profile name={name} setName={setName} />

          {/* Add Class Form */}
          <CourseForm onSubmit={addClass} />

          {/* Classes */}
          <Classes />
        </Container>
      </CoursesContext.Provider>
      
    </div>
  );
}

export default App;
