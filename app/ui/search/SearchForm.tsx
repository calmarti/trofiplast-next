
//import Select from 'react-select';

import SelectGroup from "./SelectGroup";

export default function SearchForm({isMounted,isLoading,fieldOptions, handleChange, selection}){


// const handleSubmit = (ev) =>{
//     ev.preventDefault();
  
//   }

  
    return(
    <form className="max-w-4xl mx-auto mt-24 flex flex-col justify-around items-center sm:max-w-5xl sm:mt-32">
    <div className="max-w-full flex flex-col flex-wrap justify-between items-center gap-6 sm:flex-row sm:gap-10">
     <SelectGroup
     isMounted={isMounted}
     isLoading={isLoading}         
     fieldOptions={fieldOptions}
     handleChange={handleChange}
     //  searchParams
     selection={selection}
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
  </form>);
}



