import { AppBar, Toolbar, Typography,createStyles,makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    center: {
      display: "flex",
      margin: "auto"
    }

  })
);
export default function AppNavbar() {
  let classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.center}>
        <Typography variant="h4">Adote um aluno</Typography>
      </Toolbar>
    </AppBar>
  );
}
