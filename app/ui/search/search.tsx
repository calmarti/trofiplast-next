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
                    control: (styles, state) => ({ ...styles, width: '15%', borderColor: state.isFocused? '#FFFFFF' : undefined, 
                            ':active': { ...styles[':active'], borderColor:'#FFFFFF'}, boxShadow: '0 0 0 1px #C1DDBA' }),
                    menu: (styles) => ({ ...styles, width: '15%'}),
                    option: (styles, state) =>
                        ({ ...styles, 'backgroundColor': state.isSelected ? '#C1DDBA' : state.isFocused ? '#C1DDBA' : undefined, ':active': { ...styles[':active'], backgroundColor:'#C1DDBA'} })
                }}
            />
        </form>
    )
}