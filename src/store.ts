import { create } from 'zustand'
import {  createJSONStorage, devtools,persist} from 'zustand/middleware'
import { DraftPatient, Patient } from './types'
import { v4 as uuidv4 } from 'uuid';
import { Bounce, toast } from 'react-toastify';

type PatientState={
    idPatient:Patient['id']
    patients:Patient[]
    addPatient:(data:DraftPatient)=>void
    deletePatient:(id:Patient['id'])=>void
    activePatientId:(id:Patient['id'])=>void
    updatePatient:(data:DraftPatient)=>void
}

const createPatient =(patient:DraftPatient):Patient=>{
    return {...patient, id: uuidv4()}
}

export const usePatientStore= create<PatientState>()(
    devtools(
        persist((set) => ({
    patients:[],
    idPatient:'',
    addPatient:(data)=>{
        const newPatient=createPatient(data)
      set((state)=>({
        patients:[...state.patients,newPatient]

      }))
    },
    deletePatient:(id)=>{
        set((state)=>({
            patients:state.patients.filter(item => item.id !== id)
        }))
        toast.error('Eliminado', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });

    },
    activePatientId:(id)=>{
        set(()=>({
            idPatient:id
        }))
    },
    updatePatient:(data)=>{
       set((state)=>({
        patients:state.patients.map(patient => patient.id === state.idPatient?{id:state.idPatient,...data}:
        patient),
        idPatient:''
      }))
    },
 }),{
    name:'patient-storage',
    storage: createJSONStorage(()=> sessionStorage)
 })))