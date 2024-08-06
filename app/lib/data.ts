import { PrismaClient, Prisma, Item } from '@prisma/client';
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

export async function GetFieldsOptions(){
    try {
        const groupOptions = await prisma.item.findMany({
            distinct:['group'],
            select:{
                group:true, 
            }
        })    
        console.log(groupOptions);
        const orderOptions = await prisma.item.findMany({
            distinct:['order'],
            select:{
               order:true
            }
        })
        const familyOptions = await prisma.item.findMany({
            distinct:['family'],
            select:{
               family:true
            }
        })
        const genusOptions = await prisma.item.findMany({
            distinct:['genus'],
            select:{
               genus:true
            }
        })
        const speciesOptions = await prisma.item.findMany({
            distinct:['species'],
            select:{
               species:true
            }
        })
        const areaOptions = await prisma.item.findMany({
            distinct:['area'],
            select:{
               area:true
            }
        })
        const originOptions = await prisma.item.findMany({
            distinct:['origin'],
            select:{
               origin:true
            }
        })
        const countryOptions = await prisma.item.findMany({
            distinct:['country'],
            select:{
               country:true
            }
        })

/*         const fromOptions = await prisma.item.findMany({
            distinct:['from'],
            select:{
               from:true
            }
        })
        const toOptions = await prisma.item.findMany({
            distinct:['to'],
            select:{
               to:true
            }
        }) */

        const allFieldsOptions = await Promise.all
        ([groupOptions, orderOptions, familyOptions, 
            genusOptions, speciesOptions, areaOptions, 
            originOptions, countryOptions, /*  fromOptions, toOptions */
        ])
        return allFieldsOptions;

    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch field options!')
    }    
}


/* export async function getGroupOptions():Promise<PrismaOption<'group'>[]>{
   const options = await prisma.item.findMany({
        distinct:['group'],
        select:{
            group:true, 
        }
    })
    console.log(options)
    return options;
}

export async function getOrderOptions():Promise<PrismaOption<'order'>[]>{
    const options = await prisma.item.findMany({
         distinct:['order'],
         select:{
            order:true
         }
     })
     return options;
 }

 export async function getFamilyOptions():Promise<PrismaOption<'family'>[]>{
    const options = await prisma.item.findMany({
         distinct:['family'],
         select:{
            family:true
         }
     })
     return options;
 }

 export async function getGenusOptions():Promise<PrismaOption<'genus'>[]>{
    const options = await prisma.item.findMany({
         distinct:['genus'],
         select:{
            genus:true
         }
     })
     return options;
 }

 export async function getSpeciesOptions():Promise<PrismaOption<'species'>[]>{
    const options = await prisma.item.findMany({
         distinct:['species'],
         select:{
            species:true
         }
     })
     return options;
 }

 export async function getAreaOptions():Promise<PrismaOption<'area'>[]>{
    const options = await prisma.item.findMany({
         distinct:['area'],
         select:{
            area:true
         }
     })
     return options;
 }

 export async function getOriginOptions():Promise<PrismaOption<'origin'>[]>{
    const options = await prisma.item.findMany({
         distinct:['origin'],
         select:{
            origin:true
         }
     })
     return options;
 }

 export async function getCountryOptions():Promise<PrismaOption<'country'>[]>{
    const options = await prisma.item.findMany({
         distinct:['country'],
         select:{
            country:true
         }
     })
     return options;
 }

 */


 export async function getItems(
    {group,order,family,genus,species,area,origin,country}
    ):Promise<Item[]>{
    const items = await prisma.item.findMany({
        where:{
            "group": group, 
            "order": order,         
            "family": family,        
            "genus": genus,          
            "species": species,        
            "area": area,           
            "origin": origin,        
            "country": country      
        }
    })
    return items;
 } 