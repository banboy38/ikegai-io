import React from 'react'
import { Plus, Edit3, Trash2 } from 'lucide-react'

interface MetricsPromptsProps {
}

const MetricsPrompts: React.FC<MetricsPromptsProps> = () => {
    return (
        <div className="stage-container">
            <div className="metrics-layout">
                {/* Left Column */}
                <div className="metrics-panel">
                    <div className="panel-header">Add Metrices</div>
                    <div className="panel-content">
                        <p style={{ fontSize: '11px', color: '#6B7280', marginBottom: '12px' }}>
                            AI systems use evaluation metrics to check whether the model's performance meets acceptable standards.
                        </p>
                        
                        <div className="metric-item selected">
                            <input type="checkbox" checked readOnly />
                            <div>
                                <div style={{ fontWeight: '600', fontSize: '13px' }}>Groundedness</div>
                                <div style={{ fontSize: '11px', color: '#6B7280' }}>Measures how well the model's generated answers aligns with info from the source data</div>
                            </div>
                        </div>

                        <div className="metric-item">
                            <input type="checkbox" />
                            <div>
                                <div style={{ fontWeight: '600', fontSize: '13px' }}>Relevance</div>
                                <div style={{ fontSize: '11px', color: '#6B7280' }}>Measures how relevant the actual output of your LLM is compared to the input.</div>
                            </div>
                        </div>

                        <div className="metric-item">
                            <input type="checkbox" />
                            <div>
                                <div style={{ fontWeight: '600', fontSize: '13px' }}>Coherence</div>
                                <div style={{ fontSize: '11px', color: '#6B7280' }}>Checks whether the response is clear, logical, and easy to read.</div>
                            </div>
                        </div>

                        <div className="metric-item">
                            <input type="checkbox" />
                            <div>
                                <div style={{ fontWeight: '600', fontSize: '13px' }}>Toxicity</div>
                                <div style={{ fontSize: '11px', color: '#6B7280' }}>Evaluates toxicity in your LLM Outputs</div>
                            </div>
                        </div>

                        <div className="metric-item">
                            <input type="checkbox" />
                            <div>
                                <div style={{ fontWeight: '600', fontSize: '13px' }}>Fluency</div>
                                <div style={{ fontSize: '11px', color: '#6B7280' }}>Checks whether the response is grammatically correct and well-written.</div>
                            </div>
                        </div>

                        <div className="metric-item selected">
                            <input type="checkbox" checked readOnly />
                            <div>
                                <div style={{ fontWeight: '600', fontSize: '13px' }}>Bias</div>
                                <div style={{ fontSize: '11px', color: '#6B7280' }}>Determines whether your LLM output contains gender, racial, or political bias.</div>
                            </div>
                        </div>

                        <div className="metric-item">
                            <input type="checkbox" />
                            <div>
                                <div style={{ fontWeight: '600', fontSize: '13px' }}>Hallucination</div>
                                <div style={{ fontSize: '11px', color: '#6B7280' }}>Checks whether the response contains incorrect or made-up information.</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#3B2C85', color: 'white', padding: '8px 12px', borderRadius: '4px', marginTop: '12px' }}>
                            <span style={{ fontSize: '13px' }}>Custom Metrices</span>
                            <button style={{ background: 'white', color: '#3B2C85', border: 'none', borderRadius: '4px', padding: '2px 8px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                                <Plus size={14} /> Add
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div>
                    <div className="form-group">
                        <label className="form-label">Add Prompts & Expected Response<span>*</span></label>
                        <p style={{ fontSize: '11px', color: '#6B7280', marginBottom: '12px' }}>
                            These prompts will help train the Gen AI Chat tool
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '12px', alignItems: 'start', marginBottom: '16px' }}>
                            <div style={{ fontSize: '10px', color: '#3B2C85', marginBottom: '4px' }}>Prompts</div>
                            <div style={{ fontSize: '10px', color: '#3B2C85', marginBottom: '4px' }}>Expected Response</div>
                            <div></div>

                            <div style={{ background: '#F3F4F6', padding: '12px', borderRadius: '4px', fontSize: '12px' }}>
                                Analyze invoice payment performance.
                            </div>
                            <div style={{ background: '#F3F4F6', padding: '12px', borderRadius: '4px', fontSize: '12px' }}>
                                On-time payment rate stands at 82%, with delays primarily driven by approval and GRN processing gaps. High-value overdue invoices are concentrated in two regions, posing short-term working capital risk.
                            </div>
                            <div style={{ display: 'flex', gap: '8px', color: '#EF4444' }}>
                                <Edit3 size={14} color="#6B7280" />
                                <Trash2 size={14} />
                            </div>

                            <input type="text" className="form-input" placeholder="Prompts" />
                            <input type="text" className="form-input" placeholder="Sample Answer" />
                            <div></div>
                        </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '40px' }}>
                        <label className="form-label">Add Guard Rails<span>*</span></label>
                        <p style={{ fontSize: '11px', color: '#6B7280', marginBottom: '12px' }}>
                            This will help refrain the Gen AI chat tool from responding in below situations
                        </p>
                        
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                            <div style={{ flex: 1, background: '#F3F4F6', padding: '12px', borderRadius: '4px', fontSize: '12px' }}>
                                Do not Use Abusive words
                            </div>
                            <div style={{ display: 'flex', gap: '8px', color: '#EF4444' }}>
                                <Edit3 size={14} color="#6B7280" />
                                <Trash2 size={14} />
                            </div>
                        </div>

                        <input type="text" className="form-input" placeholder="Enter sample prompts" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MetricsPrompts
