import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function AppNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Adote um aluno</Typography>
      </Toolbar>
    </AppBar>
  );
}
