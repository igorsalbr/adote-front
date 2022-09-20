import { createStyles, Fab, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddAlunoModal from "../components/AddAlunoModal";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 900,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop:"20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
    },
    list: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      

    },
    link:{
      textDecoration:"none"
    },
    button: {
      width: "100px",
      margin: "50px",
      backgroundColor:" #efd301 ",
      color:'black'


    },
  })
);

export default function Aluno() {
  let classes = useStyles();


  // Hold state for if new item modal is open
  let [addAlunoModal, setAddAlunoModal] = useState(false);

  return (
    <div className={classes.root}>
        <Typography variant="subtitle1">&nbsp;&nbsp;Ao se tornar aluno adote, você entrará em um grupo no whatsapp com 
        diversos alunos e alguns monitores. Nós funcionamos como um grupo de dúvidas, não damos aula ou cobramos
        presença e não temos provas. No grupo você pode tirar todo tipo de dúvida que quiser, desde vivência na 
        universidade até métodos de estudo, <b>mas focamos em tirar suas dúvidas de exatas para os vestibulares.</b>
        </Typography>
        <hr></hr>
        <Typography variant="subtitle1">&nbsp;&nbsp;Você pode enviar as suas dúvidas a hora que quiser no grupo e, assim que um
        monitor estiver disponível ele irá te atender! 
        </Typography>
        <div></div>
        <></>
      <div className={classes.list} >
  
      </div>
      <Fab color="primary" variant="extended" size="medium" onClick={() => setAddAlunoModal(true)} className={classes.button}>
        Quero ser aluno!
        </Fab>
        
     
      {addAlunoModal && <AddAlunoModal onClose={() => setAddAlunoModal(false)} />}
    </div>
  );
}
