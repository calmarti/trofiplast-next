import { PrismaClient, Prisma } from '@prisma/client';
import prisma from './prisma';

// export const client = new PrismaClient();

// export const itemGroup: Prisma.ItemSelect = {
//     group:true
// }  
// export const itemOrder: Prisma.ItemSelect = {
//     order:true
// }  

// export const itemFamily: Prisma.ItemSelect = {
//     family:true
// }  
// export const itemGenus: Prisma.ItemSelect = {
//     genus:true
// }  

// export const itemSpecies: Prisma.ItemSelect = {
//     species:true
// }  


export async function getGroupOptions(){
   const options = await prisma.item.findMany({
        distinct:['group'],
        select:{
            group:true, 
        }
    })
    return options;
}

export async function getOrderOptions(){
    const options = await prisma.item.findMany({
         distinct:['order'],
         select:{
            order:true
         }
     })
     return options;
 }