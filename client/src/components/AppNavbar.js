import { AppBar, Toolbar, Typography,createStyles,makeStyles } from "@material-ui/core";
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
      flexDirection:'row',
      justifyContent:'center'
    }, 
    link: {
      textDecoration:'none',
      color:"white",
      whiteSpace:"nowrap",
      paddingBottom:'5px'
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
      backgroundColor:"#3d57a6",
      position: 'fixed',
      
    },
    cellink1:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      color:"white",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft: "auto",
      textJustify:'center',

    '&:hover': {
       color: " #fffd33",
    },

      
    },
    cellink2:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft:'20px',
      marginRight:'20px',
      color:"white",
      textJustify:'center',

    '&:hover': {
       color: " #fffd33",
    }

      
    },

    celyellowlink1:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      color:" #fffd9d",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft: "auto",
      textJustify:'center',

      '&:hover': {
        color: " #fffd33",
     },
   
      
    },
    celyellowlink2:{
      textDecoration:"none",
      height: "fit-content",
      width:"fit-content",
      marginTop: "auto",
      marginBottom: 'auto',
      marginLeft:'20px',
      marginRight:'20px',
      color:"#fffd9d",
      textJustify:'center',
      '&:hover': {
        color: " #fffd33",
     },
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
  console.log(window.innerWidth )
 
  if (window && window.innerWidth > 700) { 
    return(
      <AppBar className={classes.nav} position="static">
    <div className={classes.container}>
    <Toolbar className={classes.center}>
      <Link className={classes.link} to={'/'} onClick={()=> setYellow('home')}>
      <Typography variant="h4">Adote um aluno</Typography>
      </Link>
      

    </Toolbar>
    
    <Link className={yellow === 'aluno' ? classes.yellowlink1 : classes.link1} onClick={()=> setYellow('aluno')} to='/quero-ser-aluno'><Typography variant="button">Sobre ser aluno</Typography></Link>
    <Link className={yellow === 'monitor' ? classes.yellowlink2 : classes.link2} onClick={()=> setYellow('monitor')}  to='/quero-ser-monitor'><Typography variant="button">Sobre ser monitor</Typography></Link>
    </div>
  </AppBar>) } 
  else {
  return (
     <AppBar className={classes.nav} position="static">
    <div className={classes.container}>
    <Toolbar className={classes.center}>
      <Link className={classes.link} to={'/'} onClick={()=> setYellow('home')}>
      <Typography variant="h5">Adote</Typography>
      </Link>
      

    </Toolbar>
    
    <Link className={yellow === 'aluno' ? classes.celyellowlink1 : classes.cellink1} onClick={()=> setYellow('aluno')} to='/quero-ser-aluno'><Typography variant="button">aluno</Typography></Link>
    <Link className={yellow === 'monitor' ? classes.celyellowlink2 : classes.cellink2} onClick={()=> setYellow('monitor')}  to='/quero-ser-monitor'><Typography variant="button">monitor</Typography></Link>
    </div>
    </AppBar>
    
  )};
}
