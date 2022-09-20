import { AppBar, Toolbar, Typography,createStyles,makeStyles, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const useStyles = makeStyles((theme) =>
  createStyles({
    center: {
      display: "flex",
      marginTop:'auto',
      marginLeft:'20px',
      marginBottom:'auto',
      marginRight: "auto",
      height: "100px",
      gap:'50px'
    },
    container: {
      display:'flex',
      flexDirection:'row'
    }, 
    link: {
      textDecoration:'none',
    },
    link1:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      color:"white",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft: "auto",
    '&:hover': {
       color: "#efd301",
    },
      
    },
    link2:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft:'50px',
      marginRight:'50px',
      color:"white",
    '&:hover': {
       color: "#efd301",
    }

      
    },
    yellowlink1:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      color:"#efd301",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft: "auto",
   
      
    },
    yellowlink2:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft:'50px',
      marginRight:'50px',
      color:"#efd301",
    
    },

  })
);
export default function AppNavbar() {
  let classes = useStyles();
  let [yellow, setYellow] = useState('')

  useEffect(() => {
   const setbtt = window.location.pathname.split('-')[2]
   setYellow(setbtt)
  }, [yellow])
  
  return (
    <AppBar position="static">
      <div className={classes.container}>
      <Toolbar className={classes.center}>
        <Link className={classes.link} to={'/'}>
        <Avatar variant="rounded" alt='logo' src="/static/images/logo.png"></Avatar>
        </Link>
        <Typography variant="h4">Adote um aluno</Typography>

      </Toolbar>
      
      <Link className={yellow === 'aluno' ? classes.yellowlink1 : classes.link1} onClick={()=> setYellow('aluno')} to='/quero-ser-aluno'><Typography variant="button">Sobre ser aluno</Typography></Link>
      <Link className={yellow === 'monitor' ? classes.yellowlink2 : classes.link2} onClick={()=> setYellow('monitor')}  to='/quero-ser-monitor'><Typography variant="button">Sobre ser monitor</Typography></Link>
      </div>
    </AppBar>
  );
}
