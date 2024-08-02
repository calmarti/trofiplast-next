"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

export default function Search({ fieldsOptionsArray }) {
  /* const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
); */

  const [isSearchable, setIsSearchable] = useState(true);
  const [isClearable, setIsClearable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const fieldOptions = fieldsOptionsArray.map(
    (field: fieldOption<"Type">[]) => {
      return field.map((elem) => {
        return {
          fieldName:
            Object.keys(elem)[0].charAt(0).toUpperCase() +
            Object.keys(elem)[0].slice(1),
          value: elem[Object.keys(elem)[0]],
          label: elem[Object.keys(elem)[0]],
        };
      });
    }
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //TODO: restructure the whole thing: do NOT render the Selects with a .map but one by one
  //TODO: really devote time to really think the css layout of the Search subcomponent and the Search page!
  //TODO: button pseudo attributes don't work

  return (
    <div className="max-w-5xl mx-auto mt-40 bg-slate-100 rounded-xl shadow-xl sm:max-w-7xl">
      <h2 className="font-medium text-center pt-16 pb-6 sm:text-xl">
        Search the Trofiplast database
      </h2>
      <hr />
      <p className="text-center w-7/12 mx-auto my-4 sm:text-lg">
        Trofiplast contains registers of plastic ingestion by animals that spans
        120 years in time across several geographical areas worldwide. Sources
        are mainly from scientific literature but also include other type of
        references.
      </p>
      <hr />
      <form className="max-w-4xl mx-auto h-screen mt-24 flex flex-col justify-around items-center sm:max-w-5xl sm:mt-32">
        <div className="max-w-full flex flex-col flex-wrap justify-between items-center gap-6 sm:flex-row sm:gap-10">
          {isMounted &&
            fieldOptions.map((elem) => {
              return (
                <div key={elem[0].fieldName}>
                  <span id={`label-${elem[0].fieldName}`} className="block mb-2">
                    {elem[0].fieldName}
                  </span>
                  <Select
                    aria-labelledby={`label-${elem[0].fieldName}`}
                    id={elem[0].fieldName}
                    /*  instanceId={elem[0].fieldName} */
                    /* key={elem[0].fieldName}    */
                    classNamePrefix="select"
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isSearchable={isSearchable}
                    isClearable={isClearable}
                    name={elem[0].fieldname}
                    // options={groupOptions}
                    options={elem}
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
            })}
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
            <button type="submit" className="w-24 focus:outline-none text-white bg-green-700 hover:bg-red-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Submit</button>
      </form>
    </div>
  );
}
