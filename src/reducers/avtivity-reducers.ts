import { actividad } from "../types/index";

export type ActivityAction =
  | { type: "save=activity"; payload: { newActivity: actividad } }
  | { type: "set=activeId"; payload: { id: actividad["id"] } }
  | { type: "delete-activity"; payload: { id: actividad["id"] } };

export type ActivityState = {
  activities: actividad[];
  activeId: actividad["id"];
};

export const initialState: ActivityState = {
  activities: [],
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityAction
) => {
  if (action.type === "save=activity") {
    //este codigo maneja la logica para actualizar el state

    let updateActvivities: actividad[] = [];
    if (state.activeId) {
      updateActvivities = state.activities.map((actividad) =>
        actividad.id === state.activeId ? action.payload.newActivity : actividad
      );
    } else {
      updateActvivities = [...state.activities, action.payload.newActivity];
    }
    return {
      ...state,
      activities: updateActvivities,
      activeId: "",
    };
  }
  if (action.type === "set=activeId") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  if (action.type === "delete-activity") {
    return {
		...state,
		activities: state.activities.filter(actividad=> actividad.id !== action.payload.id)
	};
  }

  return state;
};
