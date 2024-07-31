"use client";
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

  const fieldOptions = fieldsOptionsArray.map(
    (field /* : fieldOption<"Type">[] */) => {
      return field.map((elem) => ({
        value: elem[Object.keys(elem)[0]],
        label: elem[Object.keys(elem)[0]],
      }));
    }
  );

  useEffect(() => {
    console.log("fieldOptions", fieldOptions);
  }, []);

  //TODO: for some reason h-100 instead of h-screen (in form element) disables the Select component

  return (
    <div className="max-5xl  m-auto mt-40 pt-8 bg-slate-200 rounded-xl shadow-xl sm:max-w-6xl sm:flex flex-col">
      <h2 className="text-xl font-medium text-center m-8 pt-10 flex">
        Search the database
      </h2>
      <form className="h-screen m-auto mt-32 flex">
        {fieldOptions.map((field, i) => {
          return (
            <div className="flex flex-row flex-wrap">
              <div key={i} className="flex">
                <Select
                  /* className="basic-single" */
                  classNamePrefix="select"
                  /*defaultValue={colourOptions[0]}*/
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isSearchable={isSearchable}
                  isClearable={isClearable}
                  name={field[0]["label"]}
                  // options={groupOptions}
                  options={field}
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
            </div>
          );
        })}
      </form>
    </div>
  );
}
