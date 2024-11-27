// Sample flight data
const flights = [
    { flightNo: "W61283", origin: "Tel Aviv", destination: "Krakow", boarding: "2025-07-16 20:00", landing: "2025-07-17 01:00", seats: 100 },
    { flightNo: "LX8396", origin: "Larnaca", destination: "Zurich", boarding: "2025-07-18 18:00", landing: "2025-07-18 21:00", seats: 50 },
    { flightNo: "AF123", origin: "Paris", destination: "New York", boarding: "2025-07-19 14:00", landing: "2025-07-19 18:00", seats: 300 },
    { flightNo: "BA456", origin: "London", destination: "Dubai", boarding: "2025-07-20 22:00", landing: "2025-07-21 05:00", seats: 200 },
    { flightNo: "EK789", origin: "Dubai", destination: "Sydney", boarding: "2025-07-21 10:00", landing: "2025-07-22 06:00", seats: 150 },
    { flightNo: "JL101", origin: "Tokyo", destination: "Singapore", boarding: "2025-07-22 15:00", landing: "2025-07-22 20:00", seats: 180 },
    { flightNo: "SQ202", origin: "Singapore", destination: "Los Angeles", boarding: "2025-07-23 12:00", landing: "2025-07-23 20:00", seats: 220 },
    { flightNo: "KL303", origin: "Amsterdam", destination: "Berlin", boarding: "2025-07-24 08:00", landing: "2025-07-24 10:00", seats: 100 },
    { flightNo: "LH404", origin: "Berlin", destination: "Istanbul", boarding: "2025-07-25 13:00", landing: "2025-07-25 17:00", seats: 120 },
    { flightNo: "TG505", origin: "Bangkok", destination: "Rome", boarding: "2025-07-26 09:00", landing: "2025-07-26 15:00", seats: 130 },
    { flightNo: "AZ606", origin: "Rome", destination: "Madrid", boarding: "2025-07-27 11:00", landing: "2025-07-27 13:30", seats: 140 },
    { flightNo: "IB707", origin: "Madrid", destination: "Toronto", boarding: "2025-07-28 17:00", landing: "2025-07-28 23:00", seats: 160 },
    { flightNo: "AC808", origin: "Toronto", destination: "Mumbai", boarding: "2025-07-29 01:00", landing: "2025-07-29 12:30", seats: 180 },
    { flightNo: "AI909", origin: "Mumbai", destination: "Cape Town", boarding: "2025-07-30 06:00", landing: "2025-07-30 14:30", seats: 140 },
    { flightNo: "SA010", origin: "Cape Town", destination: "San Francisco", boarding: "2025-07-31 08:00", landing: "2025-07-31 20:00", seats: 150 },
    { flightNo: "UA111", origin: "San Francisco", destination: "Seoul", boarding: "2025-08-01 13:00", landing: "2025-08-02 07:30", seats: 200 },
    { flightNo: "KE212", origin: "Seoul", destination: "Tel Aviv", boarding: "2025-08-02 15:00", landing: "2025-08-02 21:00", seats: 180 },
    { flightNo: "CX313", origin: "Hong Kong", destination: "Singapore", boarding: "2025-08-03 09:00", landing: "2025-08-03 13:00", seats: 190 },
    { flightNo: "QF414", origin: "Sydney", destination: "Los Angeles", boarding: "2025-08-04 20:00", landing: "2025-08-04 15:00", seats: 200 },
    { flightNo: "DL515", origin: "Los Angeles", destination: "New York", boarding: "2025-08-05 08:00", landing: "2025-08-05 16:00", seats: 220 }
];


let selectedFlight = null;

// Populate table dynamically
function loadFlights() {
    const tableBody = document.querySelector("#flight-table tbody");
    tableBody.innerHTML = "";

    if (flights.length === 0) {
        document.getElementById("notification").style.display = "block";
    } else {
        document.getElementById("notification").style.display = "none";
        flights.forEach((flight, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${flight.flightNo}</td>
                <td>${flight.origin}</td>
                <td>${flight.destination}</td>
                <td><button class="book-btn" data-index="${index}">Book</button></td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Show booking form
function showBookingForm(flight) {
    selectedFlight = flight;

    document.getElementById("booking-origin").textContent = flight.origin;
    document.getElementById("booking-destination").textContent = flight.destination;
    document.getElementById("boarding-time").textContent = flight.boarding;
    document.getElementById("landing-time").textContent = flight.landing;

    document.getElementById("booking-form-container").style.display = "block";
}

// Handle booking form submission
function handleSaveBooking() {
    const numPassengers = parseInt(document.getElementById("num-passengers").value);
    if (numPassengers > selectedFlight.seats) {
        alert("Error: Number of passengers exceeds available seats!");
        return;
    }

    const passengers = [];
    for (let i = 1; i <= numPassengers; i++) {
        const name = document.getElementById(`passenger-${i}-name`).value;
        const passport = document.getElementById(`passenger-${i}-passport`).value;
        passengers.push({ name, passport });
    }

    alert(`Booking saved successfully!`);
    console.log({ flight: selectedFlight, passengers });
    document.getElementById("booking-form-container").style.display = "none";
}

// Generate passenger fields dynamically
function updatePassengerFields() {
    const passengerDetails = document.getElementById("passenger-details");
    const numPassengers = parseInt(document.getElementById("num-passengers").value);
    passengerDetails.innerHTML = "";

    for (let i = 1; i <= numPassengers; i++) {
        passengerDetails.innerHTML += `
            <div>
                <label for="passenger-${i}-name">Passenger ${i} Name:</label>
                <input type="text" id="passenger-${i}-name" required>
                <label for="passenger-${i}-passport">Passenger ${i} Passport ID:</label>
                <input type="text" id="passenger-${i}-passport" required>
            </div>
        `;
    }
}

// Event listeners
document.getElementById("num-passengers").addEventListener("change", updatePassengerFields);

document.getElementById("flight-table").addEventListener("click", (event) => {
    if (event.target.classList.contains("book-btn")) {
        const flightIndex = event.target.getAttribute("data-index");
        showBookingForm(flights[flightIndex]);
    }
});

document.getElementById("save-booking").addEventListener("click", handleSaveBooking);

document.getElementById("cancel-booking").addEventListener("click", () => {
    document.getElementById("booking-form-container").style.display = "none";
});

// Load initial data
loadFlights();

