import { useReducer } from "react"
import { Form } from "./components/Form"
import { activityReducer, initialState } from "./reducers/avtivity-reducers"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="uppercase font-bold text-lg text-center text-white">
            Contador de Calorias
          </h1>
        </div>

        <section className="bg-lime-500 py-2 px-5">
          <div className="max-w-4xl mx-auto">
            <Form
              dispatch={dispatch}
            />
          </div>
        </section>
      </header>

    </>
  )
}

export default App
