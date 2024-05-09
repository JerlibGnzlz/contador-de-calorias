import { actividad } from '../types/index';

export type ActivityAction =
  { type: "save=activity"; payload: { newActivity: actividad } } |
  { type: "set=activeId"; payload: { id: actividad["id"] } };

export type ActivityState = {
  activities: actividad[];
  activeId: actividad["id"]
};
export const initialState: ActivityState = {
  activities: [],
  activeId: ""
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityAction
) => {
  if (action.type === "save=activity") {
    //este codigo maneja la logica para actualizar el state
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }
  if (action.type === "set=activeId") {

    return {
      ...state,
      activeId: action.payload.id
    }
  }
  return state;
};
