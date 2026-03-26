"use client"

import { useState } from "react"
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react"
import SolutionCard from "./CardsLanding"
import CreateAppDropdown from "../CreateApp"

// Mock data arrays matching the design
const featuredSolutions = [
    {
        id: 1,
        title: "Agent Forge Artificial Intelligence",
        description: "Build, test, & benchmark AI agents to automatically find the best LLM for app.",
        tags: ["#Multi Agent", "#Strategic"],
        gradient: "#875FA9",
    },
    {
        id: 15,
        title: "Agent Forge Artificial Intelligence",
        description: "Build, test, & benchmark AI agents to automatically find the best LLM for app.Build, test, & benchmark AI agents to automatically find the best LLM for app.Build, test, & benchmark AI agents to automatically find the best LLM for app.Build, test, & benchmark AI agents to automatically find the best LLM for app.Build, test, & benchmark AI agents to automatically find the best LLM for app.Build, test, & benchmark AI agents to automatically find the best LLM for app.Build, test, & benchmark AI agents to automatically find the best LLM for app.Build, test, & benchmark AI agents to automatically find the best LLM for app.",
        tags: ["#Multi Agent", "#Strategic"],
        gradient: "#6661C8",
    },
    {
        id: 2,
        title: "NewMind Artificial Intelligence",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Reporting"],
        gradient: "#CA6691",
    },
    {
        id: 3,
        title: "Adani Conversational BI",
        description: "It helps user query the financial information calculate and analyse data",
        tags: ["#Multi Model"],
        gradient: "#5575D9",
    },
    {
        id: 4,
        title: "Procurement Agent",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Comparision"],
        gradient: "#5384DD",
    }
]

const financeSolutions = [
    {
        id: 5,
        title: "Alpha Sense",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Reporting", "#Finance"],
        gradient: "from-blue-500 to-blue-600",
    },
    {
        id: 6,
        title: "Axis Capital",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Number", "#Finance", "#Compare"],
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        id: 7,
        title: "CLO_CDS",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Report"],
        gradient: "from-slate-600 to-slate-700",
    },
    {
        id: 8,
        title: "Company Analysis",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Reporting", "#Strategic"],
        gradient: "from-fuchsia-500 to-pink-500",
    }
]

export default function SolutionsMarketplace() {
    const [activeTab, setActiveTab] = useState("completed")

    return (
        <div className="w-full flex flex-col gap-8 pb-10">

            {/* --- HEADER SECTION --- */}
            <div className="flex justify-between items-end">
                <div className="pt-2">
                    <p className="text-[14px] text-gray-800 font-medium mb-0.5">Welcome to the</p>
                    <h2 className="text-[28px] font-bold text-slate-900 tracking-tight leading-none">
                        Solutions Marketplace
                    </h2>
                </div>

                <div className="flex items-center gap-5">
                    {/* Search Bar */}
                    <div className="relative flex items-center">
                        <div className="absolute left-3 border-r border-gray-200 pr-2">
                            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a solution..."
                            className="pl-12 pr-10 py-2 w-[300px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#4B3B8E] focus:ring-1 focus:ring-[#4B3B8E] text-sm text-gray-700 placeholder:text-gray-400 shadow-sm"
                        />
                        <Search className="w-4 h-4 text-gray-400 absolute right-3" />
                    </div>

                    {/* Create Button */}
                        <CreateAppDropdown/>

                </div>
            </div>

            {/* --- TABS SECTION --- */}
            <div className="flex border-b border-gray-200 mt-2">
                <button
                    onClick={() => setActiveTab("completed")}
                    className={`pb-3 px-2 mr-6 font-semibold text-sm border-b-2 flex items-center gap-2 transition-colors ${activeTab === "completed"
                        ? "border-[#3B2C85] text-[#3B2C85]"
                        : "border-transparent text-gray-500 hover:text-gray-800"
                        }`}
                >
                    Completed
                    <span
                        className={`py-0.5 px-2 rounded-full text-[10px] font-bold ${activeTab === "completed" ? "bg-[#3B2C85] text-white" : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        12
                    </span>
                </button>

                <button
                    onClick={() => setActiveTab("draft")}
                    className={`pb-3 px-2 font-semibold text-sm border-b-2 flex items-center gap-2 transition-colors ${activeTab === "draft"
                        ? "border-[#3B2C85] text-[#3B2C85]"
                        : "border-transparent text-gray-500 hover:text-gray-800"
                        }`}
                >
                    Draft
                    <span
                        className={`py-0.5 px-2 rounded-full text-[10px] font-bold ${activeTab === "draft" ? "bg-[#3B2C85] text-white" : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        03
                    </span>
                </button>
            </div>

            {/* --- GRID SECTION --- */}
            <div className="flex flex-col gap-8 mt-2">

                {/* Featured Solutions */}
                <div>
                    <h3 className="text-[20px] font-bold text-slate-900 mb-4">Featured Solutions</h3>
                    <div className="flex flex-wrap gap-6">
                        {featuredSolutions.map((solution) => (
                            <SolutionCard key={solution.id} {...solution} />
                        ))}
                    </div>
                </div>

                {/* Finance Solutions */}
                <div>
                    <h3 className="text-[20px] font-bold text-slate-900 mb-4 pt-4">Finance Solutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                        {financeSolutions.map((solution) => (
                            <SolutionCard key={solution.id} {...solution} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}