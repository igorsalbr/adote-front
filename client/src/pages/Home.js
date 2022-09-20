import { createStyles, Fab, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddMonitorModal from "../components/AddMonitorModal";
import AddAlunoModal from '../components/AddAlunoModal'
import AppTodoList from "../components/AppTodoList";
import { getTodos } from "../store/actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 900,
      marginLeft: "auto",
      marginRight: "auto",
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
    },
  })
);

export default function Home() {
  let classes = useStyles();
  let dispatch = useDispatch();
  let todosList = useSelector((state) => Object.values(state.todos.todos));
  let [addMonitorModal, setAddMonitorModal] = useState(false);
  let [addAlunoModal, setAddAlunoModal] = useState(false);

  // Fetch tasks
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // Hold state for if new Monitor modal is open

  return (
    <div className={classes.root}>
      {todosList.length === 0 && (
        <Typography variant="h6">Venha fazer a diferença no sistema educacional brasileiro!</Typography>
      )}
      <AppTodoList todosList={todosList} />
      <div className={classes.list} >
        
        <Fab color="default" variant="extended" size="medium" onClick={() => setAddAlunoModal(true)}   className={classes.button}>
        Quero ser aluno!
        </Fab>
        <Fab color="primary" variant="extended" size="medium" onClick={() => setAddMonitorModal(true)} className={classes.button2}>
        Quero ser monitor!
        </Fab>
        
      </div>
      {addMonitorModal && <AddMonitorModal onClose={() => setAddMonitorModal(false)} />}
      {addAlunoModal && <AddAlunoModal onClose={() => setAddAlunoModal(false)} />}
     
    </div>
  );
}
