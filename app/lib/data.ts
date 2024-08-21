import { Item } from '@prisma/client';
import prisma from './prisma';


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

    try {
        const items = await prisma.item.findMany({
            where: filters
        })
        return items;        
    } catch (error) {
        throw new Error('Failed to fetch items!: ' + error)
    }
 } 


 