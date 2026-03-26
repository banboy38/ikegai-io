"use client"

import {
    Home, Bot, Waypoints, Database, Network, Table,
    LayoutGrid, Power, Info
} from "lucide-react"

export default function SideBar() {
    return (
        <aside className="w-[12.625rem] h-full bg-[#F7F7F7] border-r border-gray-100 flex flex-col pt-8 justify-between shrink-0">

            {/* Top Section: Menus */}
            <div>

                <div className="py-2">
                    {/* Marketplace Section */}
                    <div className="px-6 mb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Marketplace
                    </div>
                    <nav className="space-y-0.5 mb-6">
                        <a href="#" className="flex items-center gap-3 px-6 py-2.5 bg-[#EEF2F9] text-[#2951A3] border-l-4 border-[#2951A3] font-semibold text-sm">
                            <Home className="w-[18px] h-[18px]" />
                            Solutions
                        </a>
                        <a href="#" className="flex items-center gap-3 px-6 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors">
                            <Bot className="w-[18px] h-[18px]" />
                            Agent
                        </a>
                        <a href="#" className="flex items-center gap-3 px-6 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors">
                            <Waypoints className="w-[18px] h-[18px]" />
                            Tools & MCP
                        </a>
                    </nav>

                    {/* Knowledge Hub Section */}
                    <div className="px-6 mb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Knowledge Hub
                    </div>
                    <nav className="space-y-0.5 mb-6">
                        <a href="#" className="flex items-center gap-3 px-6 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors">
                            <Database className="w-[18px] h-[18px]" />
                            Dataset
                        </a>
                        <a href="#" className="flex items-center gap-3 px-6 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors">
                            <Network className="w-[18px] h-[18px]" />
                            Graph
                        </a>
                        <a href="#" className="flex items-center gap-3 px-6 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors">
                            <Table className="w-[18px] h-[18px]" />
                            Table
                        </a>
                    </nav>

                    {/* IKE.GAI Powered Section */}
                    <div className="px-6 mb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        IKE.GAI Powered
                    </div>
                    <nav className="space-y-0.5">
                        <a href="#" className="flex items-center gap-3 px-6 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors">
                            <LayoutGrid className="w-[18px] h-[18px]" />
                            AI Apps
                        </a>
                    </nav>
                </div>
            </div>

            {/* Bottom Section: User Profile */}
            <div className="p-4 mb-2 border-t border-gray-50">
                <div className="flex items-center justify-between px-3 py-2 border border-[#4B3B8E] rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#EEEDF5] flex items-center justify-center">
                            <Info className="w-3 h-3 text-[#4B3B8E]" />
                        </div>
                        <span className="text-sm font-medium text-[#4B3B8E]">ikegaiuser</span>
                    </div>
                    <Power className="w-4 h-4 text-[#4B3B8E]" />
                </div>
            </div>
        </aside>
    )
}