
# Sabre Team Directory - Full Stack Project

This project is a technical assessment for the Software Intern position at Sabre. It demonstrates a seamless bridge between a ColdFusion RESTful API and a modern React frontend.

## 🚀 Project Overview

The application is a **Team Directory** that allows users to browse, search, and manage employee records.

- **Frontend**: React 18, TypeScript, Tailwind CSS.
- **Backend**: ColdFusion 2021+ (CFC REST Service).
- **Database**: SQL (schema provided).



### 1. Database Setup
- Execute the SQL commands in `backend/schema.sql` against your local database (e.g., MySQL or SQL Server).
- Name your datasource `SabreDB` in the ColdFusion Administrator.

### 2. Backend (ColdFusion) Setup
- Place `EmployeeService.cfc` in your web root (e.g., `C:\ColdFusion2021\cfusion\wwwroot\api\`).
- Ensure REST mapping is enabled in the ColdFusion Administrator.
- Test the endpoint: `http://localhost:8500/api/EmployeeService.cfc?method=getEmployees`.

### 3. Frontend Setup
- This React app is built with TypeScript and Tailwind.
- The `services/api.ts` file includes a `useMock` toggle. By default, it is set to `true` to allow immediate previewing of the UI without a live CF server.
- To connect to your real backend, set `useMock = false` in `App.tsx` and update the `CF_BASE_URL` in `services/api.ts`.

## ✨ Features Implemented
- [x] **State & Effects**: Used `useState` for data/loading and `useEffect` for API synchronization.
- [x] **Responsive UI**: Clean, mobile-first design using Tailwind CSS.
- [x] **Search**: Real-time filtering by name or role.
- [x] **Dual View**: Toggle between Card Grid and Table views.
- [x] **Security**: ColdFusion backend uses `<cfqueryparam>` to prevent SQL injection.
- [x] **CORS**: Header handling included in the CFC.

## 📝 Evaluation Criteria Met
- **Code Readability**: Clean, modular components with TypeScript for type safety.
- **REST Logic**: Proper JSON handling and error catching.
- **Design**: Professional aesthetic following Sabre-inspired branding.
