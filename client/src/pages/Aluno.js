import { createStyles, Fab, makeStyles, Typography, Card, List, ListItem, ListItemIcon, ListItemText,} from "@material-ui/core";
import {ArrowForward }from '@material-ui/icons'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddAlunoModal from "../components/AddAlunoModal";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 900,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom:"10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",

    },
    list: {
      paddingTop: "20px",
      paddingBottom:"20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",


    }, 
    listItem: {
      '&:hover': {
        backgroundColor: "#f0f0f0",
     }
      

    },
    link:{
      textDecoration:"none"
    },
    button: {
      position: 'fixed',
      bottom:'0',
      width: "100px",
      margin: "20px",
      backgroundColor:" #efd301 ",
      color:'black'


    },
    card: {
      paddingRight: "50px",
      paddingLeft: "50px",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      alignItems: "center",
      alignContent: "center",
      width: '90vw',
      

    },
    hr:{
      marginTop:"20px",
      marginBottom:"20px"
    }
  })
);

export default function Aluno() {
  let classes = useStyles();


  // Hold state for if new item modal is open
  let [addAlunoModal, setAddAlunoModal] = useState(false);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="h6" className={classes.list}><b>Bem vindo!</b></Typography>
        <Typography variant="overline">&nbsp;&nbsp;&nbsp;&nbsp;Ao se tornar aluno adote, você entrará em um grupo no whatsapp com 
        diversos alunos e alguns monitores. Nós funcionamos como um grupo de dúvidas, não damos aula ou cobramos
        presença, não temos provas e funcionamos gratuitamente. No grupo você pode tirar todo tipo de dúvida que quiser, desde vivência na 
        universidade até métodos de estudo, <b>mas focamos em tirar suas dúvidas de exatas para os vestibulares.</b>
        &nbsp;&nbsp;Você pode enviar as suas dúvidas a hora que quiser no grupo e, assim que um
        monitor estiver disponível ele irá te atender! 
        </Typography>
    
        <hr className={classes.hr}></hr>
        <Typography variant="overline">Como aluno, você também ganha algumas responsabilidades:</Typography>
        <List>
        <ListItem disablePadding className={classes.listItem}>
              <ListItemIcon>
                <ArrowForward />
              </ListItemIcon>
              <ListItemText primary="Mande suas dúvidas sem medo" secondary="Aqui seu progresso depende de você, quão mais 
              ativo você estiver nos estudos, maiores suaas chances de passar" />
          </ListItem>
          <ListItem disablePadding className={classes.listItem}>
              <ListItemIcon>
                <ArrowForward />
              </ListItemIcon>
              <ListItemText primary="Ajude outros alunos" secondary="Atualmente estamos em expansão e não temos monitores para sempre
              responder na hora, se souber responder a dúvida de outro aluno, tente explicar! Acredite, ensinar é uma das melhores
              formas de aprender"/>
          </ListItem>
          <ListItem disablePadding className={classes.listItem}>
              <ListItemIcon>
                <ArrowForward />
              </ListItemIcon>
              <ListItemText primary="Espalhe a semente" secondary="Passou em uma Universidade? Retribua ajudando outros! 
              Seja como monitor adote ou como você preferir, vamos espalhar o acesso à educação no nosso país!!!"/>
          </ListItem>
        </List>
        <div className={classes.list}>
        <Typography variant="h6" className={classes.list}><b>O que dizem nossos alunos?</b>
        </Typography>
        <Typography variant="h6" className={classes.list}><b>Aprovações</b>
        </Typography>

        <Fab color="primary" variant="extended" size="medium" onClick={() => setAddAlunoModal(true)} className={classes.button}>
        Quero ser aluno!
        </Fab>
        </div>

        </Card>


        <></>
        
      <div className={classes.list} >
  
      </div>
      
        
     
      {addAlunoModal && <AddAlunoModal onClose={() => setAddAlunoModal(false)} />}
    </div>
  );
}
