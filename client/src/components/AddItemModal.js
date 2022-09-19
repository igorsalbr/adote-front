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
import { postTodo } from "../store/actions";


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
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
  })
);

export default function AddItemModal({ onClose }) {
  let classes = useStyles();
  let dispatch = useDispatch();
  let [title, setTitle]= useState('')
  let [description, setDescription]= useState('')

  function submitNewItem(e) {
    e.preventDefault();
    dispatch(postTodo(title, description))
    onClose();
  }
  return (
    <Dialog maxWidth="md" fullWidth open onClose={onClose}>
      <form onSubmit={submitNewItem}>
        <DialogTitle className={classes.formTitle}>Venha ser monitor</DialogTitle>
        <DialogContent className={classes.formBody}>
          <TextField
            value={title}
            type="text"
            fullWidth
            variant="outlined"
            label="Número"
            onChange={(e)=>setTitle(e.target.value)}
            required
          />
          <TextField
            value={description}
            label="Qual sua experiëncia com exatas?"
            type="text"
            multiline
            minRows={2}
            fullWidth
            variant="outlined"
            onChange={(e)=>setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button color="primary" variant="contained" type="submit">
            Embarcar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
