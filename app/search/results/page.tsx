import NavBar from "@/app/ui/common/navbar"
import SearchResults from "@/app/ui/search/SearchResults";

export default async function Page() {
    return  (
    <>
     <div className="flex flex-col justify-center items-center pb-36 h-screen">
    <NavBar/>
    <SearchResults/> 
    </div>
    </>
    );
}