import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'
import { Classes } from './components/Classes'
import { Container, makeStyles } from '@material-ui/core';
import { CourseForm } from './components/CourseForm';
import CoursesProvider from './context/CoursesContext'


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

  return (
    <div className={classes.appContainer}>
      <Navbar name={name} />

      {/* Content Section */}
      <CoursesProvider>
        <Container className={classes.layoutContainer} style={{paddingTop: 12}}>
          {/* Profile */}
          <Profile name={name} setName={setName} />

          {/* Add Class Form */}
          <CourseForm />

          {/* Classes */}
          <Classes />
        </Container>
      </CoursesProvider>
      
    </div>
  );
}

export default App;
