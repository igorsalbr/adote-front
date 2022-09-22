import { GET_MONITOR_SUCCESS,GET_ALUNO_SUCCESS, POST_MONITOR_SUCCESS, POST_ALUNO_SUCCESS  } from "./actions";
const initialState = {
  member: {}, // todoId -> todoModel
};
export default function memberReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MONITOR_SUCCESS:
      return {
        member: action.payload.reduce(
          (prev, curr) => ({ ...prev, [curr.id]: curr }),
          {}
        ),
      };
      case GET_ALUNO_SUCCESS:
        return {
          member: action.payload.reduce(
            (prev, curr) => ({ ...prev, [curr.id]: curr }),
            {}
          ),
        };
    case POST_MONITOR_SUCCESS:
        return {
          member: {...state.todos, [action.payload.id]: action.payload},
        };
    case POST_ALUNO_SUCCESS:
        return {
            member: {...state.todos, [action.payload.id]: action.payload},
          };
    default:
      return state;
  }
}
