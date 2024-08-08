"use client";

import {  useEffect, useState } from "react";
import {  useSearchParams, usePathname, useRouter  } from "next/navigation";
import Select, { Options, SingleValue, ActionMeta }  from "react-select";

import SearchForm from "./SearchForm";

//TODO: la logica de cambio del estado no le llega a los Select o hay un problema 
//con los import / export de los client components y el RSC (search form)

export default function Search({ fieldsOptionsArray }) {

  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [selection, setselection] = useState({
    group: null, order: null,
    family: null, genus: null,
    species: null, area: null,
    origin: null, country: null,
    // from: null,to: null,
  });

  
  // const searchParams = useSearchParams(); //read-only current URL search params
  // const params = new URLSearchParams(searchParams); // creates a URLSearchParams object based on the actual search params  
  // const pathname = usePathname();
  // const router = useRouter();
  
   
  useEffect(() => {
    setIsMounted(true); 
      console.log('selection; ', selection);     
      /*console.log('searchParams from useEffect',  searchParams ) */
  }, [selection]);


  
  const handleChange = (selectedOption:SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) =>{
    if (actionMeta.action==='select-option'){
        setselection((prevState:any) => {
        return {...prevState, [actionMeta.name]: selectedOption.value}
        })
        console.log('option', selectedOption);    
        console.log('actionMeta', actionMeta)
        // params.set(actionMeta.name, selectedOption.value);
        // console.log('just one param', params.get(actionMeta.name))
        // console.log('params string', params.toString());
        // console.log('searchParams', searchParams);
        // router.replace(`${pathname}?${params.toString()}`);
     }     
  } 

        

        
  const fieldOptions: OptionType[] = fieldsOptionsArray.map(
    (options: PrismaOption<"Type">[]) => {
      return options.map((option) => {
        return {
          value: option[Object.keys(option)[0]],
          label: option[Object.keys(option)[0]],
          fieldName: Object.keys(option)[0],
        };
      });
    }
  );


  
  //TODO: funcionan el handleChange pero lanza este warning porque debe haber alguna prop para decirle que lo quiero "controlled"
  /*Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. 
  Decide between using a controlled or uncontrolled input element for the lifetime of the component.*/

  //TODO: la action solo soporta POST, no sirve para este caso de uso!
  //getServerSideProps dejó de existir en NextJS14, simplemente hacer el fetching desde un RSC! (no olvidar cache and revalidation)
  //OJO: el form de react tiene el evento onSubmit que debe ser = handlSubmit() y el ejemplo del bootcamp no usa formData sino
  //que se trae los valores con un handleChange y un state, revisar mi solución a ver como está (no perder tiempo con la de David!)
  //hecho ahí
  //por otra parte, a considerar: si pudiese usar el formData entonces en teoría NO necesitaría los filtros pues ya tendría todo 
  //en el formData y URLSearchParams
  //si es así habría que elminar el estado de filtros, el handleChange (no haría falta!) y la lógica del prop value de Select

//TODO; 2 alternativas:

//1. handleSubmit desde prop onSubmit del form creando instancia de FormData y 
//pasándole el equivalente de react-select de event.target (se mantienen tanto
//los selection como state y la actualización del value con estos). 
//Problema: puede ser matar moscas a cañonazos

//2. prescindir del estado para selection y simplemente pillar los selected options
//de los parametros de la url usando URLSearchParams (solo disponible en client components) y los hooks de pathname, 
//useSearchParams, useRouter, etc. Una vez cogidos pasarlos a un handleSubmit que sea
//una async function desde un RSC (que sería el form) y pasar a su vez esta funcion al 
//onSubmit del form (que con preventDefault maybe no es necesariamente un POST!
//Finalmente almacenar el resultado en un state local con await




  return (
    <div className="max-w-4xl mx-auto mt-40 bg-slate-100 rounded-xl shadow-xl sm:max-w-7xl">
      <h2 className="font-medium text-center pt-16 pb-6 sm:text-xl">
        Search the Trofiplast database
      </h2>
      <hr />
      <p className="text-center w-7/12 mx-auto my-4 sm:text-md">
        Trofiplast contains registers of plastic ingestion by animals that spans
        120 years in time across several geographical areas worldwide. Sources
        are mainly from scientific literature but also include other type of
        references.
      </p>
      <hr />
    <SearchForm
    isMounted={isMounted}
    isLoading={isLoading}
    fieldOptions={fieldOptions}
    handleChange={handleChange}
    selection={selection}
    >
    </SearchForm>

    </div>
  );
}


