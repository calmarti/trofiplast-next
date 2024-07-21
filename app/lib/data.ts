import { PrismaClient, Prisma } from '@prisma/client';
const client = new PrismaClient();


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
   const options = await client.item.findMany({
        distinct:['group'],
        select:{
            group:true, 
        }
    })
    return options;
}

export async function getOrderOptions(){
    const options = await client.item.findMany({
         distinct:['order'],
         select:{
            order:true
         }
     })
     return options;
 }