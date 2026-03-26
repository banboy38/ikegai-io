'use client'

import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function NewUser(){

    const mailList = ["anihalde@visa.com", "anvigupt@visa.com", "vasokan@visa.com", "aditih@visa.com", "aethirkot@visa.com", "arpitdwi@visa.com", ]

    const [mail, setMail] = useState("")

    const [selectedMail, setSelectedMail] = useState<string[]>([])

    const [seePassword, setSeePassword] = useState(false)

    const [payload, setPayload] = useState<{
        emails: string[];
        userId: string;
        password: string;
        team: string;
        access: string;
    }>(
        {
            emails : [],
            userId : "",
            password : "",
            team : "",
            access : ""
        }
    )

    return(
        <div className="flex flex-col gap-6">

            {/* Email */}
            <div className="flex flex-col">

                <div className="text-[#525252] font-bold">
                    User Credentials Setup
                </div>
                <div className="text-[#848484] text-sm">
                    This will help you create login id and password for the user
                </div>

            </div>

            {/* Search Mail */}
            <div className="flex flex-col">

                <div onClick={() => document.getElementById("mail")?.focus()} className={`border border-[#4144A7] w-200 ${ mail ? "max-h-[16rem]" : "max-h-10" } duration-150 rounded flex flex-col`}>

                    <div className="flex items-center gap-2 pl-2">
                        <FaMagnifyingGlass color="#686868" className={` ${mail ? "w-0" : "w-5"} duration-100`} />

                        <input value={mail} onChange={(e)=>{setMail(e.target.value)}} id="mail" type="text" className="w-full outline-0 h-10" placeholder="Search for e-mail..."/>

                    </div>

                    <div className="flex flex-col w-full overflow-auto">
                        {
                            mail != "" 
                            &&
                            mailList
                            .filter((filteredMail) => filteredMail.includes(mail) && !selectedMail.includes(filteredMail))
                            .map((email, idx)=>{
                                return(
                                    <div 
                                        onClick={()=>{
                                            setMail("")
                                            setSelectedMail([...selectedMail, email])
                                            setPayload(
                                                {
                                                    ...payload,
                                                    emails : [...selectedMail, email]
                                                }
                                            )
                                        }}
                                        key={String(email + idx)}
                                        className={`min-h-10 hover:bg-[#F5F5F5] w-full flex items-center pl-4 hover:cursor-pointer ${idx != 0 && "border-t"} `}
                                    >
                                        {email}
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>

            {/* Selected mail badge */}
            <div className="flex flex-wrap gap-2 w-full -mt-4">

                {
                    selectedMail
                    .map((email, idx)=>{
                        return(
                            <div key={email+idx} className="bg-[#4144A714] py-2 px-4 rounded text-sm relative">
                                {email}

                                <div
                                    onClick={()=>{
                                        const temp = selectedMail
                                        const index = temp.findIndex((item) => item === email)
                                        setSelectedMail([...temp.slice(0, index), ...temp.slice(index+1)])
                                        setPayload(
                                                {
                                                    ...payload,
                                                    emails : [...temp.slice(0, index), ...temp.slice(index+1)]
                                                }
                                            )
                                    }}
                                    className="w-3 h-3 rounded-full absolute -right-0.5 -top-0.5 bg-[#4144a721] flex justify-center items-center hover:cursor-pointer"
                                >
                                    <CgClose size={8}/>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
            
            {/* User ID and Password */}
            <div className="w-full flex gap-4">

                {/* User ID */}
                <div className="flex flex-col w-98">

                    <div className="font-bold text-[#656566]">User ID<span className="text-red-600 ml-1">*</span></div>
                    <input
                        value={payload.userId}
                        onChange={(e)=>{
                            setPayload(
                                {
                                    ...payload,
                                    userId: e.target.value
                                }
                            )
                        }}
                        className="border border-[#999999] outline-none rounded h-8 px-2 py-1 text-[#6A6969]" type="text"
                    />

                </div>

                {/* Set Password */}
                <div className="flex flex-col w-98">

                    <div className="font-bold text-[#656566]">Set Password<span className="text-red-600 ml-1">*</span></div>
                    <div className="border border-[#999999] outline-none rounded h-8 px-2 flex items-center gap-2">
                        <div
                            onClick={()=>{
                                setSeePassword(!seePassword)
                            }}
                        >
                            {
                                seePassword
                                ?
                                    <BsEyeSlash size={20} color="#595959"/>
                                :
                                    <BsEye size={20} color="#595959"/>

                            }
                        </div>
                        <input
                            value={payload.password}
                            onChange={(e)=>{
                                    setPayload(
                                        {
                                            ...payload,
                                            password: e.target.value
                                        }
                                    )
                                }
                            }
                            className="w-full outline-none rounded h-8 text-[#6A6969] -mt-0.5" id="setPassword" type={ seePassword ? "text" : "password"}
                        />
                    </div>

                </div>


            </div>

            <div className="flex flex-col">

                <div className="text-[#525252] font-bold">
                    Assign Team <span className="text-red-600 font-bold">*</span>
                </div>

                <div className="">
                    *Note :  To add/remove any component from here, please visit Team settings page
                </div>

            </div>

        </div>
    )
}