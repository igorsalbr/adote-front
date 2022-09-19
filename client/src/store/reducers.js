import { GET_TODOS_SUCCESS, POST_TODOS_SUCCESS, PATCH_TODOS_SUCCESS } from "./actions";
const initialState = {
  todos: {}, // todoId -> todoModel
};
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return {
        todos: action.payload.reduce(
          (prev, curr) => ({ ...prev, [curr.id]: curr }),
          {}
        ),
      };
    case POST_TODOS_SUCCESS:
        return {
          todos: {...state.todos, [action.payload.id]: action.payload},
        };
    case PATCH_TODOS_SUCCESS:
        return {
          todos: {...state.todos, [action.payload.id]: action.payload},
        };
    default:
      return state;
  }
}