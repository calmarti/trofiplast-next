'use client';
import { useState } from 'react'
import Select from 'react-select'


export default function Search({ groupOptions /* , orderOptions*/}) {

    /* const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
); */

const [isSearchable, setIsSearchable] = useState(true);
const [isClearable, setIsClearable] = useState(true);

//TODO: for some reason h-100 instead of h-screen (in form element) disables the Select component

    return (
        <div className="max-4xl flex-col m-auto mt-32 bg-slate-200 shadow-xl md:max-w-6xl md:flex">
        <form className="h-screen m-auto mt-32">
            <Select
                className="basic-single"
                classNamePrefix="select"
                /*defaultValue={colourOptions[0]}*/
                /*isDisabled={isDisabled}*
                /* isLoading={isLoading}*/
                /*isSearchable={isSearchable}*/
                isClearable={isClearable}
                name="group"
                // options={dataOptions}
                options={groupOptions}
                /* autoFocus */
                styles={{
                    control: (styles, state) => ({ ...styles, width: '14rem', borderColor: state.isFocused? '#FFFFFF' : undefined, 
                            ':active': { ...styles[':active'], borderColor:'#FFFFFF'}, boxShadow: '0 0 0 1px #C1DDBA' }),
                    menu: (styles) => ({ ...styles, width: '14rem'}),
                    option: (styles, state) =>
                        ({ ...styles, 'backgroundColor': state.isSelected ? '#C1DDBA' : state.isFocused ? '#C1DDBA' : undefined, ':active': { ...styles[':active'], backgroundColor:'#C1DDBA'} })
                }}
            />
        </form>
         </div> 
    )
}