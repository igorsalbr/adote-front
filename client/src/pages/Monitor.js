import { createStyles, Fab, makeStyles, Typography, Card, List, ListItem, ListItemIcon, ListItemText, Paper,  Button} from "@material-ui/core";
import {ArrowForward, KeyboardArrowRight }from '@material-ui/icons'
import {  useState } from "react";
import AddMonitorModal from "../components/AddMonitorModal";

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
      textAlign: 'center'

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
      backgroundColor:'#175f00',
      color:'white' ,
      '&:hover':{
        backgroundColor:"  #efd301 ",
      color:'black' ,
      },


    },
    card: {
      paddingTop: "100px",
      paddingRight: "50px",
      paddingLeft: "50px",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      alignItems: "center",
      alignContent: "center",
      textAlign: 'center',
      width: '90vw',
      

    },
    hr:{
      marginTop:"20px",
      marginBottom:"20px"
    }
  })
);

const AlunosTXT = [
  {
    text:
    "Vocês só me deram esperança para não desistir do meu sonho",
  },
  {
    text:"Projeto excelente que vem me ajudando muito na parte mais crucial dos estudos que é a resolução e o entendimento de questões. Os monitores são maravilhosos e eficientes nas explicações smp tirando nossas dúvidas!! Gratidão à todos vcs☺🤩",
  },
  {
    text:
"Foi muito bom ter encontrado esse projeto. Muito obrigada por te ajudado a mim, e com certeza, muitas outras pessoas de maneira tão prática e inclusiva.",
  },
  {
    text:
"Esse contato entre alunos e ex-alunos é essencial para vestibulandos que estão na luta para conquistar uma vaga nas faculdades públicas. Existir um grupo de monitoria de exatas com alunos brilhantes, realmente é o diferencial do Adote Um Aluno.",
  },
  {
    text:
"Gostei muito pois ajuda quem não tem condições de pagar por uma monitoria",
  },
  {
    text:
"Vocês me ajudaram muito, principalmente em física, aprendi a realmente resolver os exercícios, perceber como era cobrado cada tema, eu gostava muito de quando me faziam perguntas sobre a questão pq na maioria das vezes eu mesma já sabia a resposta, faltava só um detalhe e isso me fez ficar mais atenta e me questionar mais... Enfim, MUITO OBRIGADA!",
  },
];

const MonitorTXT = [
  {
    text:
    "Vocês só me deram esperança para não desistir do meu sonho",
  },
  {
    text:"Projeto excelente que vem me ajudando muito na parte mais crucial dos estudos que é a resolução e o entendimento de questões. Os monitores são maravilhosos e eficientes nas explicações smp tirando nossas dúvidas!! Gratidão à todos vcs☺🤩",
  },
  {
    text:
"Foi muito bom ter encontrado esse projeto. Muito obrigada por te ajudado a mim, e com certeza, muitas outras pessoas de maneira tão prática e inclusiva.",
  },
  {
    text:
"Esse contato entre alunos e ex-alunos é essencial para vestibulandos que estão na luta para conquistar uma vaga nas faculdades públicas. Existir um grupo de monitoria de exatas com alunos brilhantes, realmente é o diferencial do Adote Um Aluno.",
  },
  {
    text:
"Gostei muito pois ajuda quem não tem condições de pagar por uma monitoria",
  },
  {
    text:
"Vocês me ajudaram muito, principalmente em física, aprendi a realmente resolver os exercícios, perceber como era cobrado cada tema, eu gostava muito de quando me faziam perguntas sobre a questão pq na maioria das vezes eu mesma já sabia a resposta, faltava só um detalhe e isso me fez ficar mais atenta e me questionar mais... Enfim, MUITO OBRIGADA!",
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
      <Card className={classes.card}>
        <Typography variant="h6" className={classes.list}><b>Bem vindo, futuro Monitor!</b></Typography>
        <Typography variant="overline">&nbsp;&nbsp;&nbsp;&nbsp;Monitor, experiencia de ser monitores, como funcionamos, tempo gasto no projeto, arwas administrativas futuro do grupo
        </Typography>
        
        
        <Typography variant="h6" className={classes.list}><b>Palavras que nos incentivam</b>
        </Typography>
        <div className={classes.list}>
        <Paper
          square
          style={{
            height: "90%",
            minHeight: '200px',
            width: '80%',
            padding: 30,
            display: "flex",
            alignContent:"center",
            justifyContent: "center" ,
            textAlign:'center',
            backgroundColor:" #fffd9d"

            
          }}
        >
        <div style={{
            alignContent:"center",
            justifyContent: "center",
            whiteSpace: "pre-wrap",
            margin:"auto",
   
          }}>
        <Typography variant="overline" >&lsquo;&lsquo;&nbsp;{MonitorTXT[monitor].text}&nbsp;&lsquo;&lsquo;</Typography>
          </div>
        </Paper>

       
            <Button
              size="small"
              onClick={goToNextMonitor}
            >
              Próximo
                <KeyboardArrowRight />
              
            </Button>
            </div>
       
        <hr className={classes.hr}></hr>
        <Typography variant="overline">Responsabilidades dos monitores:</Typography>
        <List>
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
              peça ajuda no grupo dos monitores, os alunos ditam o ritimo deles, nós damos o melhor suporte possível para qualquer
              dúvida que eles possam ter"/>
          </ListItem>
          <ListItem disablePadding className={classes.listItem}>
              <ListItemIcon>
                <ArrowForward />
              </ListItemIcon>
              <ListItemText primary="Atividade" secondary="Não cobramos mínimo de tempo ou de perguntas para os monitores, nossa intenção é
              que a maior parte das pessoas ajudem como puderem. Entretanto, temos muito mais demanda de aluno do que monitores para suprir, 
              assim, para entregar um projeto de máxima qualidade, esperamos que se o monitor estiver livre e existir demanda de perguntar no 
              grupo, ele responda e ajude os outros, temos reuniões para a ADM que são facultativas pros monitores, se você tem interesse
              em participar da ideação e os próximos passos do projeto, seria legal que participassem!"/>
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
        <Typography variant="h6" className={classes.list}><b>O que dizem nossos monitores?</b>
        </Typography>
        <Paper
          square
          style={{
            height: "90%",
            minHeight: '200px',
            width: '80%',
            padding: 30,
            display: "flex",
            alignContent:"center",
            justifyContent: "center" ,
            textAlign:'center',
            backgroundColor:" #fffd9d",
          }}
        >
        <div style={{
            alignContent:"center",
            justifyContent: "center",
            whiteSpace: "pre-wrap",
            margin:"auto",
   
          }}>
        <Typography variant="overline" >&lsquo;&lsquo;&nbsp;{AlunosTXT[index].text}&nbsp;&lsquo;&lsquo;</Typography>
          </div>
        </Paper>

       
            <Button
              size="small"
              onClick={goToNextAluno}
            >
              Próximo
                <KeyboardArrowRight />
              
            </Button>
        
        <Typography variant="h6" className={classes.list}><b>Venha fazer a diferença no sistema educacional brasileiro!!</b>
        </Typography>

        <Fab color="primary" variant="extended" size="medium" onClick={() => setAddMonitorModal(true)} className={classes.button}>
        Quero ser monitor!
        </Fab>
        </div>

        </Card>


        <></>
        
      <div className={classes.list} >
  
      </div>
      
        
     
      {addMonitorModal && <AddMonitorModal onClose={() => setAddMonitorModal(false)} />}
    </div>
  );
}
