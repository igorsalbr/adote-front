import { createStyles, Fab, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddAlunoModal from "../components/AddAlunoModal";
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
  let dispatch = useDispatch();
  let todosList = useSelector((state) => Object.values(state.todos.todos));

  // Fetch tasks
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // Hold state for if new item modal is open
  let [addAlunoModal, setAddAlunoModal] = useState(false);

  return (
    <div className={classes.root}>
      {todosList.length === 0 && (
        <Typography variant="h6">Como funcionamos aluno + form</Typography>
      )}
      <AppTodoList todosList={todosList} />
      <div className={classes.list} >
  
      </div>
      <Fab color="primary" variant="extended" size="medium" onClick={() => setAddAlunoModal(true)} className={classes.button}>
        Quero ser aluno!
        </Fab>
        
     
      {addAlunoModal && <AddAlunoModal onClose={() => setAddAlunoModal(false)} />}
    </div>
  );
}
