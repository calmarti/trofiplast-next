'use client';

import React from 'react'
import Select from 'react-select'

import NavBar from "../ui/common/navbar";

/* const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
); */

const dataOptions = [
  { 'value': 'perro', 'label': 'perro' },
  { 'value': 'gato', 'label': 'gato' },
  { 'value': 'ratón', 'label': 'ratón' },
]

export default function Page() {
  return (
    <>
      <NavBar></NavBar>
      <form className="h-screen mt-32 ml-24">
          <Select
            className="basic-single"
            classNamePrefix="select"
            /*     defaultValue={colourOptions[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isSearchable={isSearchable} */
            name="animals"
            options={dataOptions}
          /* autoFocus */
          styles={{
            control: (provided)=>({...provided, width:'20%'}),
            menu: (provided)=>({...provided, width:'20%'}),
            option: (provided)=>({...provided, width:'20%'})
          }}
          />
   

{/* <div className="relative w-56">
  <select className="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
  focus:pt-6
  focus:pb-2
  [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6
  autofill:pb-2">
    <option selected></option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
  <label className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">Group</label>
</div>
 */}


</form>
</>

)}