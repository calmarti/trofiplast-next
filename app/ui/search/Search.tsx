"use client";

import {  useEffect, useState } from "react";
import {  useSearchParams, usePathname, useRouter  } from "next/navigation";
import Select , { Options, SingleValue, ActionMeta }  from "react-select";


export default function Search({ fieldsOptionsArray }) {

  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [filters, setFilters] = useState({
    group: null, order: null,
    family: null, genus: null,
    species: null, area: null,
    origin: null, country: null,
    from: null,to: null,
  });

  
  const searchParams = useSearchParams(); //read-only current URL search params
  const params = new URLSearchParams(searchParams); // creates a URLSearchParams object based on the actual search params  
  const pathname = usePathname();
  const router = useRouter();
  
   
  useEffect(() => {
    setIsMounted(true); 
      console.log('filters; ', filters);     
      console.log('searchParams from useEffect', searchParams) 
  }, [/* filters, */ ]);


  
  const handleChange = (selectedOption:SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) =>{
    if (actionMeta.action==='select-option'){
        // setFilters((prevState:any) => {
        // return {...prevState, [actionMeta.name]: selectedOption.value}
        // })
        console.log(selectedOption);    
        console.log(actionMeta)
        params.set(actionMeta.name, selectedOption.value);
        console.log('just one param', params.get(actionMeta.name))
        console.log('params string', params.toString());
        console.log('searchParams', searchParams);
        router.replace(`${pathname}?${params.toString()}`);
    }    
  } 

        
//TODO: el handleChange que sincroniza el name/selectedOption con la URL funciona
//TODO: problema: actualiza los URL params pero entonces borra el selected option del Select!
//TODO: TIENE QUE SER que hay que sincronizar el defaultValue de cada Select como en el tutorial de 
//nextjs: defaultValue={searchParams.get('query')?.toString()} ---> da error de que 'searchParams.get() is not a function'
//tampoco funciona si se usa el defaultInputValue (e react-select el defaultValue tiene q ser un Option y el defaultInputValue un string)
//pero por lógica debería ser el defaultValue: no funciona  defaultValue={params? params.toString() : null}  pues es un string, no un Option
//pero el Option debe ser el seleccionado y no está en el scope!! -> buscar en los docs de react-select como invocar el selectedOption 
//en un atributo y no en una función

//TODO: ahora probar a iterar sobre el params (bien sobre el objeto en sí o sobre sus entries u otro método) 
//y pillar de ahí el objeto con los filtros para el GET. 
//este GET debe ir en el handleSubmit del form que a su vez debe ser un RSC (debe evitarse que el handleSubmit
//sea un post: ¿es esto posiblE? ¿me vale solo con preventDefault?   
        



        
  const fieldOptions: OptionType[] = fieldsOptionsArray.map(
    (field: PrismaOption<"Type">[]) => {
      return field.map((elem) => {
        return {
          value: elem[Object.keys(elem)[0]],
          label: elem[Object.keys(elem)[0]],
          fieldName: Object.keys(elem)[0],
        };
      });
    }
  );




  
  //TODO: funcionan los filtros y muestra el selected por UI pero da warning (¿es value o es otra prop?: mirar los docs)
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
//los filters como state y la actualización del value con estos). 
//Problema: puede ser matar moscas a cañonazos

//2. OPCION ACTUAL: prescindir del estado para filters y simplemente pillar los selected options
//de los parametros de la url usando URLSearchParams (solo disponible en client components) y los hooks de pathname, 
//useSearchParams, useRouter, etc. Una vez cogidos pasarlos a un handleSubmit que sea
//una async function desde un RSC (que sería el form) y pasar a su vez esta funcion al 
//onSubmit del form (que con preventDefault maybe no es necesariamente un POST!
//Finalmente almacenar el resultado en un state local con await



function SelectGroup({isMounted, isLoading ,fieldOptions, handleChange, filters, params}) {

  const { group, order, family, genus, species, area, origin, country } = filters;

  return isMounted && fieldOptions.map((options)=> {
      return (
        <div key={options[0].fieldName}>
          <span id={`label-${options[0].fieldName}`} className="block mb-2">
            {options[0].fieldName.charAt(0).toUpperCase() + options[0].fieldName.slice(1)}
          </span>
          <Select
            aria-labelledby={`label-${options[0].fieldName}`}
            id={options[0].fieldName}
            options={options}
            name={options[0].fieldName}
            // defaultValue={params? params.toString() : null} 
            onChange={handleChange}      //TODO: handleChange comentado de momento        
               
            //   value={                    //TODO: actualización del selected value usando los filtros comentado de momento 
            //   options[0].fieldName === 'group' ? {'value' : group, 'label': group} :
            //   options[0].fieldName === 'order' ? {'value' : order, 'label': order} :
            //   options[0].fieldName === 'family' ? {'value' : family, 'label': family} :
            //   options[0].fieldName === 'genus' ? {'value' : genus, 'label': genus} :
            //   options[0].fieldName === 'species' ? {'value': species, 'label': species }  : 
            //   options[0].fieldName === 'area' ?  {'value' : area, 'label': area } :
            //   options[0].fieldName === 'origin' ?  {'value' : origin, 'label': origin } :
            //   options[0].fieldName === 'country' ?  {'value' : country, 'label': country} : ""
            // }
              
            // getOptionLabel={(option) => option.label}
            // getOptionValue={(option) => option.value}
            classNamePrefix="select"
            isLoading={isLoading}
            isSearchable={true}
            isClearable={false}
            styles={{
              control: (styles, state) => ({
                ...styles,
                width: "14rem",
                borderColor: state.isFocused ? "#FFFFFF" : "none",
                ":active": {
                  ...styles[":active"],
                  borderColor: "#FFFFFF",
                },
                boxShadow: "0 0 0 1px #C1DDBA",
              }),
              menu: (styles) => ({ ...styles, width: "14rem" }),
              option: (styles, state) => ({
                ...styles,
                backgroundColor: state.isFocused
                  ? "#C1DDBA"
                  : state.isSelected
                    ? "#C1DDBA"
                    : "none",
                ":active": {
                  ...styles[":active"],
                  backgroundColor: "#C1DDBA",
                },
              }),
            }}
          />
        </div>
      );
    })
  }


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

      <form className="max-w-4xl mx-auto mt-24 flex flex-col justify-around items-center sm:max-w-5xl sm:mt-32">
        <div className="max-w-full flex flex-col flex-wrap justify-between items-center gap-6 sm:flex-row sm:gap-10">
         <SelectGroup
         isMounted={isMounted}
         isLoading={isLoading}         
         fieldOptions={fieldOptions}
         handleChange={handleChange}
         searchParams
         filters={filters}
         ></SelectGroup>
        </div>
        <div className="max-w-full flex flex-col justify-center items-center gap-6 sm:flex-row sm:gap-12 my-6">
          <div className="flex flex-col">
            <label htmlFor="from" className="pl-2 mb-2">From year</label>
            <input
              type="text"
              name="from"
              id="from"
              className="w-32 h-10 p-2 outline-none text-slate-800 border-2 border-slate-300 focus:border-[#C1DDBA] hover:border-[#b3b3b3]"  
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="to"  className="pl-2 mb-2">To year</label>
            <input 
            type="text" 
            name="to" 
            id="to" 
            className="w-32 h-10 p-2 outline-none text-slate-800 border-2 border-slate-300 focus:border-[#C1DDBA] hover:border-[#b3b3b3] space-x-2" />
          </div>
        </div>
            <button type="submit" className="w-24 focus:outline-none text-white bg-green-700 hover:bg-green-600 focus:ring-green-600 active:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-10 mb-36">Submit</button>
      </form>
    </div>
  );
}
