"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { SingleValue, ActionMeta } from "react-select";

import SelectGroup from "./SelectGroup";
import getItemsAction from "@/app/lib/actions";
import { OptionType, SelectionType } from "@/app/lib/definitions";
import SearchResults from "./SearchResults";




export default function Search({
  fieldsOptions,
}: {
  fieldsOptions: OptionType[][];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selection, setSelection] = useState<SelectionType>
  ({
    group: "",
    order: "",
    family: "",
    genus: "",
    species: "",
    area: "",
    origin: "",
    country: "",
    // from: "",to: "",
  });

  const [items, setItems] = useState([]);

  // const searchParams = useSearchParams(); //read-only current URL search params
  // const params = new URLSearchParams(searchParams); // creates a URLSearchParams object based on the actual search params
  // const pathname = usePathname();
  // const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    console.log("selection; ", selection);
  }, [selection]);

  const handleChange = (
    selectedOption: SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSelection((prevState) => {
      return {
        ...prevState,
        [actionMeta.name]: selectedOption ? selectedOption?.value : "",
      };
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
    setSelection(() => {
      return {
        group: "",
        order: "",
        family: "",
        genus: "",
        species: "",
        area: "",
        origin: "",
        country: "",
      };
    });
  };

  const handleSubmit = async () => {
    // ev.preventDefault();
    try {
      const data = await getItemsAction(selection);
      setItems(data);
    } catch (error) {
      throw new Error("Error while fetching data: " + error);
    }
  };

  //TODO: funciona el handleChange y ya no lanza warnings asociados a la value prop de los select ni ningun otro warning
  //TODO: el handleSubmit es una server action llamada desde un client component (es definida en un archivo con la directiva 'use server') y por eso funciona
  //si fuese una función normal (no una 'action') no se podría ejecutar en un client component

  return (
    <>
  {
   ! items.length ? 
     (
      <div className="max-w-4xl mx-auto mt-40 bg-slate-100 rounded-xl shadow-xl sm:max-w-7xl">
        <h2 className="font-medium text-center pt-16 pb-6 sm:text-xl">
          Search the Trofiplast database
        </h2>
        <hr />
        <p className="text-center w-7/12 mx-auto my-4 sm:text-md">
          Trofiplast contains registers of plastic ingestion by animals that
          spans 120 years in time across several geographical areas worldwide.
          Sources are mainly from scientific literature but also include other
          type of references.
        </p>
        <hr />
        <div className="max-w-4xl mx-auto mt-24 flex flex-col justify-around items-center sm:max-w-5xl sm:mt-32">
          <div className="max-w-full flex flex-col flex-wrap justify-between items-center gap-6 sm:flex-row sm:gap-10">
            <SelectGroup
              isMounted={isMounted}
              isLoading={isLoading}
              fieldsOptions={fieldsOptions}
              selection={selection}
              handleChange={handleChange}
              //  searchParams
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
                /*value="" */
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
                /*value="" */
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
    ) : (
      <SearchResults items={items}/>
    )
  }
</>
)
}
