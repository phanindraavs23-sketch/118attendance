118 Employee QR Attendance - GitHub Pages + Supabase

GitHub Pages URL:
https://phanindraavs23-sketch.github.io/attendance/

Flow:
1. QR scan opens attendance.html.
2. Employee enters Name, Employee ID and Location (QR query values can prefill these fields).
3. Employee presses Login or Logout.
4. A row is inserted into public.attendance.
5. recorded_at is generated automatically by PostgreSQL/Supabase server time.

No HR or Manager dashboard is included.

SUPABASE
1. Run supabase/schema.sql in the Supabase SQL Editor.
2. Keep the publishable/anon key in config.js.
3. Never put a service_role/secret key in browser code.

GITHUB
Upload index.html, attendance.html, config.js and supabase/ to the repository root.
Enable GitHub Pages from the main branch / root.

QR
The page generates a QR that points to attendance.html. You can also create employee-specific QR links such as:
attendance.html?name=Ravi%20Kumar&employeeId=EMP001&location=Office

These values are editable after scanning.


HR / MANAGER DASHBOARD
1. In Supabase Authentication, create the HR and Manager email/password users.
2. Run supabase/admin_dashboard.sql.
3. Copy each user's Auth user UUID into admin_roles with role HR or MANAGER.
4. Open /hr-manager.html on GitHub Pages.
5. HR/Manager signs in and sees employee Name, Employee ID, Location, LOGIN/LOGOUT and server-recorded time.
6. The dashboard supports search, action and date filters.

SECURITY
The dashboard uses the Supabase publishable/anon key in the browser. Never use a service_role/secret key.
The database timestamp remains server generated with recorded_at default now().
