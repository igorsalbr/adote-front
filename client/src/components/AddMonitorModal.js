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
import { postMonitor } from "../store/actions";


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
      background: 'linear-gradient(-45deg,  #efd301 15%, #3d57a6  50%)',
      color:'white'
    },
    emb:{
      backgroundColor:'#3d57a6',
      color:'white' ,
      '&:hover':{
        backgroundColor:"  #efd301 "
      },
    },
  })
);

export default function AddMonitorModal({ onClose }) {
  let classes = useStyles();
  let dispatch = useDispatch();
  let [name, setName]= useState('')
  let [numero, setNumero]= useState('')
  let [exp, setExp]= useState('')

  function submitNewItem(e) {
    e.preventDefault();
    dispatch(postMonitor(name, numero, exp))
    onClose();
  }
  return (
    <Dialog maxWidth="md" fullWidth open onClose={onClose}>
      <form onSubmit={submitNewItem}>
        <DialogTitle className={classes.formTitle}>Venha ser Monitor Adote!! &nbsp; &#128526;</DialogTitle>
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
            type="text"
            fullWidth
            variant="outlined"
            label="Número com DDD"
            onChange={(e)=>setNumero(e.target.value)}
            required
          />
          <TextField
            value={exp}
            label="Qual sua experiência com exatas?"
            type="text"
            multiline
            minRows={2}
            fullWidth
            variant="outlined"
            onChange={(e)=>setExp(e.target.value)}
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
