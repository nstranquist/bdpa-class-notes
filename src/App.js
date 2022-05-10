import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'
import { Container, makeStyles } from '@material-ui/core';

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

  console.log('name:', name)

  return (
    <div className={classes.appContainer}>
      <Navbar name={name} />

      {/* Content Section */}
      <Container className={classes.layoutContainer} style={{paddingTop: 12}}>
        {/* Profile */}
        <Profile name={name} setName={setName} />


        {/* Classes */}

      </Container>


    </div>
  );
}

export default App;
