import { createContext } from 'react'

const initialCoursesState = {
  courses: [],
  setCourses: () => {}
}

const CoursesContext = createContext(initialCoursesState)

export default CoursesContext