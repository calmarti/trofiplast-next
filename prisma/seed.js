const fs = require('fs');
const csv = require('csv-parser');
const filePath = 'trofiplast070423.csv';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const readCSVFile = (filePath) => {
    return new Promise((resolve, reject)=>{
        const results = [];
        fs.createReadStream(filePath)
        .pipe(csv({ separator: ';' }))
        .on('data', (row)=> results.push(row))
        .on('error', (err)=>reject(err))       
        .on('end', ()=> resolve(results));    
    })
}

const seedDb = async (data)=>{  
    try {
        await prisma.item.createMany({data}); 
        console.log("DB has been seeded succesfully") 
    } 
    catch (err) {
        console.error("Error while seeding the database:", err)
    }
    finally{
        prisma.$disconnect(); 
    }
}

const main = async() =>{
   try {
    const data = await readCSVFile(filePath);
    await seedDb(data);    
   } catch (err) {
    console.error("Error:", err);
   }
}

main();


