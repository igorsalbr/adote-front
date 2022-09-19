import { createAction } from "redux-api-middleware";

const BASE_URL = "http://localhost:5000";

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

export const POST_TODOS_REQUEST = "POST_TODOS_REQUEST";
export const POST_TODOS_SUCCESS = "POST_TODOS_SUCCESS";
export const POST_TODOS_FAILURE = "POST_TODOS_FAILURE";

export const PATCH_TODOS_REQUEST = "PATCH_TODOS_REQUEST";
export const PATCH_TODOS_SUCCESS = "PATCH_TODOS_SUCCESS";
export const PATCH_TODOS_FAILURE = "PATCH_TODOS_FAILURE";
export function getTodos() {
  return createAction({
    endpoint: `${BASE_URL}/todos`,
    method: "GET",
    types: [GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE],
  });
}

export function postTodo(title, description) {
  return createAction({
    endpoint: `${BASE_URL}/todos`,
    headers: {"content-type": "application/json"},
    method: "POST",
    types: [POST_TODOS_REQUEST, POST_TODOS_SUCCESS, POST_TODOS_FAILURE],
    body: JSON.stringify({title: title, description: description})
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

