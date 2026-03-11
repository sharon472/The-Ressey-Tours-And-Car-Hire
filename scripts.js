// ============================
// Handle Search Function
// ============================
document.getElementById('searchBtn')?.addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
});

// ============================
// Handle Category Buttons
// ============================
document.querySelectorAll('.cat-btn, .categories').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-cat');
    window.location.href = `hire.html#${category}`;
  });
});


// ============================
// TANSTACK TABLE (Rental Page)
// ============================
import {
  createTable,
  getCoreRowModel
} from "https://esm.sh/@tanstack/table-core@8.13.0";

window.addEventListener("DOMContentLoaded", () => {
  const tableContainer = document.getElementById("rentalTable");
  if (!tableContainer) return; // Only run on rental page

    
  // === Car Rental Data (Updated: Weekly & Monthly = "Ask Now") ===
const data = [
  // Economy Cars
  { car: "Toyota Axio", category: "Economy", pricePerDay: "KES 5,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan Note", category: "Economy", pricePerDay: "KES 4,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mazda Demio", category: "Economy", pricePerDay: "KES 4,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Fielder", category: "Economy", pricePerDay: "KES 5,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Suzuki Swift", category: "Economy", pricePerDay: "KES 4,200", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Passo", category: "Economy", pricePerDay: "KES 4,300", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Honda Fit", category: "Economy", pricePerDay: "KES 4,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan Tiida", category: "Economy", pricePerDay: "KES 4,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },

  // Compact Cars
  { car: "Toyota Vitz", category: "Compact", pricePerDay: "KES 4,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mazda Axela", category: "Compact", pricePerDay: "KES 4,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan March", category: "Compact", pricePerDay: "KES 3,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Belta", category: "Compact", pricePerDay: "KES 4,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Suzuki Alto", category: "Compact", pricePerDay: "KES 3,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Honda Grace", category: "Compact", pricePerDay: "KES 5,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },

  // Luxury Cars
  { car: "Mercedes S-Class", category: "Luxury", pricePerDay: "KES 15,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "BMW 7 Series", category: "Luxury", pricePerDay: "KES 14,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Audi A8", category: "Luxury", pricePerDay: "KES 13,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Lexus LS 500", category: "Luxury", pricePerDay: "KES 16,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Jaguar XF", category: "Luxury", pricePerDay: "KES 13,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Range Rover Vogue", category: "Luxury SUV", pricePerDay: "KES 20,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mercedes E-Class", category: "Luxury", pricePerDay: "KES 12,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "BMW X5", category: "Luxury SUV", pricePerDay: "KES 17,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },

  // SUVs
  { car: "Toyota Prado", category: "SUV", pricePerDay: "KES 12,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mitsubishi Pajero", category: "SUV", pricePerDay: "KES 11,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Land Cruiser V8", category: "SUV", pricePerDay: "KES 18,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Subaru Forester", category: "SUV", pricePerDay: "KES 9,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Mazda CX-5", category: "SUV", pricePerDay: "KES 9,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Nissan X-Trail", category: "SUV", pricePerDay: "KES 10,000", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Toyota Harrier", category: "SUV", pricePerDay: "KES 10,500", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },
  { car: "Honda CR-V", category: "SUV", pricePerDay: "KES 9,800", pricePerWeek: "Ask Now", pricePerMonth: "Ask Now", deposit: "No Deposit" },

  // Vans & Group Travel
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


// ============================
// Enrollment Form - FleetFlow API
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".enroll-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector("button[type='submit']");
    const originalText = btn.textContent;
    btn.textContent = "Submitting…";
    btn.disabled = true;

    const cfg        = window.FLEETFLOW_CONFIG || {};
    const apiUrl     = cfg.API_URL     || "https://ressey-crms-backend.onrender.com/api";
    const companyId  = cfg.COMPANY_ID  || "";

    // Parse Make & Model from the combined field
    const carMakeModel = document.getElementById("carMakeModel").value.trim();
    const parts        = carMakeModel.split(" ");
    const vehicleMake  = parts[0] || carMakeModel;
    const vehicleModel = parts.slice(1).join(" ") || carMakeModel;

    const payload = {
      companyId,
      ownerName:    document.getElementById("ownerName").value.trim(),
      ownerEmail:   document.getElementById("email").value.trim(),
      ownerPhone:   document.getElementById("phone").value.trim(),
      vehicleMake,
      vehicleModel,
      vehicleYear:  parseInt(document.getElementById("year").value, 10) || undefined,
    };

    try {
      const res = await fetch(`${apiUrl}/public/website/enrollments`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        const ref = json.data?.enrollmentRef || "";
        alert(
          `Thank you for partnering with The Ressey Tours & Car Hire!\n\n` +
          `Your enrollment has been received${ref ? ` (Ref: ${ref})` : ""}.\n` +
          `Our review team will contact you within 24 hours.`
        );
        form.reset();
      } else {
        alert(json.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Enrollment submission error:", err);
      alert("Could not reach the server. Please check your connection and try again.");
    } finally {
      btn.textContent = originalText;
      btn.disabled    = false;
    }
  });
});



// ============================
// Contact Form - WhatsApp redirect
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const name    = document.getElementById("name").value.trim();
      const email   = document.getElementById("email").value.trim();
      const phone   = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      const waText = encodeURIComponent(
        "Hello Ressey Tours!\n\nNew message from your website:\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n\n" +
        "Message: " + message
      );

      const confirmation = document.getElementById("confirmation");
      if (confirmation) {
        confirmation.textContent = "Thank you! Opening WhatsApp to send your message...";
        confirmation.style.color = "#25D366";
        confirmation.style.marginTop = "10px";
        confirmation.style.display = "block";
      }

      setTimeout(function() {
        window.open("https://wa.me/254727347926?text=" + waText, "_blank");
        contactForm.reset();
        if (confirmation) {
          confirmation.textContent = "Message sent via WhatsApp. We will respond shortly!";
        }
      }, 1200);
    });
  }
});



