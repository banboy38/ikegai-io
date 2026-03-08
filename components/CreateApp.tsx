"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react'; // Kept ChevronDown for the button arrow
import './../styles/css/CreateApp.css';

const CreateAppDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#3B2C85] hover:bg-[#2A1F63] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-sm transition-colors"
            >
                + Create New App
                <span className="border-l border-white/20 pl-2 ml-1">
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </span>
            </button>

            {/* Dropdown Menu - Icons Removed */}
            {isOpen && (
                <ul className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-1 overflow-hidden">
                    <li 
                        className="px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => { console.log("Form Builder"); setIsOpen(false); }}
                    >
                        <span className="text-sm font-medium">Form Builder</span>
                    </li>
                    <li 
                        className="px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => { console.log("Visual Builder"); setIsOpen(false); }}
                    >
                        <span className="text-sm font-medium">Visual Builder</span>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default CreateAppDropdown;