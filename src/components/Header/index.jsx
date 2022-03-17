import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title}>Travel Advisor</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