// ============================
// BOOKING SYSTEM - FleetFlow API
// ============================

// ── State ─────────────────────────────────────────────────────────
let _selectedCarName  = "";
let _selectedCarPrice = 0;
let _withDriver       = false;
const DRIVER_FEE_PER_DAY = 2500;

// ── Global: called from "Book This Car" buttons ────────────────────
window.bookThisCar = function(carName, dailyRate) {
  _selectedCarName  = carName;
  _selectedCarPrice = dailyRate;

  const banner      = document.getElementById("carBanner");
  const nameEl      = document.getElementById("selectedCarName");
  const rateEl      = document.getElementById("selectedCarRate");
  const carGroup    = document.getElementById("carSelectGroup");
  const carHidden   = document.getElementById("carHidden");
  const carPrice    = document.getElementById("carPriceHidden");

  if (nameEl)   nameEl.textContent = carName;
  if (rateEl)   rateEl.textContent = `KES ${dailyRate.toLocaleString()} / day`;
  if (banner)   banner.style.display = "flex";
  if (carGroup) carGroup.style.display = "none";
  if (carHidden) carHidden.value = carName;
  if (carPrice)  carPrice.value  = dailyRate;

  updatePriceCalculator();

  const section = document.getElementById("book");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    // Briefly pulse the card
    const card = section.querySelector(".booking-card");
    if (card) {
      card.classList.add("booking-pulse");
      setTimeout(() => card.classList.remove("booking-pulse"), 800);
    }
  }
};

