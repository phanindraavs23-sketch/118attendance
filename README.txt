118 Employee QR Attendance - GitHub Pages + Supabase

No HR or Manager dashboard. One public attendance web URL.

GitHub Pages URL:
https://phanindraavs23-sketch.github.io/attendance/

The page displays a company QR code. Scanning it opens the same attendance page.
Employees select Name, verify Employee ID, enter Location, then choose Login or Logout.

Setup:
1. Upload all files in this folder to the root of GitHub repository phanindraavs23-sketch/attendance.
2. Enable GitHub Pages: Settings > Pages > Deploy from a branch > main > /(root).
3. In Supabase SQL Editor run supabase/schema.sql.
4. Ensure config.js contains your Supabase Project URL and publishable key.

Data recorded:
Employee ID, Employee Name, Location, Action (LOGIN/LOGOUT), Date/Time.

Security note: because this version has no HR/Manager authentication, anyone with the URL can submit attendance for any listed employee. For controlled attendance, use the role-based version instead.
