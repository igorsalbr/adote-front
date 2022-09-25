import {
    Button,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
    TextField,
  } from "@material-ui/core";
  import { postAluno } from "../store/actions";
  
  
  import { useState } from "react";
  import { useDispatch } from "react-redux";
  
  const useStyles = makeStyles((theme) =>
    createStyles({
      formBody: {
        "& > *": {
          marginTop: theme.spacing(1),
        },
      },
      formTitle: {
        background: 'linear-gradient(45deg, #3d57a6 15%,  #efd301 50%)',
        color: 'white'
      },
    emb:{
      backgroundColor:'#3d57a6',
      color:'white' ,
      '&:hover':{
        backgroundColor:"  #efd301 "
      },}
    })
  );
  
  export default function AddAlunoModal({ onClose }) {
    let classes = useStyles();
    let dispatch = useDispatch();
    let [name, setName]= useState('')
    let [numero, setNumero]= useState('')
    let [obj, setObj]= useState('')
  
    function submitNewItem(e) {
      e.preventDefault();
      dispatch(postAluno(name, numero, obj))
      onClose();
    }
    return (
      <Dialog maxWidth="md" fullWidth open onClose={onClose}>
        <form onSubmit={submitNewItem}>
          <DialogTitle className={classes.formTitle}>Venha ser nosso Aluno &nbsp;	&#10084;</DialogTitle>
          <DialogContent className={classes.formBody}>
          <TextField
              value={name}
              type="text"
              fullWidth
              variant="outlined"
              label="Nome"
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <TextField
              value={numero}
              type="tel"
              fullWidth
              variant="outlined"
              label="Número com DDD"
              onChange={(e)=>setNumero(e.target.value)}
              
              required
            />
            <TextField
              value={obj}
              label="Qual seu objetivo de curso/faculdade?"
              type="text"
              multiline
              minRows={2}
              fullWidth
              variant="outlined"
              onChange={(e)=>setObj(e.target.value)}
            />
           
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancelar</Button>
            <Button  className={classes.emb} variant="contained" type="submit">
              Embarcar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
  