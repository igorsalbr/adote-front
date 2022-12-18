import {
    createStyles,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Checkbox,
    Typography,
    Button,
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
  
  export default function ShowResult({ todosList, title}) {
    let classes = useStyles();
  
    
    return (
      <List className={classes.root}>
        <Typography variant="h5">{title}</Typography>
        {todosList.length === 0 && (
        <Typography variant="h6">Nenhum lead</Typography>
      )}
        {todosList.map((item) => (
          <ListItem key={item.id} className={classes.item}>
            <ListItemText primary={item.nome} className={ ''} />
            <ListItemText primary={item.numero} className={ ''} />
            <ListItemText primary={item.experiencia ? item.experiencia : item.objetivo} className={ item ?  classes.todoText : ''} />
        
          </ListItem>
        ))}
      </List>
    );
  }
  