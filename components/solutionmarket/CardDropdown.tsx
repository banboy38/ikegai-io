"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Forward, Trash2 } from "lucide-react"

interface CardDropdownProps {
  isOpen: boolean
  onClose: () => void
  anchorRect: DOMRect | null
  id: number | string
}

export default function CardDropdown({ isOpen, onClose, anchorRect, id }: CardDropdownProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      const handleScroll = () => onClose()
      window.addEventListener("scroll", handleScroll, true)
      return () => window.removeEventListener("scroll", handleScroll, true)
    }
  }, [isOpen, onClose])

  if (!mounted || !isOpen || !anchorRect) return null

  const dropdownContent = (
    <>
      <div 
        className="dropdown-overlay" 
        onClick={onClose}
      />
      <div 
        className="card-dropdown-portal"
        style={{
          top: `${anchorRect.bottom + window.scrollY + 8}px`,
          left: `${anchorRect.right + window.scrollX - 140}px`,
        }}
      >
        <button className="dropdown-item" onClick={() => {
            console.log("Share clicked for", id)
            onClose()
        }}>
            <Forward size={18} color="#3b82f6" strokeWidth={2.5} />
            <span className="dropdown-text">Share</span>
        </button>
        <div className="dropdown-divider"></div>
        <button className="dropdown-item" onClick={() => {
            console.log("Delete clicked for", id)
            onClose()
        }}>
            <Trash2 size={18} color="#ef4444" strokeWidth={2.5} />
            <span className="dropdown-text">Delete</span>
        </button>
      </div>
    </>
  )

  return createPortal(dropdownContent, document.body)
}
