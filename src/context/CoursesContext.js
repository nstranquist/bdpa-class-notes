import { createContext, useContext, useState } from 'react'
import { coursesData } from '../data/courses.data';
import { nanoid } from 'nanoid'

// Provider Pattern

const initialCoursesState = {
  courses: [],
  setCourses: () => {}
}

const newCourse = {
  id: nanoid(),
  name: 'Math',
  number: 4044,
  score: 98,
}

export const CoursesContext = createContext(initialCoursesState)

export const useCourses = () => useContext(CoursesContext)

const CoursesProvider = ({
  children
}) => {
  const [courses, setCourses] = useState(coursesData)

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
    <CoursesContext.Provider value={{
      courses: courses,
      handleAddCourse,
      handleRemoveCourse,
      handleUpdateCourse
    }}>
      {children}
    </CoursesContext.Provider>
  )
}

export default CoursesProvider