
# THE RESSEY TOURS & CAR HIRE

A modern, responsive car rental website built with HTML, CSS, and JavaScript. This project provides a fully functional frontend for users to browse vehicles, view featured cars, make bookings, and learn about the company's services. It also includes JSON data integration for dynamic content using **json-server**.

---

## 📂 Project Structure

```

root/
│
├── index.html           # Homepage
├── hire.html            # Car hire/reservation page
├── enroll.html  
        # Enrollment/booking page
├── styles.css           # Main CSS file
├── images/              # Folder containing all images
├── db.json              # JSON file for sample data (vehicles, bookings)
└── README.md            # Project documentation

````

---

## 💻 Features

### Homepage (`index.html`)
- Hero section with a catchy slogan.
- "How to Hire" steps with hover effects.
- Featured vehicles carousel.
- "Why Choose Us" section highlighting company benefits.
- Customer reviews section.
- Category buttons for easy navigation.
- Responsive layout for mobile, tablet, and desktop.

### Car Hire Page (`hire.html`)
- Grid of available vehicles with images, names, descriptions, and prices.
- Call-to-action buttons for WhatsApp contact and phone calls.
- Fully responsive car grid layout.
- FAQ section with expandable/collapsible questions.

### Enrollment Page (`enroll.html`)
- Enrollment form for car rentals.
- Input fields for name, email, phone, age, license upload, and vehicle selection.
- Features section highlighting company services.
- Responsive and mobile-friendly layout.

### JSON Server Integration
- Stores vehicle data and bookings.
- Allows local API testing using **json-server**.
- Dynamic content loading using fetch requests.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Install Node.js
If you don't have Node.js installed:

- Download Node.js from [https://nodejs.org/](https://nodejs.org/)
- Install the **LTS version** (recommended for stability)
- Verify installation:

```bash
node -v
npm -v
````

---

### 2. Install JSON Server

JSON Server simulates a REST API for testing.

```bash
npm install -g json-server
```

---

### 3. Run the JSON Server

Ensure you are in the project root directory (where `db.json` is located):

```bash
npx json-server --watch db.json --port 3002
```

* This will start the server at: `http://localhost:3002/`
* You can access your vehicle data at `http://localhost:3002/vehicles`
* Bookings can be posted and retrieved dynamically.

---

### 4. Open the Project

* Simply open `index.html` in a web browser.
* Navigate between `index.html`, `hire.html`, and `enroll.html`.
* Interact with features like car booking, FAQs, and contact buttons.

---

## 🛠️ Technologies Used

* **HTML5** – Structure and semantic elements
* **CSS3** – Styling and responsive design
* **JavaScript** – Dynamic interactions and API calls
* **JSON Server** – Mock API for testing backend
* **Google Fonts** – Poppins and Roboto
* **Swiper.js** – Carousel for featured vehicles

---

## 🎨 Styles & Design

* Gradient backgrounds for a modern look.
* Hover effects on buttons, cards, and images.
* Responsive flexbox and grid layouts.
* Subtle shadows and border accents for emphasis.
* Easy-to-read typography with consistent font usage.

---

## 📱 Responsive Design

* Mobile-first design
* Breakpoints:

  * `≤480px` – Small mobile screens
  * `≤768px` – Tablets
  * `≤1024px` – Laptops
* Layouts adjust automatically for readability and usability.

---

## 📞 Contact / Project Owner

**Project for:** Ian Njoroge
**Phone:** 0745177953
**Email:** [iannjoge@gmail.com]

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## ✅ Summary

THE RESSEY TOURS & CAR HIRE website provides a complete frontend solution for a car rental business.
It includes:

* Engaging hero sections and animations
* Step-by-step hire instructions
* Featured car carousel with smooth transitions
* Booking/enrollment forms
* FAQ and customer review sections
* Responsive design across all devices
* JSON Server backend simulation for dynamic data

Perfect as a **portfolio project** or a **demo for a small car rental business**.

---

## 📌 Notes

* Ensure Node.js is installed before using JSON Server.
* All images should be placed in the `images/` folder.
* Use `npx json-server --watch db.json --port 3002` to simulate backend data.
* Customize cars, prices, and details in `db.json` as needed.

```

---

```
