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

 export async function getFamilyOptions(){
    const options = await prisma.item.findMany({
         distinct:['family'],
         select:{
            order:true
         }
     })
     return options;
 }

 export async function getGenusOptions(){
    const options = await prisma.item.findMany({
         distinct:['genus'],
         select:{
            order:true
         }
     })
     return options;
 }

 export async function getSpeciesOptions(){
    const options = await prisma.item.findMany({
         distinct:['species'],
         select:{
            order:true
         }
     })
     return options;
 }

 export async function getAreaOptions(){
    const options = await prisma.item.findMany({
         distinct:['area'],
         select:{
            order:true
         }
     })
     return options;
 }

 export async function getOriginOptions(){
    const options = await prisma.item.findMany({
         distinct:['origin'],
         select:{
            order:true
         }
     })
     return options;
 }

 export async function getCountryOptions(){
    const options = await prisma.item.findMany({
         distinct:['country'],
         select:{
            order:true
         }
     })
     return options;
 }

 export async function getItemsByFilters({group,order,family,genus,species,area,origin,country}){
    const items = await prisma.item.findMany({
        where:{
            "group": group, 
            "order": order,         
            "family": family,        
            "genus": genus,          
            "species": species,        
            "area": area,           
            "origin": origin,        
            "country": country              }
    })
    return items;
 }