import React from 'react'
import { Search, Check, Bot, Cloud, Sparkles, Globe } from 'lucide-react'

interface AddLlmsProps {
}

const AddLlms: React.FC<AddLlmsProps> = () => {
    return (
        <div className="stage-container">
            <h3 className="builder-title" style={{ fontSize: '16px', color: '#00338D' }}>LLM Selection</h3>
            <p className="builder-subtitle" style={{ fontSize: '12px', marginBottom: '20px' }}>
                LLMs can understand & generate human language to perform tasks like classifying text, understanding sentiment, & translating. The right model should be chosen based on what the application needs to do.
            </p>
            <p style={{ fontSize: '11px', color: '#EF4444', marginBottom: '16px' }}>Only the LLM (s) selected here will be shown in agents</p>

            <div className="llm-filters">
                <div style={{ position: 'relative', flex: 1 }}>
                    <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6B7280' }} />
                    <input type="text" className="form-input" placeholder="Search..." style={{ paddingLeft: '36px' }} />
                </div>
                <button className="filter-btn">All</button>
                <button className="filter-btn">Azure</button>
                <button className="filter-btn active">Open AI</button>
                <button className="filter-btn">AWS</button>
                <button className="filter-btn">Google</button>
                <button className="filter-btn">Open Source</button>
            </div>

            <h4 style={{ fontSize: '14px', margin: '24px 0 12px' }}>Open AI</h4>
            <div className="llm-grid">
                <div className="llm-card selected">
                    <div className="selection-check"><Check size={14} /></div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{ background: '#F3F4F6', padding: '10px', borderRadius: '4px' }}>
                            <Bot size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: '14px' }}>GPT 3.0</div>
                            <div style={{ fontSize: '11px', color: '#6B7280' }}>Latency : <span style={{ color: '#000', fontWeight: '500' }}>High</span></div>
                        </div>
                        <span style={{ marginLeft: 'auto', background: '#F3F4F6', fontSize: '10px', padding: '2px 8px', borderRadius: '4px' }}>Open AI</span>
                    </div>
                    <div style={{ marginTop: '12px', fontSize: '11px' }}>
                        Best Suited : 
                        <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                            <span style={{ color: '#3B2C85', border: '1px dashed #3B2C85', padding: '2px 8px', borderRadius: '10px' }}>Report</span>
                            <span style={{ color: '#3B2C85', border: '1px dashed #3B2C85', padding: '2px 8px', borderRadius: '10px' }}>Image</span>
                            <span style={{ color: '#3B2C85', border: '1px dashed #3B2C85', padding: '2px 8px', borderRadius: '10px' }}>Thinking Model</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '12px', borderTop: '1px solid #E5E7EB', paddingTop: '8px' }}>
                        Cost : <span style={{ fontWeight: '600' }}>₹2.5/token</span>
                    </div>
                </div>

                <div className="llm-card">
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{ background: '#F3F4F6', padding: '10px', borderRadius: '4px' }}>
                            <Bot size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: '14px' }}>GPT 4.0</div>
                            <div style={{ fontSize: '11px', color: '#6B7280' }}>Latency : <span style={{ color: '#000', fontWeight: '500' }}>High</span></div>
                        </div>
                        <span style={{ marginLeft: 'auto', background: '#F3F4F6', fontSize: '10px', padding: '2px 8px', borderRadius: '4px' }}>Open AI</span>
                    </div>
                    <div style={{ marginTop: '12px', fontSize: '11px' }}>
                        Best Suited : 
                        <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                            <span style={{ color: '#3B2C85', border: '1px dashed #3B2C85', padding: '2px 8px', borderRadius: '10px' }}>Report</span>
                            <span style={{ color: '#3B2C85', border: '1px dashed #3B2C85', padding: '2px 8px', borderRadius: '10px' }}>Image</span>
                            <span style={{ color: '#3B2C85', border: '1px dashed #3B2C85', padding: '2px 8px', borderRadius: '10px' }}>Thinking Model</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '12px', borderTop: '1px solid #E5E7EB', paddingTop: '8px' }}>
                        Cost : <span style={{ fontWeight: '600' }}>₹2.5/token</span>
                    </div>
                </div>

                <div className="llm-card">
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{ background: '#F3F4F6', padding: '10px', borderRadius: '4px' }}>
                            <Bot size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: '14px' }}>GPT 5.0</div>
                            <div style={{ fontSize: '11px', color: '#6B7280' }}>Latency : <span style={{ color: '#000', fontWeight: '500' }}>High</span></div>
                        </div>
                        <span style={{ marginLeft: 'auto', background: '#F3F4F6', fontSize: '10px', padding: '2px 8px', borderRadius: '4px' }}>Open AI</span>
                    </div>
                    <div style={{ marginTop: '12px', fontSize: '11px' }}>
                        Best Suited : 
                        <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                            <span style={{ color: '#3B2C85', border: '1px dashed #3B2C85', padding: '2px 8px', borderRadius: '10px' }}>Report</span>
                            <span style={{ color: '#3B2C85', border: '1px dashed #3B2C85', padding: '2px 8px', borderRadius: '10px' }}>Image</span>
                            <span style={{ color: '#3B2C85', border: '1px dashed #3B2C85', padding: '2px 8px', borderRadius: '10px' }}>Thinking Model</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '12px', borderTop: '1px solid #E5E7EB', paddingTop: '8px' }}>
                        Cost : <span style={{ fontWeight: '600' }}>₹2.5/token</span>
                    </div>
                </div>
            </div>

            <h4 style={{ fontSize: '14px', margin: '24px 0 12px' }}>Google</h4>
            <div className="llm-grid">
                <div className="llm-card selected">
                    <div className="selection-check"><Check size={14} /></div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{ background: '#EEF2FF', padding: '10px', borderRadius: '4px' }}>
                            <Sparkles size={24} color="#3B2C85" />
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: '14px' }}>Gemini</div>
                            <div style={{ fontSize: '11px', color: '#6B7280' }}>Latency : <span style={{ color: '#000', fontWeight: '500' }}>Medium</span></div>
                        </div>
                        <span style={{ marginLeft: 'auto', background: '#F3F4F6', fontSize: '10px', padding: '2px 8px', borderRadius: '4px' }}>Google</span>
                    </div>
                    <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '12px', borderTop: '1px solid #E5E7EB', paddingTop: '8px' }}>
                        Cost : <span style={{ fontWeight: '600' }}>₹2.5/token</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddLlms
