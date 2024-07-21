import { getGroupOptions, getOrderOptions } from "../lib/data";
import NavBar from "../ui/common/navbar";
import Search from "../ui/search/search";

//TODO: 
//problema: no cambia a la ruta /search hasta que no termina la llamada!
//el deploy de vercel no da este problema, puede ser tema de la conexión de apps
//de next locales con bd grandes, investigar como mitigar esto!

//problema: el degradado del background color es más oscuro en /search en el deploy de vercel, 
//y también se ve tenuemente el borde del navbar!

export default async function Page() {
  const [groupResults, orderResults] = await Promise.all([getGroupOptions(), getOrderOptions()])
    

  
  const groupOptions = groupResults.map((item)=>{
    return {
      value: item.group, label: item.group
    }
  })
  
  return (
    <>
      <NavBar></NavBar>
      <Search 
      groupOptions={groupOptions}
      // orderOptions={orderOptions}
      ></Search>
    </>
  )
}