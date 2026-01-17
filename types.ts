
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  email?: string;
  department?: string;
  status?: 'Active' | 'Onboarding' | 'Leave';
}

export type ViewMode = 'grid' | 'table';

export interface ApiResponse {
  data: Employee[];
  status: 'success' | 'error';
  message?: string;
}
