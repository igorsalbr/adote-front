import { createStyles, Button, makeStyles, Typography, ButtonGroup } from "@material-ui/core";
import { useState } from "react";
import AddMonitorModal from "../components/AddMonitorModal";
import AddAlunoModal from '../components/AddAlunoModal'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: '90%',
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: '10px',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      textAlign:'left'
    },
    card: {
      paddingTop: "100px",
      alignItems: "center",
      alignContent: "center",
      textAlign: 'left',
      width: '90vw',
      

    },
    title: {
      paddingBottom:"20px",
      paddingLeft:'20px',
      display: "flex",
      flexDirection: "column",
    },
    titleOut: {
      paddingTop: "20px",
      paddingBottom:"20px",
      paddingLeft:'20px',



    }, 
    button: {
      position: 'fixed',
      bottom:'0',
      right:'0',
      width:'50%',
      height:'5%',
      backgroundColor:'#efd301',
      color:'black' ,
      '&:hover':{
        backgroundColor:"  #3d57a6 ",
      color:'white' ,
      },


    },
    button2: {
      position: 'fixed',
      bottom:'0',
      left:'0',
      width:'50%',
      height:'5%',
      backgroundColor:'#efd301',
      color:'black' ,
      '&:hover':{
        backgroundColor:"#3d57a6",
      color:'white' ,
      },


    },
   
    
  })
);

export default function Home() {
  let classes = useStyles();
  let [addMonitorModal, setAddMonitorModal] = useState(false);
  let [addAlunoModal, setAddAlunoModal] = useState(false);

  

  // Hold state for if new Monitor modal is open

  return (
    <div className={classes.root}>
      <div className={classes.card}>
      <div className={classes.title} >

        <Typography variant="h6" className={classes.titleOut}><b>Quem somos</b></Typography>

        <Typography variant="body1"  className={classes.titleOut}>Somos um projeto educacional sem fins lucrativos criado por alunos da USP com o objetivo de suprir a falta de suporte que alguns alunos enfrentaram durante a pandemia</Typography>
        
        <Typography variant="h6"  className={classes.titleOut}><b>monitores pic</b></Typography>

        <Typography variant="h6"  className={classes.titleOut}><b>Objetivo</b></Typography>

        <Typography variant="body1"  className={classes.titleOut}>Somos um projeto educacional sem fins lucrativos criado por alunos da USP com o objetivo de suprir a falta de suporte que alguns alunos enfrentaram durante a pandemia</Typography>

        <Typography variant="h6" className={classes.titleOut}><b>Parcerias</b></Typography>

        <Typography variant="body1" className={classes.titleOut}>Resist enem</Typography>
       </div>


      </div>
       
       <ButtonGroup >
        <Button onClick={() => setAddAlunoModal(true)}   className={classes.button2}>
        {window && window.innerWidth>700  ? 'Quero ser aluno!': 'Ser aluno'}
        </Button>
        <Button onClick={() => setAddMonitorModal(true)} className={classes.button}>
        {window && window.innerWidth>700  ? 'Quero ser monitor!': 'Ser monitor'}
        </Button>
        </ButtonGroup>

      {addMonitorModal && <AddMonitorModal onClose={() => setAddMonitorModal(false)} />}
      {addAlunoModal && <AddAlunoModal onClose={() => setAddAlunoModal(false)} />}
    </div>
  );
}
