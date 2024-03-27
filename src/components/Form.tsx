import { categories } from "../data/category"



export const Form = () => {
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
                    htmlFor="actividad"
                >Actividad:</label>
                <input
                    id="actividad"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Ensaladas, Ejercicios, Pesas, Bicicleta"
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
