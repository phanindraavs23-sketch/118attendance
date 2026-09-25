/* 118 Attendance input rules
   Employee Name: A-Z letters and spaces only.
   Employee ID: 0-9 digits only.
*/
window.AttendanceInputRules = {
  namePattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
  idPattern: /^\d+$/,
  cleanName(value) {
    return String(value || '').replace(/[^A-Za-z ]/g, '').replace(/\s{2,}/g, ' ');
  },
  cleanId(value) {
    return String(value || '').replace(/\D/g, '');
  }
};
