import { actividad } from "../types/index";

export type ActivityAction = {
  type: "save=activity";
  payload: { newActivity: actividad };
};

type ActivityState = {
  activities: actividad[];
};
export const initialState: ActivityState = {
  activities: [],
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityAction
) => {
  if (action.type === "save=activity") {
    //este codigo maneja la logica para actualizar el state
    console.log("desde el type de save activity");
  }
};
