import { Edit, Eye } from "lucide-react";
import { CgSearch } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";
import Toggle from "../ui/Toggle/toggle";

export default function AccessSettings(){

    const pageAccess : string[] = ["Solutions", "Agent", "Dataset", "Prompt Library"]
    const pages : string[] = ["Solutions", "Agent", "Dataset", "Prompt Library"]
    
    return(
        <div className="mt-2 flex flex-col gap-2 w-240 ">
            

            {/* Page Level Access */}
            <>
                {/* Heading */}
                <div className="font-bold text-[#525252]">
                    Page Level Access
                </div>

                {/* Custom Table */}
                <div className="flex flex-col w-full border border-[#C2C2C2] rounded-lg">

                    {/* Headers */}
                    <div className="flex font-bold w-full items-center justify-between px-4 py-3 bg-[#4144A738]">

                        <div className="flex items-center w-[60%]">

                            <div className="w-[4rem] text-center">
                                Sno.
                            </div>

                            <div>
                                Pages
                            </div>

                        </div>

                        <div className="flex justify-evenly items-center w-[40%]">

                            <div className="flex gap-1 items-center justify-center">
                                <Edit size={18}/> Editor
                            </div>

                            <div className="flex gap-1 items-center justify-center">
                                <Eye/> Viewer
                            </div>

                            <div className="flex gap-1 items-center justify-center">
                                <RiAdminFill/> Owner
                            </div>

                        </div>

                    </div>

                    {/* Rows */}
                    {
                        pageAccess.map(
                            (page, index) => {
                                return(
                                    
                                    <div key={String(page) + String(index)} className="flex w-full items-center justify-between px-4 py-3 border-t">

                                        <div className="flex items-center w-[60%]">

                                            <div className="w-[4rem] text-center">
                                                {index+1}.
                                            </div>

                                            <div>
                                                {page}
                                            </div>

                                        </div>

                                        <div className="flex justify-evenly items-center w-[40%]">

                                            <div className="flex gap-1 items-center justify-center">
                                                <input name={page} type="radio"/>
                                            </div>

                                            <div className="flex gap-1 items-center justify-center">
                                                <input name={page} type="radio"/>
                                            </div>

                                            <div className="flex gap-1 items-center justify-center">
                                                <input name={page} type="radio"/>
                                            </div>

                                        </div>

                                    </div>

                                )
                            }
                        )
                    }
                </div>
            </>

            {/* Component Level Access */}
            <>
                {/* Heading */}
                <div className="font-bold text-[#525252] mt-2">
                    Component Level Access
                </div>

                {/* Custom Table */}
                <div className="flex flex-col w-full border border-[#C2C2C2] rounded-lg">

                    {/* Headers */}
                    <div className="flex font-bold w-full items-center justify-between px-4 py-3 bg-[#4144A738] rounded-t-md">

                        {/* Sno. & Pages */}
                        <div className="flex items-center w-[60%]">

                            <div className="w-[4rem] text-center">
                                Sno.
                            </div>

                            <div>
                                Pages
                            </div>

                        </div>

                        <div className="flex justify-end mr-6">
                            Access
                        </div>

                    </div>

                    {/* Rows */}
                    {
                        pages.map((page, idx)=>{
                            return(
                                <div key={page+idx} className="flex items-center border-b-2 border-[#E7E7E7] bg-[#F8F8F8] rounded-md m-4">

                                    {/* Sno.*/}
                                    <div className="w-[6rem] h-full grid place-content-center">
                                        {idx+1}.
                                    </div>

                                    {/* Pages  */}
                                    <div className="w-[12rem] h-full">
                                        {page}
                                    </div>

                                    {/* Components */}
                                    <div className="flex flex-col border-l  min-h-24 max-h-55 w-full overflow-auto ">

                                        {/* Search Bar Area (????)*/}
                                        <div className=" px-6 py-3 flex justify-between items-center">

                                            {/* Search Bar */}
                                            <div className="border border-[#7A7A7A] bg-white w-[12rem] rounded flex gap-1 items-center px-2 py-1">
                                                    <CgSearch size={16} color="#686868"/>
                                                    <input type="text" className="outline-none bg-white w-[8rem] text-sm" placeholder="Search for solution..."/>
                                            </div>

                                            {/* Select/Deselect */}
                                            <div className="w-[24rem] flex gap-2">

                                                <div className="py-1 h-[1.8rem] w-[6rem] bg-[#4144A7] text-white text-xs flex justify-center items-center  px-1 rounded hover:cursor-pointer active:scale-95 select-none">
                                                    Select All
                                                </div>

                                                <div className="py-1 h-[1.8rem] w-[6rem] bg-white text-[#7A7A7A] border border-[#7A7A7A] text-xs flex justify-center items-center  px-1 rounded hover:cursor-pointer active:scale-95 select-none">
                                                    Deselect All
                                                </div>
                                                

                                            </div>

                                        </div>

                                        {/* Component Name */}
                                        <>
                                            {
                                                ["Agent Forge Artificial Intelligence","Procurement Agent","Company Analysis","Alpha Sense",].map((foo, bar)=>{
                                                    return(
                                                        <div className="border-t px-6 py-2 w-full flex justify-between items-center">

                                                            <span>{foo}</span>

                                                            <Toggle/>

                                                        </div>
                                                    )
                                                })
                                            }
                                        </>                                        
                                        
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </>

        </div>
    )
}