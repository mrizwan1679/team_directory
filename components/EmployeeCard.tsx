
import React from 'react';
import { Employee } from '../types';

interface EmployeeCardProps {
  employee: Employee;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const initials = `${employee.firstName[0]}${employee.lastName[0]}`;
  
  const statusColors = {
    Active: 'bg-green-100 text-green-700',
    Onboarding: 'bg-blue-100 text-blue-700',
    Leave: 'bg-amber-100 text-amber-700'
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-600 border-2 border-slate-50 overflow-hidden shadow-inner">
          <img 
              src={`https://i.pravatar.cc/150?u=${employee.id}`} 
              alt={employee.firstName} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <span className="relative z-10">{initials}</span>
        </div>
        <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${employee.status === 'Active' ? 'bg-green-500' : employee.status === 'Onboarding' ? 'bg-blue-500' : 'bg-amber-500'}`}></div>
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 leading-tight">{employee.firstName} {employee.lastName}</h3>
      <p className="text-sm font-medium text-red-600 mb-2">{employee.role}</p>
      
      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full mb-4 ${statusColors[employee.status || 'Active']}`}>
        {employee.status || 'Active'}
      </span>
      
      <div className="w-full pt-4 border-t border-slate-100 mt-auto">
        <div className="flex flex-col space-y-2 text-xs text-slate-500">
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate max-w-[150px]">{employee.email || `${employee.firstName.toLowerCase()}@sabre.com`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
