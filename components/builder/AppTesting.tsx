import React from 'react'
import { ChevronDown, Settings, Share2, GitBranch } from 'lucide-react'

interface AppTestingProps {
}

const AppTesting: React.FC<AppTestingProps> = () => {
    return (
        <div className="stage-container">
            <h3 className="builder-title" style={{ fontSize: '20px', marginBottom: '8px' }}>Application Testing</h3>
            <p className="builder-subtitle" style={{ fontSize: '13px', marginBottom: '24px' }}>
                Compare multiple LLMs to find the best fit for your application.
            </p>

            <div className="testing-layout">
                {/* Left Column: Prompts */}
                <div>
                    <div className="prompt-accordion">
                        <div style={{ background: '#3B2C85', color: 'white', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px 8px 0 0' }}>
                            <span style={{ fontSize: '13px' }}>Prompt 1</span>
                            <ChevronDown size={16} />
                        </div>
                        <div style={{ padding: '16px', borderBottom: '1px solid #E5E7EB' }}>
                            <div style={{ fontSize: '11px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Your Query</div>
                            <div style={{ background: 'white', border: '1px solid #E5E7EB', padding: '10px', borderRadius: '4px', fontSize: '12px', color: '#6B7280' }}>
                                Analyze invoice payment performance.
                            </div>

                            <div style={{ fontSize: '11px', fontWeight: '600', color: '#374151', margin: '16px 0 8px' }}>Expected Response</div>
                            <div style={{ background: 'white', border: '1px solid #E5E7EB', padding: '10px', borderRadius: '4px', fontSize: '12px', color: '#6B7280', lineHeight: '1.4' }}>
                                On-time payment rate stands at 82%, with delays primarily driven by approval and GRN processing gaps. High-value overdue invoices are concentrated in two regions, posing short-term working capital risk.
                            </div>
                        </div>
                        <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#374151' }}>
                            <span style={{ fontSize: '13px' }}>Prompt 2</span>
                            <ChevronDown size={16} />
                        </div>
                    </div>
                    <div style={{ marginTop: '12px', background: '#F3F4F6', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: '#6B7280' }}>
                        <Settings size={18} />
                    </div>
                </div>

                {/* Right Column: Results */}
                <div className="results-grid">
                    {/* Result 1: Recommended */}
                    <div className="result-card recommended" style={{ border: '2px solid #3B2C85', background: 'white' }}>
                        <div className="recommended-badge">Recommended</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <div>
                                <div style={{ fontWeight: '600', fontSize: '14px' }}>Azure OpenAI</div>
                                <div style={{ fontSize: '12px', color: '#6B7280' }}>GPT 4</div>
                                <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>4sec</div>
                            </div>
                            <div style={{ background: '#F3F4F6', padding: '6px', borderRadius: '50%' }}>
                                <GitBranch size={16} color="#3B2C85" />
                            </div>
                        </div>

                        {/* Score Gauge */}
                        <div style={{ position: 'relative', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                            <div style={{ width: '150px', height: '75px', border: '15px solid #F3F4F6', borderBottom: 'none', borderRadius: '150px 150px 0 0', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '150px', height: '75px', border: '15px solid #3B2C85', borderBottom: 'none', borderRadius: '150px 150px 0 0', transform: 'rotate(150deg)', transformOrigin: 'bottom center' }}></div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '-10px' }}>
                                <div style={{ fontSize: '24px', fontWeight: '700' }}>85%</div>
                                <div style={{ fontSize: '12px', color: '#6B7280' }}>Score</div>
                            </div>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '9px', color: '#9CA3AF' }}>
                                <div style={{ textAlign: 'center' }}>High<br/>Reasoning</div>
                                <div style={{ textAlign: 'center' }}>Medium<br/>Latency</div>
                                <div style={{ textAlign: 'center' }}>High<br/>Relevance</div>
                                <div style={{ textAlign: 'center' }}>Low<br/>Hallucination</div>
                            </div>
                        </div>

                        <div style={{ fontSize: '12px' }}>
                            <div style={{ fontWeight: '600', marginBottom: '8px' }}>Response</div>
                            <p style={{ color: '#6B7280', lineHeight: '1.4' }}>
                                During the last quarter, 500 invoices worth ₹1.8 Cr were processed. The on-time payment rate was 82%, with 12% paid within 7 days after the due date and 6% delayed beyond 7 days. The average payment cycle stood at 28 days against agreed 30-day terms, indicating overall strong payment performance with minor delays primarily due to late internal approvals.
                            </p>
                        </div>
                    </div>

                    {/* Result 2 */}
                    <div className="result-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <div>
                                <div style={{ fontWeight: '600', fontSize: '14px' }}>Azure OpenAI</div>
                                <div style={{ fontSize: '12px', color: '#6B7280' }}>GPT 4</div>
                                <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>4sec</div>
                            </div>
                            <div style={{ background: '#E5E7EB', padding: '6px', borderRadius: '50%' }}>
                                <GitBranch size={16} color="#9CA3AF" />
                            </div>
                        </div>

                        <div style={{ position: 'relative', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                            <div style={{ width: '150px', height: '75px', border: '15px solid #D1D5DB', borderBottom: 'none', borderRadius: '150px 150px 0 0', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '150px', height: '75px', border: '15px solid #9CA3AF', borderBottom: 'none', borderRadius: '150px 150px 0 0', transform: 'rotate(80deg)', transformOrigin: 'bottom center' }}></div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '-10px' }}>
                                <div style={{ fontSize: '24px', fontWeight: '700', color: '#374151' }}>48%</div>
                                <div style={{ fontSize: '12px', color: '#6B7280' }}>Score</div>
                            </div>
                        </div>

                        <div style={{ fontSize: '12px' }}>
                            <div style={{ fontWeight: '600', marginBottom: '8px' }}>Response</div>
                            <p style={{ color: '#6B7280', lineHeight: '1.4' }}>
                                An analysis of 750 invoices totaling ₹3.2 Cr shows an average payment turnaround time of 32 days compared to standard 30-day terms. Approximately 75% of invoices were paid on time, while 25% experienced delays, mainly due to documentation gaps and approval bottlenecks. Vendor aging reports suggest moderate process inefficiencies that could impact supplier relationships if not addressed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppTesting
