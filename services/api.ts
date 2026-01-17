
import { Employee, ApiResponse } from '../types';

const CF_BASE_URL = '/api/EmployeeService.cfc';

const MOCK_DATA: Employee[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', role: 'Senior Architect', email: 'john.doe@sabre.com', department: 'Travel Solutions', status: 'Active' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', role: 'Full Stack Developer', email: 'jane.smith@sabre.com', department: 'Hospitality', status: 'Active' },
  { id: 3, firstName: 'Michael', lastName: 'Brown', role: 'Product Manager', email: 'michael.brown@sabre.com', department: 'Core Platform', status: 'Onboarding' },
  { id: 4, firstName: 'Emily', lastName: 'Davis', role: 'UX Designer', email: 'emily.davis@sabre.com', department: 'Innovation Lab', status: 'Active' },
  { id: 5, firstName: 'David', lastName: 'Wilson', role: 'QA Engineer', email: 'david.wilson@sabre.com', department: 'Global Operations', status: 'Leave' },
  { id: 6, firstName: 'Sarah', lastName: 'Miller', role: 'Security Analyst', email: 'sarah.miller@sabre.com', department: 'Infra', status: 'Active' }
];

export const fetchEmployees = async (useMock = true): Promise<Employee[]> => {
  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 800));
    return MOCK_DATA;
  }

  try {
    const response = await fetch(`${CF_BASE_URL}?method=getEmployees&returnFormat=json`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    throw error;
  }
};
