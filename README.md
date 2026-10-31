# FixMyArea — Municipal Civic Action & Dispatch Platform

A modern civic infrastructure management system built with **MongoDB Atlas**, **Express 5**, **React 19**, and **Tailwind CSS**.

The platform provides **3 separate, role-segregated working websites/portals** enforced by client-side RBAC and backend token protection.

---

## 🏛️ The 3 Working Modules

```
                             FixMyArea Architecture
                                       │
           ┌───────────────────────────┼───────────────────────────┐
           ▼                           ▼                           ▼
   [ Citizen Portal ]         [ Staff Terminal ]          [ Admin Console ]
   • Role: resident/citizen   • Role: staff               • Role: admin
   • Theme: Emerald Teal      • Theme: Electric Blue      • Theme: Deep Purple
   • Purpose: Incident Filing • Purpose: Field Work &     • Purpose: Central Triage,
     & Live Tracking            Proof Verification          Telemetry & Governance
```

### 1. Citizen Services Portal (Resident Facing)
- **Dashboard (`/citizen/dashboard`)**: Personal hub with statistics on reported issues, community impact progress, and active ticket updates.
- **Report Incident (`/report`)**: 4-step wizard for categorization, description, address, geocoded map coordinates, and photos.
- **My Complaints (`/citizen/my-complaints`)**: Detailed list of filed complaints with live status filters (`submitted`, `in-progress`, `resolved`).
- **Track & Rate (`/track`)**: Public audit lookup by Ticket ID (e.g., `FMA-8492`) with a 5-star citizen satisfaction rating system.

### 2. Staff Field Operations Terminal (Field Crews & Leads)
- **Staff Workbench (`/staff/workbench`)**: High-precision field console with geocoded telemetry, turn-by-turn routing, citizen photo validation, tamper-evident before/after repair proof, and labor logs.
- **Completed Work History (`/staff/history`)**: Audit-locked history of verified tasks with daily operational custody certification and density compliance.
- **Dispatch Alerts (`/notifications`)**: Sector alerts, weather updates, and emergency crew calls.

### 3. Municipal Admin Command & Control (Directors & Supervisors)
- **Complaint Queue (`/admin/complaints`)**: Central triage queue with filtering by priority/status and instant crew dispatch modal.
- **Staff & Workload (`/admin/staff`)**: Real-time crew availability, GPS fleet tracking, and automated workload balancing.
- **Category Management (`/admin/categories`)**: SLA response thresholds, department routing, and AI classifier confidence configuration.
- **Reports & Analytics (`/admin/analytics`)**: Ward resolution turnaround, SLA compliance charts, bottleneck detection, and executive PDF briefing export.
- **System Settings (`/admin/settings`)**: Open311 integrations, automated routing triggers, and notification gateway settings.

---

## 🔐 Demo Credentials Matrix

Auto-fill credentials are also provided directly on the [Login Page](http://localhost:5173/login):

| Portal | Role | Email | Password |
| :--- | :--- | :--- | :--- |
| **Citizen Portal** | `resident` | `sarah.j@example.com` | `Password123!` |
| **Staff Terminal** | `staff` | `marcus@fixmyarea.gov` | `Password123!` |
| **Admin Console** | `admin` | `admin@fixmyarea.gov` | `Password123!` |

---

## 🚀 Running the Project

### 1. Environment Configuration
Verify `server/.env` is configured with your MongoDB Atlas cluster:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.12oqcrm.mongodb.net/sush-mern?retryWrites=true&w=majority
JWT_SECRET=fixmyarea_super_secret_jwt_key_2026
CLIENT_URL=http://localhost:5173
```

### 2. Run Servers Concurrently
From the root directory:
```bash
npm run dev
```

- **Client**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000`
- **Build Verification**: `npm run build` in `client`

## 📡 API Endpoints

- `GET /api/health` - Health check & database connection status
- `GET /api/items` - Fetch list of items
- `POST /api/items` - Create a new item (`{ "title": "...", "description": "..." }`)
- `DELETE /api/items/:id` - Delete an item by ID
