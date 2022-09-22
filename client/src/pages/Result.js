import {
    createStyles,
    makeStyles,
    Checkbox
  } from "@material-ui/core";
  import { getAluno, getMonitor, patchAluno, patchMonitor } from "../store/actions";
  
  
  import {  useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  const useStyles = makeStyles((theme) =>
    createStyles({
      separator:{
        display:'flex',
        flexDirection:'row',
        gap:'100px'
      },
    })
  );
  
  export default function AddAlunoModal({ onClose }) {
    let classes = useStyles();
    let dispatch = useDispatch();
    let alunos = useSelector((state) => Object.values(state.member.alunos));
    let monitores = useSelector((state) => Object.values(state.member.monitores));


  // Fetch tasks
  useEffect(() => {
    dispatch(getAluno());
    dispatch(getMonitor());
  }, [dispatch]);
  function completeAluno(id, completed){
    console.log(completed)
    dispatch(patchAluno(id, completed))

    
  }
  function completeMonitor(id, completed){
    console.log(completed)
    dispatch(patchMonitor(id, completed))

    
  }
   
    return (
      <div className={classes.separator}>
        {alunos.map((item)=>(
            <><div>{item.name}</div>
            <div>{item.numero}</div>
            <div>{item.obj}</div>
            <Checkbox checked={item.completed} onChange={()=> completeAluno(item.id, !item.completed)}></Checkbox>

            </>      
))}
 {monitores.map((item)=>(
            <><div>{item.name}</div>
            <div>{item.numero}</div>
            <div>{item.exp}</div>
            <Checkbox checked={item.completed} onChange={()=> completeMonitor(item.id, !item.completed)}></Checkbox>

            </>      
))}
      </div>
    );
  }
  