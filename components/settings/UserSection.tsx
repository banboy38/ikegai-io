'use client'

import { useState } from "react"
import NewUser from "./NewUser"

export default function UserSection(){

    const [isNewUser, setIsNewUser] = useState(true)

    return(
        <div className="w-full ">

            {/* Toggle for new and existing users */}
            <div className="flex flex-row w-full border-b border-[#E9E9E9]">

                {/* New User */}
                <div onClick={()=>{setIsNewUser(true)}} style={{color:isNewUser ? "#4144A7" : "#797575"}} className={` w-[8.2rem] py-3 px-1 text-center hover:cursor-pointer ${isNewUser ? "border-b-4 border-[#4144A7] font-bold" : ""} duration-100`}>New User</div>

                {/* Existing User */}
                <div onClick={()=>{setIsNewUser(false)}} style={{color:isNewUser ? "#797575" : "#4144A7"}} className={` w-[8.2rem] py-3 px-1 text-center hover:cursor-pointer ${isNewUser ? "" : "border-b-4 border-[#4144A7] font-bold"} duration-100`}>Existing User</div>

            </div>

            <div className="p-8">

                {
                    isNewUser
                    ?
                    <NewUser/>
                    :
                    <div>
                        dsojfojdsoj
                    </div>
                }

            </div>

        </div>
    )
}