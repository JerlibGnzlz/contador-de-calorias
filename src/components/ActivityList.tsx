/* eslint-disable no-mixed-spaces-and-tabs */
import { useMemo } from "react";
import { categories } from "../data/category";
import { actividad } from "../types";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ActivityAction } from "../reducers/avtivity-reducers";

type ActivityListProps = {
  actividad: actividad[];
  dispatch: React.Dispatch<ActivityAction>;
};

export const ActivityList = ({ actividad, dispatch }: ActivityListProps) => {
  const categoryName = useMemo(
    () => (categoria: actividad["categoria"]) =>
      categories.map((cat) => (cat.id === categoria ? cat.name : "")),
    []
  );

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

		  {actividad.length===0 ? <p className="text-center">No hay actividades aun...</p>:

			  actividad.map((actividad) => (
        <div
          key={actividad.id}
          className="px-5 py-10 bg-white mt-5 flex justify-between">
          <div className="space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${
                actividad.categoria == 1 ? "bg-lime-500" : "bg-orange-700"
              } `}>
              {categoryName(+actividad.categoria)}{" "}
            </p>
            <p className="text-2xl font-bold pt-5">{actividad.name}</p>
            <p className="font-black text-4xl text-lime-500">
              {actividad.calorias} <span>Calorias</span>
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <button
              onClick={() =>
                dispatch({
                  type: "set=activeId",
                  payload: { id: actividad.id },
                })
              }>
              <PencilSquareIcon className="w-8 h-8 text-gray-800" />
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "delete-activity",
                  payload: { id: actividad.id },
                })
              }>
              <XCircleIcon className="w-8 h-8 text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
