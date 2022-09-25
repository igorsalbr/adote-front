import { createStyles, Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import AddMonitorModal from "../components/AddMonitorModal";
import AddAlunoModal from '../components/AddAlunoModal'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 900,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: '10px',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
    },
    list: {
      position: 'fixed',
      bottom:'0',
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      float: "bottom",
    },
    button: {
      margin: "50px",
      backgroundColor:" #efd301 ",
      width: '400px'

    },
     button2: {
      width: "400px",
      margin: "50px",
      backgroundColor:"#3d57a6",
      color: "white",
      '&:hover':{
         color:"black"
      },

    },
    card: {
      paddingTop: "100px",
      paddingRight: "50px",
      paddingLeft: "50px",
      alignItems: "center",
      alignContent: "center",
      textAlign: 'left',
      width: '90vw',
      

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
      <div className={classes.list} >

        <Typography variant="h6"><b>Quem somos</b></Typography>

        <Typography variant="body1">Somos um projeto educacional sem fins lucrativos criado por alunos da USP com o objetivo de suprir a falta de suporte que alguns alunos enfrentaram durante a pandemia</Typography>
        
        <Typography variant="h6"><b>Objetivo</b></Typography>

        <Typography variant="body1">Somos um projeto educacional sem fins lucrativos criado por alunos da USP com o objetivo de suprir a falta de suporte que alguns alunos enfrentaram durante a pandemia</Typography>

        <Typography variant="h6"><b>Parcerias</b></Typography>

        <Typography variant="body1">Resist neném</Typography>
       </div>


      </div>

        <Button color="default" variant="extended" size="medium" onClick={() => setAddAlunoModal(true)}   className={classes.button}>
        Quero ser aluno!
        </Button>
        <Button  variant="extended" size="medium" onClick={() => setAddMonitorModal(true)} className={classes.button2}>
        Quero ser monitor!
        </Button>
        

      {addMonitorModal && <AddMonitorModal onClose={() => setAddMonitorModal(false)} />}
      {addAlunoModal && <AddAlunoModal onClose={() => setAddAlunoModal(false)} />}
    </div>
  );
}
