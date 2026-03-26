export default function SettingsLink(){
    return(
        <div className="w-[12.625rem] bg-white border border-[#E9E9E9] h-full py-8 px-4 flex flex-col justify-between">

            {/* Top Section */}
            <div className="flex flex-col gap-8">

                {/* Quick Links Section */}
                <div className="flex flex-col gap-3">

                    {/* Heading */}
                    <div className="font-bold text-sm">Quick Access Links:</div>
                    
                    {/* Admin Dashboard */}
                    <div className="bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer">Admin Dashboard</div>

                    {/* User Settings */}
                    <div className="bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer">User Settings</div>

                    {/* Access Settings */}
                    <div className="bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer">Access Settings</div>

                    {/* Team Settings */}
                    <div className="bg-[#F5F5F5] text-[#515151] hover:bg-[#98AED5] duration-75 rounded py-2 px-3 hover:text-white hover:cursor-pointer">Team Settings</div>
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