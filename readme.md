# Adote um aluno

This app is a landing for a brasillian social project called '''adote um aluno''' and a control area for the leads. We are looking for students and teachers -or anyone who wants to contribute to expand the project.
## Client

The client is a react app created using create-react-app. This app relies on the use of a couple dependencies:

- material-ui
- react-router
- redux
- redux-api-middleware



## Server

The server is a very simple Flask server. Its dependencies are:

- Flask
- Flask SQLAlchemy
- SQLlite


## REST endpoints

The backend currently implements the following endpoints:
```
GET /alunos
GET /monitores
POST /alunos
POST /monitores
PATCH /monitor/{ID}
PATCH /aluno/{id}
in progress:
DElETE monitor n aluno
```

## Model definitions
Monitor
nome: number  
numero: string (required)  
exp: string  
created_at: number  
info: boolean

Aluno
nome: number  
numero: string (required)  
obj: string  
created_at: number  
info: boolean



