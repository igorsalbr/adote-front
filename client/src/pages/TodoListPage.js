import { createStyles, Fab, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddItemModal from "../components/AddItemModal";
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
    button: {
      width: "100px",
      margin: "50px",

    },
  })
);

export default function TodoListPage() {
  let classes = useStyles();
  let dispatch = useDispatch();
  let todosList = useSelector((state) => Object.values(state.todos.todos));

  // Fetch tasks
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // Hold state for if new item modal is open
  let [addItemModal, setAddItemModal] = useState(false);

  return (
    <div className={classes.root}>
      {todosList.length === 0 && (
        <Typography variant="h6">Venha fazer a diferença no sistema educacional brasileiro!</Typography>
      )}
      <AppTodoList todosList={todosList} />
      <div className={classes.list} >
        <Fab color="default" variant="extended" size="medium" children="Preciso de ajuda!" className={classes.button}  onClick={() => console.log('a fazer')}/>
        <Fab color="primary" variant="extended" size="medium" className={classes.button} onClick={() => setAddItemModal(true)}>
        Quero ser monitor!
      </Fab>
      </div>
      {addItemModal && <AddItemModal onClose={() => setAddItemModal(false)} />}
    </div>
  );
}
