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

  return (
    <div className={classes.appContainer}>
      <Navbar />

      {/* Content Section */}
      <Container className={classes.layoutContainer} style={{paddingTop: 12}}>
        {/* Profile */}
        <Profile />


        {/* Classes */}

      </Container>


    </div>
  );
}

export default App;
