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
const [isLoading, setIsLoading] = useState(false);
const [isDisabled, setIsDisabled] = useState(false);

//TODO: for some reason h-100 instead of h-screen (in form element) disables the Select component

    return (
        <div className="max-4xl flex-col m-auto mt-40 pt-8 bg-slate-200 rounded-xl shadow-xl  md:max-w-6xl md:flex">
        <h2 className="text-xl font-medium text-center m-8 pt-10">Search the database</h2>
        <form className="h-screen m-auto mt-32">
            <Select
                /* className="basic-single" */
                classNamePrefix="select"
                /*defaultValue={colourOptions[0]}*/
                isDisabled={isDisabled}
                isLoading={isLoading}
                isSearchable={isSearchable}
                isClearable={isClearable}
                name="group"
                options={groupOptions}
                styles={{
                    control: (styles, state) => ({ ...styles, width: '14rem', borderColor: state.isFocused? '#FFFFFF' : 'none', 
                            ':active': { ...styles[':active'], borderColor:'#FFFFFF'}, boxShadow: '0 0 0 1px #C1DDBA' }),
                    menu: (styles) => ({ ...styles, width: '14rem'}),
                    option: (styles, state) =>
                        ({ ...styles, 'backgroundColor': state.isFocused? '#C1DDBA' : state.isSelected  ? '#C1DDBA' : 'none', 
                            ':active': { ...styles[':active'], backgroundColor:'#C1DDBA'} })
                }}
            />
        </form>
         </div> 
    )
}