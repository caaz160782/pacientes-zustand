import{Patient} from '../types'
import { usePatientStore } from "../store"


type PatientDetailsProps={
  patient:Patient
}
const PatientDetails = ({patient}:PatientDetailsProps) => {
  const deletePatient =usePatientStore(state => state.deletePatient)
  const idPatient =usePatientStore(state => state.activePatientId)

  
  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
      <p className='font-bold mb-3 text-gray-600 uppercase'>ID: {''}
         <span className='font-normal normal-case'>{patient.id}</span>
      </p>
      <p className='font-bold mb-3 text-gray-600 uppercase'>Nombre: {''}
         <span className='font-normal normal-case'>{patient.name}</span>
      </p>
      <p className='font-bold mb-3 text-gray-600 uppercase'>Propietario: {''}
         <span className='font-normal normal-case'>{patient.caretaker}</span>
      </p>
      <p className='font-bold mb-3 text-gray-600 uppercase'>Email: {''}
         <span className='font-normal normal-case'>{patient.email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-600 uppercase'>Fecha: {''}
         <span className='font-normal normal-case'>{patient.date.toString()}</span>
      </p>
      <p className='font-bold mb-3 text-gray-600 uppercase'>Sintomas: {''}
         <span className='font-normal normal-case'>{patient.symptoms}</span>
      </p>
      <div className='flex justify-between gap-3 mt-10'>
        <button 
          type='button'
          className='py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          onClick={()=> idPatient(patient.id)}
        >
          Editar
        </button>
        <button 
          type='button'
          className='py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          onClick={()=> deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default PatientDetails