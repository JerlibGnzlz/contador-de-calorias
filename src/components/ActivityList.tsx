import { actividad } from '../types/index';
type ActivityListProps = {
  actividad: actividad[]
}

export const ActivityList = ({ actividad }: ActivityListProps) => {
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>


      {actividad.map(actividad => (

        <div key={actividad.id} className='px-5 py-10 bg-white mt-5 flex justify-between'>
          <div className='space-y-2 relative'>
            <p>{actividad.categoria} </p>
            <p className='text-2xl font-bold pt-5'>{actividad.name}</p>
            <p className='font-black text-4xl text-lime-500'>
              {actividad.calorias}{" "}
              <span>Calorias</span>
            </p>
          </div>

          <div>

          </div>
        </div>

      ))}
    </>
  )


};
