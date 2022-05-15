import { Button, TextField } from "@material-ui/core"
import { useState } from 'react'
import { useCourses } from "../context/CoursesContext"

const emptyCourse = {
  name: '',
  number: 0,
  score: 100
}

export const CourseForm = () => {
  const [formData, setFormData] = useState(emptyCourse)
  const { handleAddCourse } = useCourses()

  const handleChange = (e) => {
    // e.target.name
    setFormData((previousFormData) => ({
      ...previousFormData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={formData.name} onChange={handleChange} name="name" margin="normal" fullWidth />
      <TextField type="number" value={formData.number} onChange={handleChange} name="number" margin="normal" fullWidth />
      <TextField type="number" value={formData.score} onChange={handleChange} name="score" margin="normal" fullWidth />
      <Button type="submit">Add</Button>
    </form>
  )
}