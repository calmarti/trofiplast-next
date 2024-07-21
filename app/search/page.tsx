import { getGroupOptions, getOrderOptions } from "../lib/data";
import NavBar from "../ui/common/navbar";
import Search from "../ui/search/search";

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