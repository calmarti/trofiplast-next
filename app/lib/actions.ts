"use server";

import { getItems } from "./data";

export default async function getItemsAction(selection){
        try {
         const result = await getItems(selection);
         console.log('result',result);      
       } catch (error) {
         console.log(error);
       }
}