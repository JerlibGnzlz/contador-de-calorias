import { useState } from "react"
import { categories } from "../data/category"



export const Form = () => {

    const [actividad, setActividad] = useState({
        categoria: 1,
        name: "",
        calorias: 0
    })

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
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
                />
            </div>

            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white text-center cursor-pointer"
                value="Guardar Comida o guarda ejercicio"
            />

        </form>
    )
}
