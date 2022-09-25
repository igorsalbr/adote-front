import { createStyles, Fab, makeStyles, Typography,  List, ListItem, ListItemIcon, ListItemText, Paper,  Button} from "@material-ui/core";
import {ArrowForward, KeyboardArrowRight }from '@material-ui/icons'
import {  useState } from "react";
import AddMonitorModal from "../components/AddMonitorModal";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: '90%',
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom:"10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      textAlign: 'left'

    },
    list: {
      paddingTop: "20px",
      paddingBottom:"20px",
      paddingLeft:'20px',
      display: "flex",
      flexDirection: "column",


    }, 
    list1: {
      paddingTop: "20px",
      paddingBottom:"20px",
      paddingLeft:'40px',
      display: "flex",
      flexDirection: "column",


    }, 
    listItem: {
        maxWidth: "80%",
        margin:'0 auto'

    },
    link:{
      textDecoration:"none"
    },
    button: {
      position: 'fixed',
      bottom:'0',
      right:'0',
      left:'0',
      maxWidth:'400px',
      margin: "20px auto",
      backgroundColor:'#3d57a6',
      color:'white' ,
      '&:hover':{
        backgroundColor:"  #efd301 ",
      color:'black' ,
      },


    },
    card: {
      paddingTop: "100px",
      
      alignItems: "center",
      alignContent: "center",
      textAlign: 'left',
      width: '90vw',
      

    },
    hr:{
      marginTop:"20px",
    },
    second:{
      marginTop:'10px',
      padding: '10px',
      paddingLeft:'20px',

      backgroundColor: "#f0f0f0",

    }
    
  })
);
const MonitorTXT = [
  {
    text:
    "Conseguimos realmente ajudar pessoas e fazer a diferença na vida delas, mesmo sem abdicar tanto tempo quanto qualquer outro projeto social",
  },
  {
    text:"Muito pratico! Ajuda a responder as dúvidas de vários alunos no mesmo dia!"
  },
  {
    text:
"Poder ajudar com o tempo que temos disponível"
},
  {
    text:
"Flexibilidade e alcance para alunos que de outra forma não teriam acesso a um plantão de dúvidas"
},
  {
    text:
"Poder ajudar pessoas que estão passando por um processo semelhante ao que eu passei.",
  },
  {
    text:
"Achei bem positiva a facilidade de comunicação entre mentores e alunos, sendo o grupo de whatsapp bem dinâmico. E, acima de tudo, o ponto mais positivo pra mim é ver que o projeto realmente é eficaz ao ajudar os alunos. Eles realmente conseguem sanar as dúvidas e ter um resultado muito bom no vestibular."
},
];


