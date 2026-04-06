"use client";

import React, { use } from 'react';
import { Mic, Send } from 'lucide-react';

export default function PlaygroundPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const suggestedPrompts = [
    "Prompts you can try 1",
    "Prompts you can try ques 2",
    "Prompts you can try question 3",
  ];

  return (
    <div className="flex flex-col h-full bg-[#f9fafb] gap-8">
      {/* Header Container */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-[#6b7280] text-[16px] font-medium tracking-wide">
            Welcome To Workshop
          </p>
          <h1 className="text-[36px] font-bold text-[#111827] leading-tight">
            Application Name
          </h1>
        </div>
        
        <button className="bg-[#4140a0] hover:bg-[#35358a] text-white px-10 py-[14px] rounded-[6px] text-[16px] font-bold transition-all shadow-sm active:scale-[0.98]">
          Workspace
        </button>
      </div>

      {/* Main Card with Dotted Grid Image */}
      <div className="flex-1 relative bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
        {/* Dotted Background Image from public folder */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.4]"
          style={{
            backgroundImage: 'url(/playground_bg.jpg)',
            backgroundSize: '500px',
            backgroundPosition: 'cover',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Interaction Content Area (above pattern) */}
        <div className="relative z-10 w-full max-w-[720px] px-6 text-center">
          <div className="mb-10">
            <h2 className="text-[28px] font-semibold text-[#111827] mb-2 tracking-tight">
              How Can I Help You?
            </h2>
            <p className="text-[#6b7280] text-lg">
              Write your queries below
            </p>
          </div>

          {/* Input Box Component */}
          <div className="relative mb-6">
            <div className="group flex items-center bg-white border border-[#d1d5db] hover:border-[#4140a0]/50 rounded-[10px] shadow-sm transition-all overflow-hidden h-[54px] mx">
              <input
                type="text"
                placeholder="Ask Questions..."
                className="flex-1 h-full mx-3 px-5 text-[15px] text-[#1f2937] placeholder:text-[#9ca3af] bg-transparent outline-none"
              />
              
              <div className="flex items-center gap-3 px-4 pr-5">
                <button className="p-1 text-[#6b7280] hover:text-[#4140a0] transition-colors">
                  <Mic size={20} />
                </button>
                <div className="w-[1.5px] h-6 bg-[#e5e7eb]" />
                <button className="p-1 text-[#4140a0] hover:opacity-70 transition-opacity">
                  <Send size={22} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Action Suggested Prompts */}
          <div className="flex flex-wrap justify-center gap-3s">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                className="px-[18px] py-[7px] bg-[#eff6ff] hover:bg-[#dbeafe] text-[#4140a0] text-[13px] font-medium rounded-[6px] border border-[#dbeafe] transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
