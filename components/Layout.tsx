
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                Sabre <span className="text-slate-500 font-normal">Team Directory</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-red-600 border-b-2 border-red-600 pb-5 pt-5 mt-0.5">Directory</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-5 pt-5 mt-0.5">Analytics</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-5 pt-5 mt-0.5">Settings</a>
            </nav>
            <div className="flex items-center space-x-4">
               <button className="p-2 text-slate-400 hover:text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
               </button>
               <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
                 <img src="https://picsum.photos/32/32" alt="Avatar" />
               </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Sabre Technical Assessment - ColdFusion Intern Candidate
        </div>
      </footer>
    </div>
  );
};
