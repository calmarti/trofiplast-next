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
            },
            orderBy: {
                group: 'asc'
            }
        })    
        console.log(groupOptions);
        const orderOptions = await prisma.item.findMany({
            distinct:['order'],
            select:{
               order:true
            },
            orderBy: {
                order: 'asc'
            }
        })
        const familyOptions = await prisma.item.findMany({
            distinct:['family'],
            select:{
               family:true
            },
            orderBy: {
                family: 'asc'
            }
        })
        const genusOptions = await prisma.item.findMany({
            distinct:['genus'],
            select:{
               genus:true
            },
            orderBy: {
                genus: 'asc'
            }
        })
        const speciesOptions = await prisma.item.findMany({
            distinct:['species'],
            select:{
               species:true
            },
            orderBy: {
                species: 'asc'
            }
        })
        const areaOptions = await prisma.item.findMany({
            distinct:['area'],
            select:{
               area:true
            },
            orderBy: {
                area: 'asc'
            }
        })
        const originOptions = await prisma.item.findMany({
            distinct:['origin'],
            select:{
               origin:true
            },
            orderBy: {
                origin: 'asc'
            }
        })
        const countryOptions = await prisma.item.findMany({
            distinct:['country'],
            select:{
               country:true
            },
            orderBy: {
                country: 'asc'
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
    {group,order,family,genus,species,area,origin,country}:
    {group?:string,order?:string,family?:string,genus?:string,species?:string,area?:string,origin?:string,country?:string}
    ):Promise<Item[]>{
        const filters = {}
        if (group) filters['group']=group;
        if (order) filters['order']=order;
        if (family) filters['family']=family;
        if (genus) filters['genus']=genus;
        if (species) filters['species']=species;
        if (area) filters['area']=area;
        if (origin) filters['origin']=origin;
        if (country) filters['country']=country;

    const items = await prisma.item.findMany({
        where: filters
    })
    return items;
 } 


 