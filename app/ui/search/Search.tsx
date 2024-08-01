"use client";
import { v4 as uuidv4 } from 'uuid';

import { useEffect, useState } from "react";
import Select from "react-select";


export default function Search({
  /*groupOptions , orderOptions*/ fieldsOptionsArray,
}) {
  /* const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
); */

  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

  const [isSearchable, setIsSearchable] = useState(true);
  const [isClearable, setIsClearable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isMounted, setIsMounted]  = useState(false);
 
  const fieldOptions = fieldsOptionsArray.map(
    (field /* : fieldOption<"Type">[] */) => {
      return field.map((elem) => {
        return {
          fieldName: Object.keys(elem)[0].charAt(0).toUpperCase() + Object.keys(elem)[0].slice(1),
          value: elem[Object.keys(elem)[0]],
          label: elem[Object.keys(elem)[0]],
        };
      });
    }
  );

  

  useEffect(()=>{
    setIsMounted(true);
 /*    setTimeout(()=>{
      console.log('fieldOptions', fieldOptions)
    },2000) */

  },[])

  //TODO: restructure the whole thing: do NOT render the Selects with a .map but one by one
  //TODO: really devote time to really think the css layout of the Search subcomponent and the Search page!
  //TODO: the unique key warning still appears!, why?

  return (
    <div className="max-w-5xl mx-auto mt-40 bg-slate-100 rounded-xl shadow-xl sm:max-w-7xl">
      <h2 className="text-xl font-medium text-center pt-16 pb-6">
        Search the Trofiplast database
      </h2>
      <hr />
      <p className="text-center w-7/12 mx-auto my-4">Trofiplast contains registers of plastic ingestion by animals that spans 120 years in time across several geographical areas worldwide. 
        Sources are mainly from scientific literature but also include other type of references.</p>
       <hr />
      <form className="max-w-4xl mx-auto h-screen mt-32 flex flex-col sm:max-w-5xl">
        <div className="max-w-full flex flex-col sm:flex-row flex-wrap justify-around items-center gap-5">
          { isMounted && fieldOptions.map((elem) => {
          /*   const id = uuidv4(); */
            return (                            
              <div key={elem[0].fieldName} >
              <span id={`label-${elem[0].fieldName}`}>{elem[0].fieldName}</span>
                <Select      
                  aria-labelledby={`label-${elem[0].fieldName}`}             
                  id={elem[0].fieldName}
                 /*  instanceId={elem[0].fieldName} */
                  /* key={elem[0].fieldName}    */        
                  /* className="basic-single" */
                  classNamePrefix="select"
                  /*defaultValue={colourOptions[0]}*/
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
      </form>      
    </div>
  );
}
