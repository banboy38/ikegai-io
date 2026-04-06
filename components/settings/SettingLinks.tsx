'use client'

import { usePathname, useRouter } from "next/navigation"

export default function SettingsLink(){

    const pathname = usePathname()
    const router = useRouter()
    
    return(
        <div className="w-[12.625rem] bg-white border border-[#E9E9E9] h-full py-8 px-4 flex flex-col justify-between">

            {/* Top Section */}
            <div className="flex flex-col gap-8">

                {/* Quick Links Section */}
                <div className="flex flex-col gap-3">

                    {/* Heading */}
                    <div className="font-bold text-sm">Quick Access Links:</div>
                    
                    {/* Admin Dashboard */}
                    <div onClick={()=>{router.push("/settings/admin")}} className={`bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer ${pathname.includes('dashboard') ? "border-l-4 border-[#4144A7]" : ""} `}>Admin Dashboard</div>

                    {/* User Settings */}
                    <div onClick={()=>{router.push("/settings/user")}} className={`bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer ${ (pathname.includes('user') || pathname === "/settings") ? "border-l-4 border-[#4144A7]" : ""}`}>User Settings</div>

                    {/* Access Settings */}
                    <div onClick={()=>{router.push("/settings/access")}} className={`bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer ${pathname.includes('access') ? "border-l-4 border-[#4144A7]" : ""}`}>Access Settings</div>

                    {/* Team Settings */}
                    <div onClick={()=>{router.push("/settings/team")}} className={`bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer ${pathname.includes('team') ? "border-l-4 border-[#4144A7]" : ""}`}>Team Settings</div>
                </div>

                {/* New Links Section */}
                <div className="flex flex-col gap-3">

                    {/* Heading */}
                    <div className="font-bold text-sm">New Addition Links:</div>
                    
                    {/* LLM */}
                    <div className="bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer">LLM</div>

                    {/* Tools and MCP */}
                    <div className="bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer">Tools and MCP(s)</div>

                    {/* Skills */}
                    <div className="bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer">Skills</div>
                </div>

            </div>


            {/* Bottom Section */}
            <div className="flex flex-col gap-3">

                {/* Help */}
                <div className=" border-2 border-[#DBD6D6] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:border-[#98AED5] hover:cursor-pointer">Help</div>

                {/* Support */}
                <div className=" border-2 border-[#DBD6D6] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:border-[#98AED5] hover:cursor-pointer">Support</div>

            </div>


        </div>
    )
}