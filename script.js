// Show and hide sections
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Login Simulation
function loginUser(event) {
  event.preventDefault();
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("loginMsg").innerText = "✅ Login Successful!";
    showSection("dashboard");
  } else {
    document.getElementById("loginMsg").innerText = "❌ Invalid Credentials!";
  }
}

// Attendance storage
let attendanceRecords = [];

// Mark Attendance
function markAttendance() {
  let today = new Date().toLocaleDateString();
  attendanceRecords.push({ date: today, status: "Present" });

  let li = document.createElement("li");
  li.textContent = `Present on ${today}`;
  document.getElementById("attendanceList").appendChild(li);

  updateReport();
}

// Update Report Table
function updateReport() {
  let tbody = document.getElementById("reportTable");
  tbody.innerHTML = "";

  attendanceRecords.forEach(record => {
    let row = `<tr>
      <td>${record.date}</td>
      <td>${record.status}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}
