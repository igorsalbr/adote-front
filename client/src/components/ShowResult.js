import {
    createStyles,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Checkbox,
    Typography
  
  } from "@material-ui/core";
  import { useDispatch } from "react-redux";
  
  
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        width: "100%",
        textAlign:'center',
        "& > *": {
          marginTop: theme.spacing(1),
        },
      },
      item: {
        borderBottom: '1px solid gray',
        margin: '0 40px',
        width: 'auto',
        minWidth: '250px'
      },
      todoText: {
        textDecoration: 'line-through',
      },
    
  
    })
  );
  
  export default function ShowResult({ todosList, patchFunc, title, update, setUpdate}) {
    let classes = useStyles();
    let dispatch = useDispatch();
    function completeTask(id, info){
      setUpdate(!update)     
      dispatch(patchFunc(id, info)) 
    }
    
    return (
      <List className={classes.root}>
        <Typography variant="h5">{title}</Typography>
        {todosList.length === 0 && (
        <Typography variant="h6">Nenhum lead</Typography>
      )}
        {todosList.map((item) => (
          <ListItem key={item.id} className={classes.item}>
            <ListItemText primary={item.name} className={ item.info ?  classes.todoText : ''} />
            <ListItemText primary={item.numero} className={ item.info ?  classes.todoText : ''} />
            <ListItemText primary={item.exp ? item.exp : item.obj} className={ item.info ?  classes.todoText : ''} />
            <Checkbox checked={item.info} onChange={()=> completeTask(item.id, !item.info)}></Checkbox>
          </ListItem>
        ))}
      </List>
    );
  }
  