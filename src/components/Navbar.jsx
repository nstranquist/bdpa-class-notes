import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))

export const Navbar = ({
  name
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar position="static">
          <div style={{marginRight: 8}}>
            {/* <img src={logo} color="#fff" className="App-logo" alt="logo" style={{color:'#fff'}} /> */}
          </div>
          <Typography variant="h6" component="h1" className={classes.title}>Student Classes Tracker</Typography>
          <Typography variant="h6" component="p">Welcome, {name}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}