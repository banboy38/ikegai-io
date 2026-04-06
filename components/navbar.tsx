"use client"

import { Bell, Moon } from "lucide-react"

export default function NavBar() {
    return (
        <header className="h-16 px-8 flex items-center bg-[#F7F7F7] border-b border-[#E9E9E9]">

            {/* Logo */}
            <div className="h-20 flex items-center">
                <img src="/logokpmg.svg" alt="Logo" width={100} />
            </div>

            {/* Notification & Theme Toggles */}
            {/* ml-auto pushes this entire block to the far right */}
            <div className="flex items-center gap-4 ml-auto border-l border-gray-200 pl-6">
                <button className="relative text-gray-400 hover:text-gray-600 transition-colors">
                    <Bell className="w-[22px] h-[22px]" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Moon className="w-[22px] h-[22px]" />
                </button>
            </div>

        </header>
    )
}