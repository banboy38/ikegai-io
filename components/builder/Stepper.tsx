import React from 'react'
import { ChevronRight } from 'lucide-react'

interface StepperProps {
    currentStage: number
    onStageClick?: (stage: number) => void
    visitedStages: number[]
}

const steps = [
    { id: 1, label: "Application Details" },
    { id: 2, label: "Add LLM" },
    { id: 3, label: "Add Agents" },
    { id: 4, label: "Metrics & Prompts" },
    { id: 5, label: "Application Testing" }
]

const Stepper: React.FC<StepperProps> = ({ currentStage, onStageClick, visitedStages }) => {
    return (
        <div className="stepper-container">
            <span className="optional-badge">Optional Step</span>
            {steps.map((step, index) => {
                const isVisited = visitedStages.includes(step.id);
                const isActive = currentStage === step.id;
                
                return (
                    <React.Fragment key={step.id}>
                        <div 
                            className={`step-pill ${isActive ? 'active' : ''} ${isVisited && !isActive ? 'completed' : ''}`}
                            onClick={() => isVisited && onStageClick?.(step.id)}
                            style={{ cursor: isVisited ? 'pointer' : 'default' }}
                        >
                            {step.label}
                        </div>
                        {index < steps.length - 1 && (
                            <div className="step-chevron">
                                <ChevronRight size={16} />
                            </div>
                        )}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Stepper
