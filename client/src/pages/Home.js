import { createStyles, Fab, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddMonitorModal from "../components/AddMonitorModal";
import AddAlunoModal from '../components/AddAlunoModal'
import { getTodos } from "../store/actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 900,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: '15px',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
    },
    list: {
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
    
  })
);

export default function Home() {
  let classes = useStyles();
  let dispatch = useDispatch();
  let [addMonitorModal, setAddMonitorModal] = useState(false);
  let [addAlunoModal, setAddAlunoModal] = useState(false);

  // Fetch tasks
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // Hold state for if new Monitor modal is open

  return (
    <div className={classes.root}>
        <Typography variant="h6"><b>Quem somos</b></Typography>

        <Typography variant="overline">Somos um projeto educacional sem fins lucrativos criado por alunos da USP com o objetivo de suprir a falta de suporte que alguns alunos enfrentaram durante a pandemia</Typography>
        
        <Typography variant="h6"><b>Objetivo</b></Typography>

        <Typography variant="overline">Somos um projeto educacional sem fins lucrativos criado por alunos da USP com o objetivo de suprir a falta de suporte que alguns alunos enfrentaram durante a pandemia</Typography>

        <Typography variant="h6"><b>Parcerias</b></Typography>

        <Typography variant="overline">Resist neném</Typography>

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
