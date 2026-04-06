import { BiSearch } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import UserCard from "./UserCard";

export default function ExistingUser(){
    return(
        <div className="flex flex-col gap-4">

            {/* Search Section */}
            <div className="flex gap-3">

                <div className="rounded py-1 pl-4 pr-1 w-120 h-[2rem] border border-[#DADADA] flex gap-4 justify-between items-center">

                    <input placeholder="Search for user" type="text" className="outline-none w-full"/>

                    <BiSearch size={24} color="#9C9C9C" className="hover:cursor-pointer"/>

                </div>

                <div className="border border-[#DADADA] w-[2rem] h-[2rem] rounded flex justify-center items-center">
                    <GiSettingsKnobs color="#9C9C9C" size={24}/>
                </div>

            </div>

            {/* Cards */}
            <div className="flex flex-wrap gap-4">

                <UserCard username="prerna_verma" email="prernaverma1@kpmg.com"/>
                <UserCard username="indresh_bh" email="indreshbh1@kpmg.com"/>
                <UserCard username="prerak_garg" email="prerakgarg1@kpmg.com"/>

            </div>

        </div>
    )
}