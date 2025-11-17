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



// ============================
// booking Form
// ============================


// Listen for the form submission
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent the default form submission (page reload)

  // Get values from the form inputs
  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const idNumber = document.getElementById("idNumber").value;
  const age = parseInt(document.getElementById("age").value); // Convert age to a number
  const car = document.getElementById("car").value;
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;

  // Validate ID Number length (must not exceed 10 characters)
  if(idNumber.length > 10) {
    alert("ID Number must not exceed 10 characters");
    return; // Stop further execution if invalid
  }

  // Validate age (must be 24 or older)
  if(age < 24) {
    alert("You must be older than 23 to book a car");
    return; // Stop further execution if invalid
  }
  if(age > 95) {
  alert("Sorry, drivers older than 95 cannot book a car for safety reasons");
  return; // Stop further execution if too old
}


  // Prepare the booking data object to send to the server
  const bookingData = {
    id: Math.random().toString(36).substr(2, 10), // Generate a random 10-character ID
    fullName,
    phone,
    idNumber,
    age,
    car,
    date,
    location,
    timestamp: new Date().toLocaleString() // Store the date and time of booking
  };

  // Send the booking data to the database (db.json endpoint)
  fetch("http://localhost:3002/bookings", {
    method: "POST", // HTTP method for sending new data
    headers: { "Content-Type": "application/json" }, // Specify JSON format
    body: JSON.stringify(bookingData) // Convert JS object to JSON string
  })
  .then(res => res.json()) // Convert server response to JSON
  .then(data => {
    // Show a confirmation alert to the user
    alert(`Thank you, ${fullName}! Your booking for ${car} is received. We will reach out to you shortly.`);
    document.getElementById("bookingForm").reset(); // Clear the form
  })
  .catch(err => {
    // Handle errors (e.g., server not running)
    console.error(err);
    alert("Error submitting booking. Try again.");
  });
});


document.addEventListener("keydown", function(e) {
  if(e.shiftKey && e.key === "A") {  
    window.location.href = "admin-login.html";
  }
});
