"use client";

import {  useEffect, useState } from "react";
import Select , { Options, SingleValue, ActionMeta }  from "react-select";

// import { SingleValue, ActionMeta } from "react-select";

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



  // const [groupFilter, setGroupFilter] = useState("");
    
const handleChange = (selectedOption:SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) =>{
  setFilters((prevState) => {
    if (actionMeta.action==='select-option'){
      return {...prevState, [actionMeta.name]: selectedOption.value}
    }
  })
  console.log(selectedOption);    
  console.log(actionMeta)
}


// const handleChange = (selectedOption:SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
//  if(actionMeta.action === "select-option"){
//     setGroupFilter(selectedOption.value);
//   }
//   console.log(selectedOption);    
//   console.log(actionMeta)
// };

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

  useEffect(() => {
    setIsMounted(true); 
      console.log('filters; ', filters); 
  }, [filters]);



  //TODO: funcionan los filtros y muestra el selected por UI pero da warning (¿es value o es otra prop?: mirar los docs)



function SelectGroup({isMounted, isLoading ,fieldOptions, handleChange, filters}) {

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
            onChange={handleChange}
            // onChange={(selectedOption, actionMeta)=>handleChange(selectedOption, actionMeta)}         
            /*  instanceId={elem[0].fieldName} */            
              value={
              options[0].fieldName === 'group' ? {'value' : group, 'label': group} :
              options[0].fieldName === 'order' ? {'value' : order, 'label': order} :
              options[0].fieldName === 'family' ? {'value' : family, 'label': family} :
              options[0].fieldName === 'genus' ? {'value' : genus, 'label': genus} :
              options[0].fieldName === 'species' ? {'value': species, 'label': species }  : 
              options[0].fieldName === 'area' ?  {'value' : area, 'label': area } :
              options[0].fieldName === 'origin' ?  {'value' : origin, 'label': origin } :
              options[0].fieldName === 'country' ?  {'value' : country, 'label': country} : ""
            }
            //TODO: retomar aquí         
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
