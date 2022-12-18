import {
    createStyles,
    makeStyles,
    Typography, Input, Button
  } from "@material-ui/core";
  import { getAluno, getMonitor, patchAluno, patchMonitor, delAluno, delMonitor } from "../store/actions";

  import ShowResult from "../components/ShowResult";
  
  import {  useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";

  import {collection, getDocs} from 'firebase/firestore'
  import {db} from '../firebase-config'

  const useStyles = makeStyles((theme) =>
    createStyles({
      auth:{
        width: '200px',
        height:'200px',
        paddingTop: '300px',
        margin:'auto',

      },
      separator:{
        display:'flex',
        flexDirection:'row',
        alignContent: 'center',
        marginTop: '20px',
        whiteSpace: 'nowrap'
      },
      separatorcel:{
        display:'flex',
        flexDirection:'column',
        alignContent: 'center',
        marginTop: '20px'
      },
      root:{
        padding:'20px',
        paddingTop:'200px'
      },
      title: {
        alignSelf: 'left',
        textAlign: 'left',
        borderBottom:"2px solid blue",
        minWidth: '60%'

      },
      separator2:{
        borderRight: '1px solid black',
        paddingRight:'20px'
      },
      page:{
        height:'100vh',
        width: '100vw',
        margin:'auto',

      },
    })
  );
  
  export default function Result() {
    let classes = useStyles();

    let [mtr, setMtr] = useState([])
    let [str, setStr] = useState([])
    let [updateM, setUpdateM] = useState(false)
    let [updateA, setUpdateA] = useState(false)
    let [authorize, setAuthorize] = useState(false)
    const monitorCollection = collection(db, "monitor")
    const alunoCollection = collection(db, "aluno")

  useEffect(() => {
    const getMonitor = async ()=>   {
      const monitores = await getDocs(monitorCollection)
      setMtr(monitores.docs.map((doc)=>({...doc.data(), id:doc.id})))

    }
    getMonitor()
  }, [  updateM ]);
  


  useEffect(() => {
    const getAluno = async ()=>   {
      const alunos = await getDocs(alunoCollection)
      setStr(alunos.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }
    getAluno()
  }, [  updateA]);
  
  
  function checkauth(){
    let a = document.querySelectorAll('input')
    if (a[0].value === 'adote' && a[1].value === process.env.REACT_APP_PASS){
      setAuthorize(true)
    }

  }

   if (!authorize){
    return (<div className={classes.auth}>
        <Input placeholder="user"></Input>
        <br></br>

        <Input placeholder="pass" type="password"> </Input>
        <br></br>
        <br></br>

        <Button onClick={checkauth} variant='outlined'>ENTRAR</Button>

    </div>)
  }



   
    return (
      <div className={classes.root}>
        <Typography variant="h5" className={classes.title}> RESULTADOS </Typography>
        <div className={window && window.innerWidth>700 ? classes.separator : classes.separatorcel}>


          
        <ShowResult  todosList={mtr} title="Monitor" update={updateM} setUpdate={setUpdateM}></ShowResult>
        <ShowResult todosList={str} title="Aluno" update={updateA} setUpdate={setUpdateA}></ShowResult>
        </div>

      </div>
    );
  }
  