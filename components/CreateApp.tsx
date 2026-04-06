"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Info } from 'lucide-react';
import '@/styles/css/CreateApp.css';

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
        <div className="dropdown-container" ref={dropdownRef}>
            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="create-app-btn"
            >
                + Create New App
                <span className="btn-divider">
                    <ChevronDown className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="dropdown-menu">
                    <Link 
                        href="/solution/agent-builder"
                        className="dropdown-item"
                        onClick={() => setIsOpen(false)}
                        style={{ textDecoration: 'none' }}
                    >
                        <span className="dropdown-item-text">Form Builder</span>
                    </Link>
                    <button 
                        className="dropdown-item"
                        onClick={() => { console.log("Visual Builder"); setIsOpen(false); }}
                    >
                        <span className="dropdown-item-text">Visual Builder</span>
                        <Info className="info-icon" size={16} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default CreateAppDropdown;
