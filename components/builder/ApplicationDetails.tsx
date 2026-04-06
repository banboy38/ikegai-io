import React from 'react'
import { Info, Sparkles, Smile, Sliders, ArrowRight, X, Trash2 } from 'lucide-react'

interface ApplicationDetailsProps {
}

const ApplicationDetails: React.FC<ApplicationDetailsProps> = () => {
    return (
        <div className="stage-container">
            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Application Name<span>*</span></label>
                    <input type="text" className="form-input" defaultValue="Financial Agent" />
                </div>
                <div className="form-group">
                    <label className="form-label">Select Function<span>*</span></label>
                    <select className="form-select">
                        <option>Select</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Application Description<span>*</span> <Info size={14} className="inline-icon" /></label>
                <div className="input-wrapper">
                    <textarea 
                        className="form-textarea" 
                        defaultValue="You are a financial agent which can track, analyze and visualize data"
                    />
                    <Sparkles size={16} className="ai-icon-corner" />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Application Logic<span>*</span></label>
                <p style={{ fontSize: '11px', color: '#6B7280', marginBottom: '4px' }}>This logic will be used by master agent for determining the workflow</p>
                <div className="input-wrapper">
                    <textarea 
                        className="form-textarea" 
                        placeholder="write here..."
                    />
                    <Sparkles size={16} className="ai-icon-corner" />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Add Application Icon</label>
                <div className="input-wrapper" style={{ gap: '8px' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <select className="form-select">
                            <option>Select</option>
                        </select>
                        <Smile size={18} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6B7280' }} />
                    </div>
                    <div style={{ background: '#FEF3C7', padding: '8px', borderRadius: '4px', color: '#D97706' }}>
                        <Sliders size={18} />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Value Add Tags</label>
                <div className="tag-input-container">
                    <input type="text" className="tag-input" placeholder="Write here..." />
                    <button className="tag-add-btn"><ArrowRight size={18} /></button>
                </div>
                <div className="tags-display">
                    <div className="tag-pill">Strategy <X size={12} /></div>
                    <div className="tag-pill">Finance <X size={12} /></div>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">What it can do<span>*</span></label>
                <div className="tag-input-container">
                    <input type="text" className="tag-input" placeholder="Enter sample prompts" />
                    <button className="tag-add-btn"><ArrowRight size={18} /></button>
                </div>
                <div className="capabilities-grid">
                    <div className="capability-card">
                        Analyzes financial data, tracks performance, forecasts trends, and provides insights to support budgeting and strategic decision-making.
                        <Trash2 size={14} className="delete-icon" />
                    </div>
                    <div className="capability-card">
                        Helps monitor expenses, evaluate investments, and assess financial risks while generating reports and recommendations for better financial control.
                        <Trash2 size={14} className="delete-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationDetails
