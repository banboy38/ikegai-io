"use client"; 

import React from 'react';

const LoginPage = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    
    <div className="flex min-h-screen w-full font-sans text-gray-800">
      {/* LEFT SECTION: Visual/Branding */}
      <div>
       <img src="/ikegai.png" alt='IKEGAI logo'/>
      </div>

      {/* RIGHT SECTION: Login Form */}
      <div className="w-full lg:w-2/5 bg-white flex flex-col p-8 md:p-16 lg:p-24 relative">
        {/* KPMG Logo Placeholder */}
        <div className="absolute top-8 right-12">
          <div className="text-blue-900 font-black italic text-2xl tracking-tighter">
            KPMG<span className="text-blue-500"></span>
          </div>
        </div>

        <div className="my-auto max-w-md w-full mx-auto">
          <header className="mb-8">
            <p className="font-bold text-gray-800">KPMG India</p>
            <h1 className="text-4xl font-semibold text-[#5356BD] mt-1">Agentic AI Platform</h1>
          </header>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div>
              <label className="block text-gray-600 text-sm mb-2">Username</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
              />
              <div className="text-right mt-1">
                <button type="button" className="text-xs text-gray-500 hover:underline">Forgot username?</button>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-600 text-sm mb-2">Password</label>
              <input 
                type="password" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
              />
              <div className="text-right mt-1">
                <button type="button" className="text-xs text-gray-500 hover:underline">Forgot password?</button>
              </div>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              className="w-full bg-[#6265D2] hover:bg-[#5356BD] text-white font-semibold py-3 rounded-lg shadow-lg shadow-indigo-100 transition-all active:scale-[0.98]"
            >
              Login
            </button>
          </form>

          {/* Footer Text */}
          <footer className="mt-12">
            <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-wider">
              The Gen AI application is for the use of authorized users only. Individuals 
              using this application without authority, or in excess of their authority 
              may result in legal action. Copyright @KPMG
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;