"use client";
import { ItemsContext } from "@/app/lib/context";
import { Item } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";


//TODO: div wrapper original es pos relative, sin el relative se preserva el efecto del degradado
//sobre la tabla, pero hay que buscar mejores colores para la tabla
//TODO: pagination
//TODO: poner un badge con los criteria usados
//TODO: boton de 'search again' 




export default function SearchResults() {


const { items, setItems } = useContext(ItemsContext);


  return (
    <>    
      <div className="max-w-5xl mx-auto overflow-x-auto shadow-xl sm:rounded-2xl sm:max-w-6xl mt-40">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-sm text-gray-700 bg-[#BCDCB6]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Species
              </th>
              <th scope="col" className="px-6 py-3">
                Area
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
    
      <tbody >
        {items &&
          items.map((item) => {
            return (
              <tr className="bg-slate-100 border-b hover:bg-gray-50">
                <th className="px-6 py-4">
                  {item.species}
                </th>
                <td className="px-6 py-4">
                  {item.area}
                </td>
                <td className="px-6 py-4">
                  {item.country}
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Go</a>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table >
    </div >

    </>
  );
}