const AlunosTXT = [
  {
    text:
    "Eu amo o projeto e principalmente dedicação e humanidade dos monitores.",
  },
  {
    text:"Espero que vocês continuem com o projeto. São excelentes."
  },
  {
    text:
"Sou fã do projeto e recomendo"
 },
  {
    text:
"Vcs são incríveis, toda gratidão é pouca pelo trabalho de vcs"
 },
  {
    text:
"Sou fã do projeto. Se passar quero ajudar tb.",
  },
  {
    text:
"Vocês são incríveis! A ajuda disponibilizada no grupo tem ajudado absurdamente!"
},
];
export default function Aluno() {
  let classes = useStyles();



  // Hold state for if new item modal is open
  let [addMonitorModal, setAddMonitorModal] = useState(false);
  let [index, setActiveStep] = useState(0);
  let [monitor, setActiveMonitor] = useState(0);

  const CollectionSizeA = AlunosTXT.length;
  const CollectionSizeM = MonitorTXT.length;

  const goToNextAluno = () => {
    
    if (index === CollectionSizeA-1){
      return setActiveStep(0)
      
    }
    setActiveStep(index + 1);
   
  };
  const goToNextMonitor= () => {
    
    if (monitor === CollectionSizeM-1){
      return setActiveMonitor(0)
      
    }
    setActiveMonitor(monitor + 1);
   
  };


  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Typography variant="h6" className={classes.list1}><b>Bem vindo, futuro Monitor!</b></Typography>
        <Typography variant="body1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monitor, experiencia de ser monitores, como funcionamos, tempo gasto no projeto, arwas administrativas futuro do grupo
        Monitor, experiencia de ser monitores, como funcionamos, tempo gasto no projeto, arwas administrativas futuro do grupoMonitor, experiencia de ser monitores, como funcionamos, tempo gasto no projeto,
         arwas administrativas futuro do grupo
        </Typography>
        <div className={classes.list}>
        <Typography variant="h6" className={classes.list}><b>O que dizem nossos monitores?</b>
        </Typography>
        <Paper
          square
          onClick={goToNextMonitor}
          style={{
            height: "90%",
            minHeight: '200px',
            width: '80%',
            padding: 30,
            display: "flex",
            alignContent:"center",
            justifyContent: "center" ,
            textAlign:'center',
            background:'linear-gradient(-45deg,  #efd301 10%, #3d57a6  60%)',
            cursor:'pointer',
            margin:'0 auto'

          }}
        >
        <div style={{
            alignContent:"center",
            justifyContent: "center",
            whiteSpace: "pre-wrap",
            margin:"auto",
            color:'white'
   
          }}>
        <Typography variant="overline" ><b>&lsquo;&lsquo;&nbsp;{MonitorTXT[monitor].text}&nbsp;&lsquo;&lsquo;</b></Typography>
          </div>
        </Paper>

       
            <Button
              size="small"
              onClick={goToNextMonitor}
            >
              {monitor+1}/{CollectionSizeM}
              &nbsp;&nbsp;
              Próximo
                <KeyboardArrowRight />
              
            </Button>
            </div>

               <List className={classes.second}>
        <Typography variant="h6" className={classes.list}><b>Responsabilidades dos monitores:</b></Typography>

        <ListItem disablePadding className={classes.listItem}>
              <ListItemIcon>
                <ArrowForward />
              </ListItemIcon>
              <ListItemText primary="Gentileza" secondary="Estamos aqui para ajudar! Nem todos têm a mesma condição de acesso a internet
              ou a mesma formação acadêmica, gentileza é o mínimo que esperamos. Lembre-se, nosso trabalho é influenciar positivamente os alunos
              na direção da educação." />
          </ListItem>
          <ListItem disablePadding className={classes.listItem}>
              <ListItemIcon>
                <ArrowForward />
              </ListItemIcon>
              <ListItemText primary="Qualidade" secondary="Ao responder um aluno, tenha certeza que ele entendeu os passos para o resultado. Se não souber como explicar ou responder alguma questão,
              peça ajuda no grupo dos monitores. Os alunos ditam o ritimo deles e nós damos o melhor suporte possível!"/>
          </ListItem>
          <ListItem disablePadding className={classes.listItem}>
              <ListItemIcon>
                <ArrowForward />
              </ListItemIcon>
              <ListItemText primary="Inspiração" secondary="Nosso maior objetivo é desenvolver o senso de comunidade e criar uma cultura de ajuda entre estudantes e graduandos
              para elevarmos o nível da educação no Brasil inteiro! Para isso, os monitores têm que servir como uma base de exemplo e inspiração para os alunos."/>
          </ListItem>
        </List>
        


        <div className={classes.list}>

        <Typography variant="h6" className={classes.list}><b>Palavras que nos incentivam:</b>
        </Typography>
        <Paper
          square
          onClick={goToNextAluno}
          style={{
            height: "90%",
            minHeight: '200px',
            width: '80%',
            padding: 30,
            display: "flex",
            alignContent:"center",
            justifyContent: "center" ,
            textAlign:'center',
            background:'linear-gradient(-45deg,  #efd301 10%, #3d57a6  60%)',
            margin:'0 auto',
            cursor:'pointer'


            
          }}
        >
        <div style={{
            alignContent:"center",
            justifyContent: "center",
            whiteSpace: "pre-wrap",
            margin:"auto",
            color:'white'

          }}>
        <Typography variant="overline" ><b>&lsquo;&lsquo;&nbsp;{AlunosTXT[index].text}&nbsp;&lsquo;&lsquo;</b></Typography>
          </div>
        </Paper>


            <Button
              size="small"
              onClick={goToNextAluno}
            >
              {index+1}/{CollectionSizeA}
              &nbsp;&nbsp;
              Próximo
                <KeyboardArrowRight />
              
            </Button>
        </div>
        
        <Typography variant="h6" className={classes.list1}><b>Venha fazer a diferença no sistema educacional brasileiro!!</b>
        </Typography>

        <Button color="primary" variant="extended" size="medium" onClick={() => setAddMonitorModal(true)} className={classes.button}>
        Quero ser monitor!
        </Button>

        </div>


        <></>
        
      <div className={classes.list} >
  
      </div>
      
        
     
      {addMonitorModal && <AddMonitorModal onClose={() => setAddMonitorModal(false)} />}
    </div>
  );
}
