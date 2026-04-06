"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import {
    LayoutGrid, Bookmark,
    MoreVertical, Eye, Pencil, Play, Copy
} from "lucide-react"
import CardDropdown from "./CardDropdown"
import "@/styles/css/CardsLanding.css"
import "@/styles/css/Navbar.css"

export default function SolutionCard({id, title, description, tags, gradient}:
{
    id: number | string,
    title: string,
    description: string,
    tags: string[],
    gradient: string
}) 
{
    const [showDropdown, setShowDropdown] = useState(false)
    const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleDropdownToggle = () => {
        if (buttonRef.current) {
            setAnchorRect(buttonRef.current.getBoundingClientRect())
        }
        setShowDropdown(!showDropdown)
    }

    return (
        <div style={{ backgroundColor: gradient }} className="solution-card">
            <div className="solution-card-header">
                <div className="card-header-top">
                    <div className="icon-container">
                        <LayoutGrid size={20} />
                    </div>
                    <div className="action-buttons">
                        <button className="ghost-btn">
                            <Bookmark size={18} />
                        </button>
                        <div className="dropdown-container">
                            <button 
                                ref={buttonRef}
                                className="ghost-btn"
                                onClick={handleDropdownToggle}
                            >
                                <MoreVertical size={18} />
                            </button>
                            <CardDropdown 
                                id={id}
                                isOpen={showDropdown} 
                                onClose={() => setShowDropdown(false)} 
                                anchorRect={anchorRect}
                            />
                        </div>
                    </div>
                </div>
                <h4 className="solution-card-title">{title}</h4>
            </div>

            <div className="solution-card-content">
                <p className="solution-card-description">
                    {description}
                </p>

                <div className="tag-container">
                    {tags.map((tag, i) => (
                        <span key={i} className="solution-badge">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="solution-card-footer">
                <div className="card-pill-footer">
                    <button className="footer-icon-btn">
                        <Eye size={18} />
                        <span className="footer-btn-text">View</span>
                    </button>
                    <button className="footer-icon-btn">
                        <Pencil size={18} />
                        <span className="footer-btn-text">Edit</span>
                    </button>
                    <button className="footer-icon-btn">
                        <Copy size={18} />
                        <span className="footer-btn-text">Copy</span>
                    </button>
                    <Link href={`/solution/playground/${id}`} className="footer-icon-btn playground">
                        <Play size={18} />
                        <span className="footer-btn-text">Playground</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
