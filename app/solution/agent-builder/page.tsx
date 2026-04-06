"use client"

import { useState, useEffect } from "react"
import Stepper from "@/components/builder/Stepper"
import ApplicationDetails from "@/components/builder/ApplicationDetails"
import AddLlms from "@/components/builder/AddLlms"
import AddAgents from "@/components/builder/AddAgents"
import MetricsPrompts from "@/components/builder/MetricsPrompts"
import AppTesting from "@/components/builder/AppTesting"
import "@/styles/css/AiBuilder.css"

export default function AiAgentBuilder() {
    const [currentStage, setCurrentStage] = useState(1)
    const [visitedStages, setVisitedStages] = useState<number[]>([1])

    const nextStage = () => {
        if (currentStage < 5) {
            const next = currentStage + 1
            setCurrentStage(next)
            if (!visitedStages.includes(next)) {
                setVisitedStages([...visitedStages, next])
            }
        }
    }

    const prevStage = () => {
        if (currentStage > 1) setCurrentStage(currentStage - 1)
    }

    const goToStage = (stage: number) => {
        if (visitedStages.includes(stage)) {
            setCurrentStage(stage)
        }
    }

    // Effect to ensure stage 5 is marked as visited if reached via Evaluate App
    useEffect(() => {
        if (currentStage === 5 && !visitedStages.includes(5)) {
            setVisitedStages(prev => [...prev, 5])
        }
    }, [currentStage, visitedStages])

    return (
        <div className="builder-container">
            {/* Header Section */}
            <div className="builder-header">
                <div className="header-left">
                    <h1 className="builder-title">Agentic AI Application Builder</h1>
                    <p className="builder-subtitle">Create agentic AI applications in a few simple steps.</p>
                </div>
                <div className="header-right">
                    <Stepper 
                        currentStage={currentStage} 
                        visitedStages={visitedStages} 
                        onStageClick={goToStage}
                    />
                </div>
            </div>

            {/* Form Section */}
            <div className="builder-content">
                {currentStage === 1 && (
                    <ApplicationDetails />
                )}
                {currentStage === 2 && (
                    <AddLlms />
                )}
                {currentStage === 3 && (
                    <AddAgents />
                )}
                {currentStage === 4 && (
                    <MetricsPrompts />
                )}
                {currentStage === 5 && (
                    <AppTesting />
                )}
            </div>

            {/* Fixed Footer */}
            <div className="builder-footer">
                {currentStage < 4 && (
                    <button onClick={nextStage} className="btn-primary">Save & Next</button>
                )}
                {currentStage === 4 && (
                    <>
                        <button onClick={() => { console.log("Complete Application"); }} className="btn-primary" style={{ padding: '10px 48px' }}>Complete Application</button>
                        <button onClick={nextStage} className="btn-secondary" style={{ padding: '10px 48px' }}>Evaluate App</button>
                    </>
                )}
                {currentStage === 5 && (
                    <>
                        <button onClick={() => { console.log("Complete Application"); }} className="btn-primary" style={{ padding: '10px 48px' }}>Complete Application</button>
                        <button onClick={() => { console.log("Re-Run Test"); }} className="btn-secondary" style={{ padding: '10px 48px', color: '#3B2C85' }}>Re -Run Test</button>
                    </>
                )}
            </div>
        </div>
    )
}
