import { actividad } from "../types/index";

export type ActivityAction = {


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

};
