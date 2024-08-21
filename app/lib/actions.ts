"use server";

import { getItems } from "./data";

export default async function getItemsAction(selection){
        try {
         const data = await getItems(selection);
         console.log('data', data);      
         return data;
       } catch (error) {
         console.log(error);
       }
}