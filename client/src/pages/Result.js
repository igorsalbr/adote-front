import {
    createStyles,
    makeStyles,
    Typography, Input, Button
  } from "@material-ui/core";
  import { getAluno, getMonitor, patchAluno, patchMonitor } from "../store/actions";

  import ShowResult from "../components/ShowResult";
  
  import {  useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
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
        marginTop: '20px'
      },root:{
        padding:'150px',
      },
      title: {
        alignSelf: 'center',
        textAlign: 'center',
        borderBottom:"2px solid blue",
        minWidth: '600px'

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
    let dispatch = useDispatch();
    let member = useSelector((state) => state);
    let [mtr, setMtr] = useState([])
    let [str, setStr] = useState([])
    let [updateM, setUpdateM] = useState(false)
    let [updateA, setUpdateA] = useState(false)
    let [authorize, setAuthorize] = useState(false)

 
  useEffect(() => {
    dispatch(getMonitor());  
  }, [dispatch, updateM ]);
  
  useEffect(() => {
    if (member.member.monitor !== undefined && member.member.monitor !== null){ setMtr(Object.values(member.member.monitor))}

  }, [member.member.monitor ]);


  useEffect(() => {

    dispatch(getAluno());  
  }, [dispatch, updateA]);
  
  useEffect(() => {
    if (member.member.aluno !== undefined && member.member.aluno !== null){ setStr(Object.values(member.member.aluno))}

  }, [member.member.aluno]);
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
        <div className={classes.separator}>


          
        <ShowResult  todosList={mtr} patchFunc={patchMonitor} title="Monitor" update={updateM} setUpdate={setUpdateM}></ShowResult>
        <ShowResult todosList={str} patchFunc={patchAluno} title="Aluno" update={updateA} setUpdate={setUpdateA}></ShowResult>
        </div>

      </div>
    );
  }
  