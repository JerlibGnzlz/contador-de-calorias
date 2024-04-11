import { ChangeEvent, Dispatch, useState } from "react"
import { categories } from "../data/category"
import { actividad } from "../types"
import { ActivityAction } from '../reducers/avtivity-reducers';

type FormProps = {
    dispatch: Dispatch<ActivityAction>
}
const initialState = {
    categoria: 1,
    name: "",
    calorias: 0

}
export const Form = ({ dispatch }: FormProps) => {

    const [actividad, setActividad] = useState<actividad>(initialState)

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const isNumber = ["categoria", "calorias"].includes(e.target.id)

        setActividad({
            ...actividad,
            [e.target.id]: isNumber ? +e.target.value : e.target.value,
        })
    }

    const isValidActividad = () => {
        const { name, calorias } = actividad
        return name.trim() !== "" && calorias > 0

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: "save=activity", payload: { newActivity: actividad } })

        setActividad(initialState)
    }

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-2 gap-3">
                <label
                    className="font-bold"
                    htmlFor="categoria"
                >Categorias:</label>
                <select
                    className="border border-slate-300  p-2 rounded-lg w-full bg-white"
                    name="" id="categoria"
                    value={actividad.categoria}
                    onChange={handleChange}
                >
                    {categories.map(categoria => (
                        <option
                            key={categoria.id}
                            value={categoria.id}
                        >
                            {categoria.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <label
                    className="font-bold"
                    htmlFor="name"
                >Actividad:</label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Ensaladas, Ejercicios, Pesas, Bicicleta"
                    onChange={handleChange}
                    value={actividad.name}
                />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <label
                    className="font-bold"
                    htmlFor="calorias"
                >Calorias:</label>
                <input
                    id="calorias"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Calorias ej. 300 o 500"
                    value={actividad.calorias}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white text-center cursor-pointer disabled:opacity-40"
                disabled={!isValidActividad()}
                value={actividad.categoria === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
            />

        </form>
    )
}
