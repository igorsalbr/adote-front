import { createStyles, Fab, makeStyles, Typography, Card } from "@material-ui/core";
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
      width: "100px",
      margin: "50px",
      backgroundColor:" #efd301 "
    },
     button2: {
      width: "100px",
      margin: "50px",
      backgroundColor:"#0a5200",
      color: "white",
      '&:hover':{
         color:"black"
      },

    },
    card: {
      paddingTop: "100px",
      paddingRight: "50px",
      paddingLeft: "50px",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      alignItems: "center",
      alignContent: "center",
      textAlign: 'center',
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
      <Card className={classes.card}>

        <Typography variant="h6"><b>Quem somos</b></Typography>

        <Typography variant="overline">Somos um projeto educacional sem fins lucrativos criado por alunos da USP com o objetivo de suprir a falta de suporte que alguns alunos enfrentaram durante a pandemia</Typography>
        
        <Typography variant="h6"><b>Objetivo</b></Typography>

        <Typography variant="overline">Somos um projeto educacional sem fins lucrativos criado por alunos da USP com o objetivo de suprir a falta de suporte que alguns alunos enfrentaram durante a pandemia</Typography>

        <Typography variant="h6"><b>Parcerias</b></Typography>

        <Typography variant="overline">Resist neném</Typography>
       </Card>


      <div className={classes.list} >
        
        <Fab color="default" variant="extended" size="medium" onClick={() => setAddAlunoModal(true)}   className={classes.button}>
        Quero ser aluno!
        </Fab>
        <Fab  variant="extended" size="medium" onClick={() => setAddMonitorModal(true)} className={classes.button2}>
        Quero ser monitor!
        </Fab>
        
      </div>

      {addMonitorModal && <AddMonitorModal onClose={() => setAddMonitorModal(false)} />}
      {addAlunoModal && <AddAlunoModal onClose={() => setAddAlunoModal(false)} />}
    </div>
  );
}
