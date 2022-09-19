import { createStyles, Fab, makeStyles, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
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
      width: "100%",
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
        <Typography variant="h6">Add an item to get started</Typography>
      )}
      <AppTodoList todosList={todosList} />
      <Fab color="primary" onClick={() => setAddItemModal(true)}>
        <Add />
      </Fab>
      {addItemModal && <AddItemModal onClose={() => setAddItemModal(false)} />}
    </div>
  );
}
