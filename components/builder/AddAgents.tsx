import React from 'react'
import { Search, SlidersHorizontal, Plus, UserCircle, Star, Edit3, Copy, Trash2 } from 'lucide-react'

interface AddAgentsProps {
}

const AddAgents: React.FC<AddAgentsProps> = () => {
    return (
        <div className="stage-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                    <h3 className="builder-title" style={{ fontSize: '16px', color: '#00338D' }}>Add Agents</h3>
                    <p className="builder-subtitle" style={{ fontSize: '12px' }}>
                        An agent performs tasks using tools. Different agents handle different tasks. For example, an information extractor uses a RAG tool to find relevant data.
                    </p>
                </div>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}>
                    <Plus size={18} /> Create New Agent
                </button>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                    <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6B7280' }} />
                    <input type="text" className="form-input" placeholder="Search for a agent..." style={{ paddingLeft: '36px' }} />
                </div>
                <button className="filter-btn" style={{ background: 'white', padding: '8px' }}>
                    <SlidersHorizontal size={18} />
                </button>
            </div>

            <div className="llm-grid">
                {/* Card 1 */}
                <div className="llm-card" style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ background: '#F3F4F6', padding: '8px', borderRadius: '8px' }}>
                            <UserCircle size={24} color="#3B2C85" />
                        </div>
                        <input type="checkbox" />
                    </div>
                    <h4 style={{ fontSize: '16px', margin: '16px 0 8px' }}>Agentic Assistant</h4>
                    <p style={{ fontSize: '11px', color: '#6B7280', lineHeight: '1.4', minHeight: '60px' }}>
                        You are AI system that analyzes historical data & trends to generate accurate forecasts, highlight risks, and provide clear, actionable insights for better decision-making.
                    </p>
                    <div style={{ marginTop: '16px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '600', marginBottom: '8px' }}>Tool History :</div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <span style={{ fontSize: '10px', color: '#3B2C85', background: '#EEF2FF', padding: '2px 8px', borderRadius: '4px', border: '1px solid #3B2C85' }}>Text to SQL</span>
                            <span style={{ fontSize: '10px', color: '#3B2C85', background: '#EEF2FF', padding: '2px 8px', borderRadius: '4px', border: '1px solid #3B2C85' }}>Exporting</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '12px' }}>
                        <div>
                            <div style={{ fontSize: '10px', color: '#9CA3AF' }}>Created : 12/02/26</div>
                            <div style={{ fontSize: '10px', color: '#9CA3AF' }}>Owner : Indresh</div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', color: '#9CA3AF' }}>
                            <Edit3 size={14} style={{ cursor: 'pointer' }} />
                            <Copy size={14} style={{ cursor: 'pointer' }} />
                            <Trash2 size={14} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="llm-card" style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ background: '#F3F4F6', padding: '8px', borderRadius: '8px' }}>
                            <UserCircle size={24} color="#3B2C85" />
                        </div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <Star size={14} fill="#F59E0B" color="#F59E0B" />
                            <input type="checkbox" />
                        </div>
                    </div>
                    <h4 style={{ fontSize: '16px', margin: '16px 0 8px' }}>BRD Agent</h4>
                    <p style={{ fontSize: '11px', color: '#6B7280', lineHeight: '1.4', minHeight: '60px' }}>
                        You are an AI assistant that structures business requirements, defines scope, and highlights risks to create clear, review-ready documentation.
                    </p>
                    <div style={{ marginTop: '16px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '600', marginBottom: '8px' }}>Tool History :</div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <span style={{ fontSize: '10px', color: '#3B2C85', background: '#EEF2FF', padding: '2px 8px', borderRadius: '4px', border: '1px solid #3B2C85' }}>Web Search</span>
                            <span style={{ fontSize: '10px', color: '#3B2C85', background: '#EEF2FF', padding: '2px 8px', borderRadius: '4px', border: '1px solid #3B2C85' }}>Forecasting</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '12px' }}>
                        <div>
                            <div style={{ fontSize: '10px', color: '#9CA3AF' }}>Created : 12/02/26</div>
                            <div style={{ fontSize: '10px', color: '#9CA3AF' }}>Owner : Prerak</div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', color: '#9CA3AF' }}>
                            <Edit3 size={14} style={{ cursor: 'pointer' }} />
                            <Copy size={14} style={{ cursor: 'pointer' }} />
                            <Trash2 size={14} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAgents
