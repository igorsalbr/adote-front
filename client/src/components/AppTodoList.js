import {
  createStyles,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Checkbox

} from "@material-ui/core";
import { patchTodo } from "../store/actions";
import { useDispatch } from "react-redux";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > *": {
        marginTop: theme.spacing(1),
      },
    },
    item: {
      borderBottom: '1px solid gray',
      margin: '0 40px',
      width: 'auto'
    },
    todoText: {
      textDecoration: 'line-through',
    },

  })
);

export default function AppTodoList({ todosList }) {
  let classes = useStyles();
  let dispatch = useDispatch();
  function completeTask(id, completed){
    console.log(completed)
    dispatch(patchTodo(id, completed))

    
  }
  
  return (
    <List className={classes.root}>
      {todosList.map((item) => (
        <ListItem className={classes.item}>
          <ListItemText primary={item.title} secondary={item.description} className={ item.completed ?  classes.todoText : ''} />
          <Checkbox checked={item.completed} onChange={()=> completeTask(item.id, !item.completed)}></Checkbox>
        </ListItem>
      ))}
    </List>
  );
}
