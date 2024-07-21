'use client';
import { useState } from 'react'
import Select from 'react-select'


export default function Search({groupOptions /* , orderOptions*/}) {

    /* const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
); */

const [isSearchable, setIsSearchable] = useState(true);
const [isClearable, setIsClearable] = useState(true);


    return (
        <form className="h-screen mt-32 ml-24">
            <Select
                className="basic-single"
                classNamePrefix="select"
                /*defaultValue={colourOptions[0]}*/
                /*isDisabled={isDisabled}*
                /* isLoading={isLoading}*/
                /*isSearchable={isSearchable}*/
                isClearable={isClearable}
                name="animals"
                // options={dataOptions}
                options={groupOptions}
                /* autoFocus */
                styles={{
                    control: (styles) => ({ ...styles, width: '15%', }),
                    menu: (styles) => ({ ...styles, width: '15%', }),
                    option: (styles, { isFocused, isSelected, }) =>
                        ({ ...styles, "backgroundColor": isSelected ? "#C1DDBA" : isFocused ? "#C1DDBA" : undefined, /* ":hover": { backgroundColor:"#C1DDBA" }, */ })
                }}
            />
        </form>
    )
}