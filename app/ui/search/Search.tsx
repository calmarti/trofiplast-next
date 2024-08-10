"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Select, { Options, SingleValue, ActionMeta } from "react-select";

import SelectGroup from "./SelectGroup";
import getItemsAction from "@/app/lib/actions";


//TODO: probar eliminando el form (dejar solo el wrapper) y ejecutando el handleSubmit
//con un onClick desde el butón llamando a la función de prisma importada desde data y listo!

export default function Search({ fieldsOptionsArray }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selection, setSelection] = useState({
    group: null,
    order: null,
    family: null,
    genus: null,
    species: null,
    area: null,
    origin: null,
    country: null,
    // from: null,to: null,
  });

  // const searchParams = useSearchParams(); //read-only current URL search params
  // const params = new URLSearchParams(searchParams); // creates a URLSearchParams object based on the actual search params
  // const pathname = usePathname();
  // const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    console.log("selection; ", selection);
    /*console.log('searchParams from useEffect',  searchParams ) */
  }, [selection]);

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

  const handleChange = (
    selectedOption: SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
       setSelection((prevState: any) => {
        return { ...prevState, [actionMeta.name]: selectedOption? selectedOption?.value : null };
      });
      console.log("option", selectedOption);
      console.log("actionMeta", actionMeta);
      // params.set(actionMeta.name, selectedOption.value);
      // console.log('just one param', params.get(actionMeta.name))
      // console.log('params string', params.toString());
      // console.log('searchParams', searchParams);
      // router.replace(`${pathname}?${params.toString()}`);
    // }
  };

  const reset = () => {
    setSelection(()=>{
      return {group:null, order:null, family:null, genus: null,
        species: null, area: null, origin: null, country: null
      }
    })
  }

  const handleSubmit = async () => {
    // ev.preventDefault();
    const results = await getItemsAction(selection);
    console.log(results);
  };

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
      <div
        // action={handleSubmit}
        className="max-w-4xl mx-auto mt-24 flex flex-col justify-around items-center sm:max-w-5xl sm:mt-32"
      >
        <div className="max-w-full flex flex-col flex-wrap justify-between items-center gap-6 sm:flex-row sm:gap-10">
          <SelectGroup
            isMounted={isMounted}
            isLoading={isLoading}
            fieldOptions={fieldOptions}
            handleChange={handleChange}
            //  searchParams
            selection={selection}
          ></SelectGroup>
        </div>
        <div className="max-w-full flex flex-col justify-center items-center gap-6 sm:flex-row sm:gap-12 my-6">
          <div className="flex flex-col">
            <label htmlFor="from" className="pl-2 mb-2">
              From year
            </label>
            <input
              type="text"
              name="from"
              id="from"
              value={undefined}
              className="w-32 h-10 p-2 outline-none text-slate-800 border-2 border-slate-300 focus:border-[#C1DDBA] hover:border-[#b3b3b3]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="to" className="pl-2 mb-2">
              To year
            </label>
            <input
              type="text"
              name="to"
              id="to"
              value={undefined}
              className="w-32 h-10 p-2 outline-none text-slate-800 border-2 border-slate-300 focus:border-[#C1DDBA] hover:border-[#b3b3b3] space-x-2"
            />
          </div>
        </div>

        <div className="flex gap-3">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-24 focus:outline-none text-white bg-green-700 hover:bg-green-600 focus:ring-green-600 active:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-10 mb-36"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={reset}
          className="w-24 focus:outline-none text-white bg-green-700 hover:bg-green-600 focus:ring-green-600 active:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-10 mb-36"
        >
          Reset
        </button>
        </div>

      </div>
    </div>
  );
}
