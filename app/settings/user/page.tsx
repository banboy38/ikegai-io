import UserSection from "@/components/settings/UserSection";

export default function User(){
    return(
        <>
            {/* Heading Section */}
            <div className="flex flex-col gap-2 pt-8 pb-4 px-4 ">
    
                {/* Heading */}
                <div className="text-3xl font-bold">User Settings</div>
        
                {/* Details */}
                <div className="text-[#928E8E]">
                    <span>Admin </span>|
                    <span> Last Updated: <span className="font-bold">12/02/26</span> </span>|
                    <span> Created On: <span className="font-bold">08/12/25</span> </span>
                </div>
    
            </div>
    
            <UserSection/>
        </>
    )
}