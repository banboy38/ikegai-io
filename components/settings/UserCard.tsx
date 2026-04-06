import { BiEdit } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { GoNoEntry } from "react-icons/go";

export default function UserCard({username, email}: {username: string, email: string}){
    return(

        // Card Body
        <div className="border border-[#CBCBCB] w-[20rem] rounded-md flex flex-col">

            {/* Top Section */}
            <div className="border-b border-[#D9D9D9] h-[4rem] flex gap-4 items-center justify-between px-3 py-2">

                <div className="flex items-center gap-4">

                    <div className="w-6 h-6 text-white font-extrabold text-center rounded-full bg-[#7678BF] ">
                        {username.charAt(0).toUpperCase()}
                    </div>

                    {/* username/Email */}
                    <div className="flex flex-col">

                        <div className="font-bold">
                            {username}
                        </div>

                        <div className="text-xs font-[#757575]">
                            {email}
                        </div>


                    </div>

                </div>

                {/* Active/Inactive */}
                <div className=" bg-[#7CC75B1A] h-[1.5rem] flex items-center gap-2 px-2 py-1 font-sm text-[#707070] self-start">

                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />

                    <div className="text-[0.67rem]">
                        Active                    
                    </div>

                </div>

            </div>
            
            {/* bottom section */}
            <div className=" h-[4rem] flex gap-4 items-center justify-between px-3 py-2">

                <div className="text-[#9F9F9F] text-sm">
                    <div>Created : 12/02/26</div>
                    <div>Last Active : 25-02-25</div>
                </div>

                <div className="flex gap-1 self-end mb-2">
                    <BiEdit size={18} className="hover:cursor-pointer"/>
                    <GoNoEntry size={18} className="hover:cursor-pointer"/>
                    <FiTrash2 size={18} className="hover:cursor-pointer"/>
                </div>

            </div>

        </div>
    )
}