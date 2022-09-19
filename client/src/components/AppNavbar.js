import { AppBar, Toolbar, Typography,createStyles,makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) =>
  createStyles({
    center: {
      display: "flex",
      margin: "auto"
    }, 
    link: {
      textDecoration:'none',
      color:'white'
    }

  })
);
export default function AppNavbar() {
  let classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.center}>
        <Link className={classes.link} to={'/'}>
        <Typography variant="h4">Adote um aluno</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
