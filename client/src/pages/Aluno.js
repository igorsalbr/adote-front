import { createStyles,  makeStyles, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Button} from "@material-ui/core";
import {ArrowForward, KeyboardArrowRight }from '@material-ui/icons'
import {  useState } from "react";
import AddAlunoModal from "../components/AddAlunoModal";

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
      textAlign:'left'

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



    }, 
    listItem: {
      margin: '0 auto',
      maxWidth: '80%',
      

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

const MyCollection = [
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
  let [addAlunoModal, setAddAlunoModal] = useState(false);
  let [index, setActiveStep] = useState(0);
  const CollectionSize = MyCollection.length;

  const goToNextPicture = () => {
    
    if (index === CollectionSize-1){
      return setActiveStep(0)
      
    }
    setActiveStep(index + 1);
   
  };

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Typography variant="h6" className={classes.list1}><b>Bem vindo, futuro Aluno!</b></Typography>
        <Typography variant="body1" className={classes.list1}>Ao se tornar aluno adote, você entrará em um grupo no whatsapp com 
        diversos alunos e alguns monitores. Nós funcionamos como um grupo de dúvidas, não damos aula ou cobramos
        presença, não temos provas e funcionamos gratuitamente. No grupo você pode tirar todo tipo de dúvida que quiser, desde vivência na 
        universidade até métodos de estudo, <b>mas focamos em tirar suas dúvidas de exatas para os vestibulares.</b>
        &nbsp; Você pode enviar as suas dúvidas a hora que quiser no grupo e, assim que um
        monitor estiver disponível ele irá te atender! 
        </Typography>
        <div className={classes.list}>
        <Typography variant="h6" className={classes.list}><b>O que dizem nossos alunos?</b>
        </Typography>
        <Paper
          square
          onClick={goToNextPicture}
          style={{
            height: "90%",
            minHeight: '200px',
            width: '80%',
            padding: 30,
            display: "flex",
            alignContent:"center",
            justifyContent: "center" ,
            textAlign:'center',
            background: 'linear-gradient(45deg, #efd301  10%,  #3d57a6 60%)',
            margin:'0 auto',
            marginTop:"20px",
            cursor:'pointer'


            
          }}
        >
        <div style={{
            alignContent:"center",
            justifyContent: "center",
            margin:"auto",
            whiteSpace: "pre-wrap"     ,
            color:'white'
          }}>
        <Typography variant="overline" ><b>&ldquo;&nbsp;{MyCollection[index].text}&nbsp;&rdquo;</b></Typography>
          </div>

        </Paper>
       
            <Button
              size="small"
              onClick={goToNextPicture}
            >
              {index+1}/{CollectionSize}
              &nbsp;&nbsp;
              Próximo
                <KeyboardArrowRight />
              
            </Button>
            </div>

        <List className={classes.second}>
        <Typography variant="h6" className={classes.list}><b>Como aluno, você também ganha algumas responsabilidades:</b></Typography>

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
              <ListItemText primary="Compartilhe o conhecimento" secondary="Passou em uma Universidade? Retribua ajudando outros! 
              Seja como monitor adote ou como você preferir, vamos espalhar o acesso à educação no nosso país!!!"/>
          </ListItem>
        </List>
        
        <Typography variant="h6" className={classes.list1}><b>Aprovações</b>
        </Typography>

        <Button color="primary"  size="medium" onClick={() => setAddAlunoModal(true)} className={classes.button}>
        Quero ser aluno!
        </Button>

        </div>


        <></>
        
      <div className={classes.list} >
  
      </div>
      
        
     
      {addAlunoModal && <AddAlunoModal onClose={() => setAddAlunoModal(false)} />}
    </div>
  );
}