// ── Auto-inject "Book This Car" on all car cards ───────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".car-item").forEach((item) => {
    const h3      = item.querySelector("h3");
    const priceEl = item.querySelector(".price");
    if (!h3 || !priceEl) return;

    const carName = h3.textContent.trim();
    const digits  = priceEl.textContent.replace(/,/g, "").match(/\d+/);
    const rate    = digits ? parseInt(digits[0]) : 0;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn book-this-car";
    btn.innerHTML = `<svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/></svg> Book This Car`;
    btn.addEventListener("click", () => window.bookThisCar(carName, rate));

    const btnGroup = item.querySelector(".btn-group");
    if (btnGroup) btnGroup.appendChild(btn);
  });

  // ── "Change car" clears the banner ──────────────────────────────
  document.getElementById("changeCar")?.addEventListener("click", () => {
    _selectedCarName  = "";
    _selectedCarPrice = 0;
    document.getElementById("carBanner").style.display   = "none";
    document.getElementById("carSelectGroup").style.display = "block";
    document.getElementById("carHidden").value  = "";
    document.getElementById("carPriceHidden").value = "0";
    document.getElementById("car").value = "";
    updatePriceCalculator();
  });

  // ── Car dropdown selection ────────────────────────────────────────
  document.getElementById("car")?.addEventListener("change", function() {
    const val = this.value;
    if (!val) { _selectedCarName = ""; _selectedCarPrice = 0; updatePriceCalculator(); return; }
    const [name, price] = val.split("|");
    _selectedCarName  = name || "";
    _selectedCarPrice = parseInt(price) || 0;
    document.getElementById("carHidden").value      = _selectedCarName;
    document.getElementById("carPriceHidden").value = _selectedCarPrice;
    updatePriceCalculator();
  });

  // ── Driver toggle ─────────────────────────────────────────────────
  document.querySelectorAll("input[name='withDriver']").forEach(radio => {
    radio.addEventListener("change", function() {
      _withDriver = this.value === "yes";
      // Highlight active pill
      document.querySelectorAll(".driver-option").forEach(opt => opt.classList.remove("active"));
      this.closest(".driver-option")?.classList.add("active");
      updatePriceCalculator();
    });
  });
  // Set initial active state
  document.querySelector(".driver-option:first-child")?.classList.add("active");

  // ── Date pickers ──────────────────────────────────────────────────
  const pickupInput  = document.getElementById("pickupDate");
  const returnInput  = document.getElementById("returnDate");
  const durationBox  = document.getElementById("durationDisplay");
  const durationText = document.getElementById("durationText");

  const today = new Date().toISOString().split("T")[0];
  if (pickupInput) pickupInput.setAttribute("min", today);

  pickupInput?.addEventListener("change", () => {
    const pickup = new Date(pickupInput.value);
    if (!isNaN(pickup.getTime())) {
      const nextDay = new Date(pickup);
      nextDay.setDate(nextDay.getDate() + 1);
      const minReturn = nextDay.toISOString().split("T")[0];
      returnInput.setAttribute("min", minReturn);
      if (returnInput.value && returnInput.value <= pickupInput.value) {
        returnInput.value = minReturn;
      }
    }
    updateDurationAndPrice();
  });

  returnInput?.addEventListener("change", updateDurationAndPrice);

  function updateDurationAndPrice() {
    const pickup = new Date(pickupInput?.value);
    const ret    = new Date(returnInput?.value);
    if (!isNaN(pickup.getTime()) && !isNaN(ret.getTime()) && ret > pickup) {
      const days = Math.round((ret - pickup) / 86400000);
      durationText.textContent  = `${days} day${days !== 1 ? "s" : ""} rental`;
      durationBox.style.display = "block";
    } else {
      durationBox.style.display = "none";
    }
    updatePriceCalculator();
  }

  // ── Price Calculator ──────────────────────────────────────────────
  function updatePriceCalculator() {
    const calc       = document.getElementById("priceCalculator");
    const pickup     = new Date(pickupInput?.value);
    const ret        = new Date(returnInput?.value);
    const validDates = !isNaN(pickup.getTime()) && !isNaN(ret.getTime()) && ret > pickup;

    if (!_selectedCarName || !_selectedCarPrice || !validDates) {
      if (calc) calc.style.display = "none";
      return;
    }

    const days       = Math.round((ret - pickup) / 86400000);
    const carTotal   = _selectedCarPrice * days;
    const driverFee  = _withDriver ? DRIVER_FEE_PER_DAY * days : 0;
    const grandTotal = carTotal + driverFee;

    const fmt = (n) => `KES ${n.toLocaleString()}`;

    document.getElementById("pcCarName").textContent   = _selectedCarName;
    document.getElementById("pcDailyRate").textContent = fmt(_selectedCarPrice) + "/day";
    document.getElementById("pcDuration").textContent  = `${days} day${days !== 1 ? "s" : ""}`;
    document.getElementById("pcTotal").textContent     = fmt(grandTotal);

    const driverRow = document.getElementById("pcDriverRow");
    if (driverRow) {
      driverRow.style.display = _withDriver ? "flex" : "none";
      const driverFeeEl = document.getElementById("pcDriverFee");
      if (driverFeeEl) driverFeeEl.textContent = fmt(driverFee);
    }

    if (calc) calc.style.display = "block";
  }

  // Make updatePriceCalculator accessible in scope
  window.updatePriceCalculator = updatePriceCalculator;

  // ── Error / loading helpers ───────────────────────────────────────
  const errorBanner = document.getElementById("bookingError");
  const submitBtn   = document.getElementById("bookingSubmitBtn");
  const btnText     = document.getElementById("btnText");
  const btnSpinner  = document.getElementById("btnSpinner");
  const modal       = document.getElementById("bookingModal");
  const modalRef    = document.getElementById("modalRef");
  const modalWA     = document.getElementById("modalWhatsApp");
  const modalClose  = document.getElementById("modalCloseBtn");

  function showError(msg) {
    if (!errorBanner) return;
    errorBanner.textContent   = msg;
    errorBanner.style.display = "block";
    errorBanner.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  function clearError() {
    if (errorBanner) { errorBanner.style.display = "none"; errorBanner.textContent = ""; }
  }
  function setLoading(on) {
    if (submitBtn)  submitBtn.disabled         = on;
    if (btnText)    btnText.style.display      = on ? "none"         : "inline";
    if (btnSpinner) btnSpinner.style.display   = on ? "inline-block" : "none";
  }
  function showModal(ref, name, car) {
    if (!modal) return;
    if (modalRef) modalRef.textContent = ref || "—";
    const waMsg = encodeURIComponent(
      `Hello Ressey Tours! I submitted a booking request on your website.\n` +
      `Name: ${name}\nReference: ${ref}\nCar: ${car}\nPlease confirm. Thank you!`
    );
    if (modalWA) modalWA.href = `https://wa.me/254727347926?text=${waMsg}`;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (modal) { modal.style.display = "none"; }
    document.body.style.overflow = "";
    document.getElementById("bookingForm")?.reset();
    _selectedCarName  = "";
    _selectedCarPrice = 0;
    document.getElementById("carBanner").style.display    = "none";
    document.getElementById("carSelectGroup").style.display = "block";
    document.getElementById("carHidden").value            = "";
    document.getElementById("carPriceHidden").value       = "0";
    if (durationBox) durationBox.style.display = "none";
    if (calc)        calc.style.display        = "none";
    clearError();
  }

  const calc = document.getElementById("priceCalculator");

  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  // ── Form submission ───────────────────────────────────────────────
  document.getElementById("bookingForm")?.addEventListener("submit", async function(e) {
    e.preventDefault();
    clearError();

    const fullName    = document.getElementById("fullName")?.value.trim() || "";
    const phone       = document.getElementById("phone")?.value.trim() || "";
    const age         = parseInt(document.getElementById("age")?.value || "0", 10);
    const carName     = document.getElementById("carHidden")?.value || _selectedCarName;
    const destination = document.getElementById("destination")?.value || "";
    const pickup      = pickupInput?.value || "";
    const ret         = returnInput?.value || "";
    const location    = document.getElementById("location")?.value.trim() || "";
    const message     = document.getElementById("bookingMessage")?.value.trim() || "";
    const withDriver  = _withDriver;

    // ── Validation ────────────────────────────────────────────────
    if (age < 24)  { showError("You must be 24 years or older to hire a car."); return; }
    if (age > 95)  { showError("Sorry, we cannot hire to drivers older than 95."); return; }
    if (!carName)  { showError("Please select a car — scroll up and click 'Book This Car' on any vehicle."); return; }
    if (!pickup)   { showError("Please select a pick-up date."); return; }
    if (!ret)      { showError("Please select a return date."); return; }
    if (new Date(ret) <= new Date(pickup)) { showError("Return date must be after the pick-up date."); return; }
    if (!destination) { showError("Please select your destination."); return; }

    setLoading(true);

    const cfg       = window.FLEETFLOW_CONFIG || {};
    const apiUrl    = cfg.API_URL    || "https://ressey-crms-backend.onrender.com/api";
    const companyId = cfg.COMPANY_ID || "";

    const carParts    = carName.split(" ");
    const vehicleMake  = carParts[0];
    const vehicleModel = carParts.slice(1).join(" ") || carName;

    const fullMsg = [
      message,
      `Age: ${age}.`,
      `Destination: ${destination}.`,
      withDriver ? "Needs a driver." : "Self-drive.",
    ].filter(Boolean).join(" ");

    const payload = {
      companyId,
      customerName:    fullName,
      customerPhone:   phone,
      vehicleMake,
      vehicleModel,
      startDate:       new Date(pickup).toISOString(),
      endDate:         new Date(ret).toISOString(),
      pickupLocation:  location,
      message:         fullMsg,
    };

    try {
      const res  = await fetch(`${apiUrl}/public/website/bookings`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        showModal(json.data?.bookingRef || "PB-??????", fullName, carName);
      } else {
        showError(json.error || "Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      showError("Could not reach the server. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  });
});


document.addEventListener("keydown", function(e) {
  if(e.shiftKey && e.key === "A") {  
    window.location.href = "admin-login.html";
  }
});
