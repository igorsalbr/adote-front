import { createAction } from "redux-api-middleware";

const BASE_URL = "http://localhost:5000";

export const GET_MONITOR_REQUEST = "GET_MONITOR_REQUEST";
export const GET_MONITOR_SUCCESS = "GET_MONITOR_SUCCESS";
export const GET_MONITOR_FAILURE = "GET_MONITOR_FAILURE";

export const GET_ALUNO_REQUEST = "GET_ALUNO_REQUEST";
export const GET_ALUNO_SUCCESS = "GET_ALUNO_SUCCESS";
export const GET_ALUNO_FAILURE = "GET_ALUNO_FAILURE";

export const POST_MONITOR_REQUEST = "POST_MONITOR_REQUEST";
export const POST_MONITOR_SUCCESS = "POST_MONITOR_SUCCESS";
export const POST_MONITOR_FAILURE = "POST_MONITOR_FAILURE";

export const POST_ALUNO_REQUEST = "POST_ALUNO_REQUEST";
export const POST_ALUNO_SUCCESS = "POST_ALUNO_SUCCESS";
export const POST_ALUNO_FAILURE = "POST_ALUNO_FAILURE";

export const PATCH_ALUNO_REQUEST = "PATCH_ALUNO_REQUEST";
export const PATCH_ALUNO_SUCCESS = "PATCH_ALUNO_SUCCESS";
export const PATCH_ALUNO_FAILURE = "PATCH_ALUNO_FAILURE";

export const PATCH_MONITOR_REQUEST = "PATCH_MONITOR_REQUEST";
export const PATCH_MONITOR_SUCCESS = "PATCH_MONITOR_SUCCESS";
export const PATCH_MONITOR_FAILURE = "PATCH_MONITOR_FAILURE";


export function getMonitor() {
  return createAction({
    endpoint: `${BASE_URL}/monitores`,
    headers: {"content-type": "application/json"},
    method: "GET",
    types: [GET_MONITOR_REQUEST, GET_MONITOR_SUCCESS, GET_MONITOR_FAILURE],
  });
}
export function getAluno() {
  return createAction({
    endpoint: `${BASE_URL}/alunos`,
    headers: {"content-type": "application/json"},
    method: "GET",
    types: [GET_ALUNO_REQUEST, GET_ALUNO_SUCCESS, GET_ALUNO_FAILURE],
  });
}


export function postMonitor(name, numero , exp) {
  return createAction({
    endpoint: `${BASE_URL}/monitores`,
    headers: {"content-type": "application/json"},
    method: "POST",
    types: [POST_MONITOR_REQUEST, POST_MONITOR_SUCCESS, POST_MONITOR_FAILURE],
    body: JSON.stringify({name: name, numero: numero , exp: exp})
  });
}
export function postAluno(name, numero , exp) {
  return createAction({
    endpoint: `${BASE_URL}/alunos`,
    headers: {"content-type": "application/json"},
    method: "POST",
    types: [POST_ALUNO_REQUEST, POST_ALUNO_SUCCESS, POST_ALUNO_FAILURE],
    body: JSON.stringify({name: name, numero: numero , exp: exp})
  });
}
export function patchAluno(id, info) {
  return createAction({
    endpoint: `${BASE_URL}/aluno/${id}`,
    headers: {"content-type": "application/json"},
    method: "PATCH",
    types: [PATCH_ALUNO_REQUEST, PATCH_ALUNO_SUCCESS, PATCH_ALUNO_FAILURE],
    body: JSON.stringify({info: info})
  });
}
export function patchMonitor(id, info) {
  return createAction({
    endpoint: `${BASE_URL}/monitor/${id}`,
    headers: {"content-type": "application/json"},
    method: "PATCH",
    types: [PATCH_MONITOR_REQUEST, PATCH_MONITOR_SUCCESS, PATCH_MONITOR_FAILURE],
    body: JSON.stringify({info: info})
  });
}





/** 
export function getTodos() {
  return createAction({
    endpoint: `${BASE_URL}/todos`,
    method: "GET",
    types: [GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE],
  });
}

export function patchTodo(id, completed) {
  return createAction({
    endpoint: `${BASE_URL}/todos/${id}`,
    headers: {"content-type": "application/json"},
    method: "PATCH",
    types: [PATCH_TODOS_REQUEST, PATCH_TODOS_SUCCESS, PATCH_TODOS_FAILURE],
    body: JSON.stringify({completed: completed})
  });
}
*/
