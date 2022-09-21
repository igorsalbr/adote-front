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
      height: "10vh",
      gap:'50px'
    },
    container: {
      display:'flex',
      flexDirection:'row'
    }, 
    link: {
      textDecoration:'none',
      color:"white",
      whiteSpace:"nowrap"
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
       color: " #fffd33",
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
       color: " #fffd33",
    }

      
    },
    logo:{
      height:'150px',
      width:'150px',
      margin:'auto'
    },

    yellowlink1:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      color:" #fffd9d",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft: "auto",
      '&:hover': {
        color: " #fffd33",
     },
   
      
    },
    yellowlink2:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft:'50px',
      marginRight:'50px',
      color:"#fffd9d",
      '&:hover': {
        color: " #fffd33",
     },
    
    },
    nav:{
      backgroundColor:"#175f00",
      position: 'fixed',
      
    },

  })
);
export default function AppNavbar() {
  let classes = useStyles();
  let [yellow, setYellow] = useState('')

  useEffect(() => {
   const setbtt = window.location.pathname.split('-')[2]
   setYellow(setbtt ? setbtt : 'home')
  }, [yellow])
  
  return (
    <AppBar className={classes.nav} position="static">
      <div className={classes.container}>
      <Toolbar className={classes.center}>
        <Link className={classes.link} to={'/'} onClick={()=> setYellow('home')}>
        <Typography variant="h4">Adote um aluno</Typography>
        </Link>
        

      </Toolbar>
      
      <Link className={yellow === 'aluno' ? classes.yellowlink1 : classes.link1} onClick={()=> setYellow('aluno')} to='/quero-ser-aluno'><Typography variant="button">Como é ser aluno adote?</Typography></Link>
      <Link className={yellow === 'monitor' ? classes.yellowlink2 : classes.link2} onClick={()=> setYellow('monitor')}  to='/quero-ser-monitor'><Typography variant="button">Como é ser monitor adote?</Typography></Link>
      </div>
    </AppBar>
  );
}
