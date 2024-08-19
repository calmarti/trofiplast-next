// import { getGroupOptions, getOrderOptions } from "../lib/data";

import { GetFieldsOptions } from "../lib/data";
import NavBar from "../ui/common/navbar";
import Search from "../ui/search/Search";

//TODO: 
//problema: no cambia a la ruta /search hasta que no termina la llamada!
//el deploy de vercel no da este problema, puede ser tema de la conexión de apps
//de next locales con bd grandes, investigar como mitigar esto!
//los logs de prisma sugieren que el problema es el establecimiento de la conexión
//"Starting a postgresql pool with 17 connections in PgBouncer mode"
//(primera línea del log cuando se logra conectar pero demora)
//find out what's a pool connection in this context
//si es un tema de la conexión inicial no tendría porque perturbar el desarrollo
//otra opción es crear una db postgres en local


export default async function Page() {
  // const [groupResults, orderResults] = await Promise.all([getGroupOptions(), getOrderOptions()])
    
  // const groupOptions = groupResults.map((item)=>{
  //   return {
  //     value: item.group, label: item.group
  //   }
  // })

 
  const fieldsOptionsArray = await GetFieldsOptions();
  console.log('fieldOptionsArray' , fieldsOptionsArray);

  const fieldsOptions: OptionType[][] = fieldsOptionsArray.map(
    (options/* : PrismaOption<"Type">[] */) => {
      return options.map((option) => {
        return {
          value: option[Object.keys(option)[0]],
          label: option[Object.keys(option)[0]],
          fieldName: Object.keys(option)[0],
        };
      });
    }
  );

  console.log('fieldOptions', fieldsOptions)

  return (
    <div className="mb-40">
      <NavBar></NavBar>
      <Search 
      fieldsOptions={fieldsOptions}
      // groupOptions={groupOptions}
      // orderOptions={orderOptions}
      ></Search>
    </div>
  )
}