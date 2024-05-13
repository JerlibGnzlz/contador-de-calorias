import { useEffect, useMemo, useReducer } from "react";
import { Form } from "./components/Form";
import { activityReducer, initialState } from "./reducers/avtivity-reducers";
import { ActivityList } from "./components/ActivityList";

function App() {
	const [state, dispatch] = useReducer(activityReducer, initialState);

	useEffect(() => {
		localStorage.setItem("actividades", JSON.stringify(state.activities));
	}, [state.activities]);


	// eslint-disable-next-line react-hooks/rules-of-hooks
	const resetApp = () =>
    useMemo(() => state.activities.length , [state.activities]);

	return (
		<>
			<header className="bg-lime-600 py-3">
				<div className="max-w-4xl mx-auto flex justify-between">
					<h1 className="uppercase font-bold text-lg text-center text-white">
						Contador de Calorias
					</h1>

					<button className="bg-gray-800 hover:bg-gray-900 font-bold text-white  uppercase text-sm cursor-pointer p-2 rounded-lg disabled:opacity-10"
						disabled={!resetApp()}
					onClick={()=>dispatch({type:"reset-activity"})}
					>Reniciar App</button>
				</div>
			</header>

			<section className="bg-lime-500 py-2 px-5">
				<div className="max-w-4xl mx-auto">
					<Form dispatch={dispatch} state={state} />
				</div>
			</section>

			<section className="p-10 mx-auto max-w-4xl">
				<ActivityList actividad={state.activities} dispatch={dispatch} />
			</section>
		</>
	);
}

export default App;
