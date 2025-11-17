

// 🔒 Redirect if not logged in
if(localStorage.getItem("isAdminLoggedIn") !== "true") {
  window.location.href = "admin-login.html";
}

// Logout button
const logoutBtn = document.createElement("button");
logoutBtn.id = "logoutBtn";
logoutBtn.textContent = "Logout";
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isAdminLoggedIn");
  window.location.href = "admin-login.html";
});
document.body.appendChild(logoutBtn);



// -------------------- GLOBAL DATA --------------------
let allBookings = [];
let allEnrollments = [];
let allMessages = [];

// -------------------- TABLE GENERATOR --------------------
function createTable(containerId, data, columns, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear previous table

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  columns.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col;
    trHead.appendChild(th);
  });

  // Add extra column for delete button
  if(["bookings","enrollments","messages"].includes(type)) {
    const th = document.createElement("th");
    th.textContent = "Actions";
    trHead.appendChild(th);
  }

  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach(row => {
    const tr = document.createElement("tr");
    columns.forEach(col => {
      const td = document.createElement("td");
      td.textContent = row[col] || "";
      tr.appendChild(td);
    });

    // Add delete button for bookings, enrollments, messages
    if(["bookings","enrollments","messages"].includes(type)) {
      const td = document.createElement("td");
      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.classList.add("delete-btn");

      if(type === "bookings") btn.addEventListener("click", () => deleteBooking(row.id));
      else btn.addEventListener("click", () => deleteItem(type, row.id));

      td.appendChild(btn);
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

// -------------------- FETCH DATA --------------------
async function fetchData() {
  allBookings = await (await fetch("http://localhost:3002/bookings")).json();
  allEnrollments = await (await fetch("http://localhost:3002/enrollments")).json();
  allMessages = await (await fetch("http://localhost:3002/messages")).json();

  displayBookings(allBookings);
  createTable("enrollmentsTableContainer", allEnrollments, ["ownerName","email","phone","carMakeModel","year","mileage"], "enrollments");
  createTable("messagesTableContainer", allMessages, ["name","email","phone","message","date"], "messages");
}

// -------------------- DISPLAY BOOKINGS --------------------
function displayBookings(data) {
  createTable("bookingsTableContainer", data, ["fullName","phone","idNumber","age","car","date","location","timestamp"], "bookings");
}

// -------------------- SEARCH & FILTER --------------------
document.getElementById("bookingSearch").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = allBookings.filter(b =>
    b.fullName.toLowerCase().includes(term) ||
    b.car.toLowerCase().includes(term) ||
    b.phone.toLowerCase().includes(term)
  );
  displayBookings(filtered);
});

document.getElementById("bookingFilter").addEventListener("change", (e) => {
  const category = e.target.value;
  const filtered = category ? allBookings.filter(b => b.carCategory === category) : allBookings;
  displayBookings(filtered);
});

// -------------------- DELETE FUNCTIONS --------------------
async function deleteBooking(id) {
  if(confirm("Are you sure you want to delete this booking?")) {
    await fetch(`http://localhost:3002/bookings/${id}`, { method: "DELETE" });
    allBookings = allBookings.filter(b => b.id !== id);
    displayBookings(allBookings);
  }
}

async function deleteItem(type, id) {
  if(confirm("Are you sure you want to delete this item?")) {
    const endpoint = type === "enrollments" ? "enrollments" : "messages";
    await fetch(`http://localhost:3002/${endpoint}/${id}`, { method: "DELETE" });

    if(type === "enrollments") {
      allEnrollments = allEnrollments.filter(e => e.id !== id);
      createTable("enrollmentsTableContainer", allEnrollments, ["ownerName","email","phone","carMakeModel","year","mileage"], "enrollments");
    } else {
      allMessages = allMessages.filter(m => m.id !== id);
      createTable("messagesTableContainer", allMessages, ["name","email","phone","message","date"], "messages");
    }
  }
}





// -------------------- INIT --------------------
window.addEventListener("DOMContentLoaded", fetchData);
