// ============================
// 🔍 Handle Search Function
// ============================
document.getElementById('searchBtn')?.addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
});

// ============================
// 🚗 Handle Category Buttons
// ============================
document.querySelectorAll('.cat-btn, .categories').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-cat');
    window.location.href = `hire.html#${category}`;
  });
});


// ============================
// 💰 TANSTACK TABLE (Rental Page)
// ============================
import {
  createTable,
  getCoreRowModel
} from "https://esm.sh/@tanstack/table-core@8.13.0";

window.addEventListener("DOMContentLoaded", () => {
  const tableContainer = document.getElementById("rentalTable");
  if (!tableContainer) return; // ✅ Only run on rental page

    
  // === Car Rental Data (Updated: Weekly & Monthly = "Ask Now") ===
const data = [
  // 🚗 Economy Cars
  { car: "Toyota Axio", category: "Economy", pricePerDay: "KES 5,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan Note", category: "Economy", pricePerDay: "KES 4,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mazda Demio", category: "Economy", pricePerDay: "KES 4,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Fielder", category: "Economy", pricePerDay: "KES 5,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Suzuki Swift", category: "Economy", pricePerDay: "KES 4,200", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Passo", category: "Economy", pricePerDay: "KES 4,300", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Honda Fit", category: "Economy", pricePerDay: "KES 4,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan Tiida", category: "Economy", pricePerDay: "KES 4,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },

  // 🚙 Compact Cars
  { car: "Toyota Vitz", category: "Compact", pricePerDay: "KES 4,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mazda Axela", category: "Compact", pricePerDay: "KES 4,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan March", category: "Compact", pricePerDay: "KES 3,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Belta", category: "Compact", pricePerDay: "KES 4,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Suzuki Alto", category: "Compact", pricePerDay: "KES 3,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Honda Grace", category: "Compact", pricePerDay: "KES 5,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },

  // 🏎️ Luxury Cars
  { car: "Mercedes S-Class", category: "Luxury", pricePerDay: "KES 15,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "BMW 7 Series", category: "Luxury", pricePerDay: "KES 14,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Audi A8", category: "Luxury", pricePerDay: "KES 13,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Lexus LS 500", category: "Luxury", pricePerDay: "KES 16,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Jaguar XF", category: "Luxury", pricePerDay: "KES 13,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Range Rover Vogue", category: "Luxury SUV", pricePerDay: "KES 20,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mercedes E-Class", category: "Luxury", pricePerDay: "KES 12,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "BMW X5", category: "Luxury SUV", pricePerDay: "KES 17,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },

  // 🚘 SUVs
  { car: "Toyota Prado", category: "SUV", pricePerDay: "KES 12,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mitsubishi Pajero", category: "SUV", pricePerDay: "KES 11,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Land Cruiser V8", category: "SUV", pricePerDay: "KES 18,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Subaru Forester", category: "SUV", pricePerDay: "KES 9,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mazda CX-5", category: "SUV", pricePerDay: "KES 9,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan X-Trail", category: "SUV", pricePerDay: "KES 10,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Harrier", category: "SUV", pricePerDay: "KES 10,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Honda CR-V", category: "SUV", pricePerDay: "KES 9,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },

  // 🚌 Vans & Group Travel
  { car: "Toyota Hiace", category: "Van", pricePerDay: "KES 10,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan Caravan", category: "Van", pricePerDay: "KES 9,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Noah", category: "Van", pricePerDay: "KES 8,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Alphard", category: "Van", pricePerDay: "KES 11,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mazda Bongo", category: "Van", pricePerDay: "KES 8,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Hyundai H1", category: "Van", pricePerDay: "KES 9,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Coaster", category: "Mini Bus", pricePerDay: "KES 18,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan Serena", category: "Van", pricePerDay: "KES 8,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
];



  // === Table Columns ===
  const columns = [
    { header: "Car Model", accessorKey: "car" },
    { header: "Category", accessorKey: "category" },
    { header: "Per Day", accessorKey: "pricePerDay" },
    { header: "Per Week", accessorKey: "pricePerWeek" },
    { header: "Per Month", accessorKey: "pricePerMonth" },
    { header: "Deposit", accessorKey: "deposit" },
  ];

  // === Build Table ===
  const tableElement = document.createElement("table");
  tableElement.classList.add("rental-table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  columns.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col.header;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  tableElement.appendChild(thead);

  const tbody = document.createElement("tbody");

  data.forEach(row => {
    const tr = document.createElement("tr");
    columns.forEach(col => {
      const td = document.createElement("td");
      td.textContent = row[col.accessorKey];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  tableElement.appendChild(tbody);
  tableContainer.appendChild(tableElement);
});


 // === enrollment html fille to interact form ===

 // scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".enroll-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      ownerName: document.getElementById("ownerName").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      carMakeModel: document.getElementById("carMakeModel").value.trim(),
      year: document.getElementById("year").value,
      mileage: document.getElementById("mileage").value,
    };

    try {
      // Send POST request to JSON Server
      const res = await fetch("http://localhost:3002/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(" Thank you for partnering with *The Ressey Tours & Car Hire*! Your car enrollment has been received successfully. Our review team will contact you within 24 hours to complete the verification process.");
        form.reset(); // clear form after submission
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("⚠️ Could not connect to the server. Make sure JSON Server is running.");
      console.error(err);
    }
  });
});



// ============================
// 💌 Contact Form
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        message: document.getElementById("message").value.trim(),
        date: new Date().toLocaleString(),
      };

      try {
        const res = await fetch("http://localhost:3002/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          alert(
            "💌 Thank you for contacting The Ressey Tours & Car Hire! ✨\nYour message has been received. Our team will reach out shortly!"
          );
          contactForm.reset();
        } else {
          alert("⚠️ Oops! Something went wrong while sending your message. Please try again later.");
        }
      } catch (err) {
        alert("❌ Unable to connect to the server. Please ensure JSON Server is running on port 3001.");
        console.error(err);
      }
    });
  }
});