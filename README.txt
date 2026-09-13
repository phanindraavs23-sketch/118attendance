# 118 Attendance - Editable QR Attendance

GitHub Pages URL:
https://phanindraavs23-sketch.github.io/118attendance/

Features:
- QR code opens the attendance page
- Employee Name is editable
- Employee ID is editable
- Location is editable
- Login and Logout buttons
- No HR dashboard
- No Manager dashboard
- Saves records to Supabase table `qr_attendance`

Setup:
1. In Supabase SQL Editor, run `supabase/schema.sql`.
2. Upload all files in this ZIP to the ROOT of the `118attendance` GitHub repository.
3. GitHub -> Settings -> Pages -> Deploy from branch -> main -> / (root).
4. Open:
   https://phanindraavs23-sketch.github.io/118attendance/

Important:
Because Name and Employee ID are editable, this public page does not verify that the person entering the details is the employee. If you want, a PIN/OTP or employee-selection validation can be added later.
