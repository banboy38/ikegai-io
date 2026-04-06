"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import SolutionCard from "./CardsLanding"
import CreateAppDropdown from "../CreateApp"
import "../../styles/css/SolutionsMarketplace.css"

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
        description: "It helps user query the financial information calculate and analyze data",
        tags: ["#Multi Model"],
        gradient: "#5575D9",
    },
    {
        id: 4,
        title: "Procurement Agent",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Comparison"],
        gradient: "#5384DD",
    }
]

const financeSolutions = [
    {
        id: 5,
        title: "Alpha Sense",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Reporting", "#Finance"],
        gradient: "#3B82F6", 
    },
    {
        id: 6,
        title: "Axis Capital",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Number", "#Finance", "#Compare"],
        gradient: "#8B5CF6", 
    },
    {
        id: 7,
        title: "CLO_CDS",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Report"],
        gradient: "#475569", 
    },
    {
        id: 8,
        title: "Company Analysis",
        description: "AI agent automatically evaluates which LLM performs best for your workflow.",
        tags: ["#Reporting", "#Strategic"],
        gradient: "#D946EF", 
    }
]

export default function SolutionsMarketplace() {
    const [activeTab, setActiveTab] = useState("completed")

    return (
        <div className="marketplace-container">

            {/* --- HEADER SECTION --- */}
            <div className="marketplace-header">
                <div>
                    <p className="welcome-text">Welcome to the</p>
                    <h2 className="marketplace-title">
                        Solutions Marketplace
                    </h2>
                </div>

                <div className="header-actions">
                    {/* Search Bar */}
                    <div className="search-container">
                        <div className="search-icon-left">
                            <SlidersHorizontal size={16} color="#9ca3af" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a solution..."
                            className="search-input"
                        />
                        <Search size={16} className="search-icon-right" />
                    </div>

                    {/* Create Button */}
                    <CreateAppDropdown/>
                </div>
            </div>

            {/* --- TABS SECTION --- */}
            <div className="tabs-section">
                <button
                    onClick={() => setActiveTab("completed")}
                    className={`tab-button ${activeTab === "completed" ? "active" : ""}`}
                >
                    Completed
                    <span className={`tab-badge ${activeTab === "completed" ? "active" : "inactive"}`}>
                        12
                    </span>
                </button>

                <button
                    onClick={() => setActiveTab("draft")}
                    className={`tab-button ${activeTab === "draft" ? "active" : ""}`}
                >
                    Draft
                    <span className={`tab-badge ${activeTab === "draft" ? "active" : "inactive"}`}>
                        03
                    </span>
                </button>
            </div>

            {/* --- GRID SECTION --- */}
            <div className="grid-section">

                {/* Featured Solutions */}
                <section>
                    <h3 className="section-title">Featured Solutions</h3>
                    <div className="cards-grid">
                        {featuredSolutions.map((solution) => (
                            <SolutionCard key={solution.id} {...solution} />
                        ))}
                    </div>
                </section>

                {/* Finance Solutions */}
                <section>
                    <h3 className="section-title pt-4">Finance Solutions</h3>
                    <div className="cards-grid">
                        {financeSolutions.map((solution) => (
                            <SolutionCard key={solution.id} {...solution} />
                        ))}
                    </div>
                </section>
                

            </div>
        </div>
    );
}
