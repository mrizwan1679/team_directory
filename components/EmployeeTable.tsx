
import React from 'react';
import { Employee } from '../types';

interface EmployeeTableProps {
  employees: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  const statusDot = {
    Active: 'bg-green-500',
    Onboarding: 'bg-blue-500',
    Leave: 'bg-amber-500'
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Department</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-slate-200 flex-shrink-0 mr-3 border border-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${employee.id}`} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{employee.firstName} {employee.lastName}</div>
                    <div className="text-xs text-slate-500">ID: #{employee.id}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm font-medium text-slate-700">{employee.role}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                {employee.department || 'Product Engineering'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-1.5">
                  <div className={`w-2 h-2 rounded-full ${statusDot[employee.status || 'Active']}`}></div>
                  <span className="text-xs font-medium text-slate-600">{employee.status || 'Active'}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-red-600 hover:text-red-800 transition-colors">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
