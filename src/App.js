import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'
import { Classes } from './components/Classes'
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

  return (
    <div className={classes.appContainer}>
      <Navbar name={name} />

      {/* Content Section */}
      <Container className={classes.layoutContainer} style={{paddingTop: 12}}>
        {/* Profile */}
        <Profile name={name} setName={setName} />


        {/* Classes */}
        <Classes />
      </Container>


    </div>
  );
}

export default App;
