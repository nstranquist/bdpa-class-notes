import { nanoid } from 'nanoid'

const courseData = {
  id: nanoid(),
  name: 'Math',
  number: 4044,
  score: 98,
}

export const coursesData = [
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