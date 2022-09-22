import { GET_MONITOR_SUCCESS,GET_ALUNO_SUCCESS, POST_MONITOR_SUCCESS, POST_ALUNO_SUCCESS  } from "./actions";
const initialState = {
    aluno:{},
    monitor:{}
   // todoId -> todoModel
};
export default function memberReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MONITOR_SUCCESS:
      return {
        monitor: action.payload.reduce(
          (prev, curr) => ({ ...prev, [curr.id]: curr }),
          {}
        ),
      };
      case GET_ALUNO_SUCCESS:
        return {
          aluno: action.payload.reduce(
            (prev, curr) => ({ ...prev, [curr.id]: curr }),
            {}
          ),
        };
    case POST_MONITOR_SUCCESS:
        return {
          monitor: {...state.member.monitores, [action.payload.id]: action.payload},
        };
    case POST_ALUNO_SUCCESS:
        return {
            aluno: {...state.member.alunos, [action.payload.id]: action.payload},
          };
    default:
      return state;
  }
}
