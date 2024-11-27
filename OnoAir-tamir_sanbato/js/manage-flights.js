// Array to store flights
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
];;

// References to key elements
const flightsTableBody = document.querySelector("#flightsTable tbody");
const flightFormSection = document.querySelector("#flight-form-section");
const flightTableSection = document.querySelector("#flight-table-section");
const flightForm = document.querySelector("#flightForm");
const addFlightBtn = document.querySelector("#addFlightBtn");
const cancelFlightFormBtn = document.querySelector("#cancelFlightForm");

// Function to populate the flights table dynamically
function populateFlightsTable() {
    flightsTableBody.innerHTML = ""; // Clear existing rows

    if (flights.length === 0) {
        const noFlightsRow = document.createElement("tr");
        noFlightsRow.innerHTML = `<td colspan="6">No flights available</td>`;
        flightsTableBody.appendChild(noFlightsRow);
        return;
    }

    flights.forEach((flight) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${flight.flightNo}</td>
            <td>${flight.origin}</td>
            <td>${flight.destination}</td>
            <td>${new Date(flight.boarding).toLocaleString()}</td>
            <td>${new Date(flight.landing).toLocaleString()}</td>
            <td>${flight.seats}</td>
        `;
        flightsTableBody.appendChild(row);
    });
}

// Show the flight form
function showFlightForm() {
    flightFormSection.style.display = "block";
    flightTableSection.style.display = "none";
}

// Hide the flight form
function hideFlightForm() {
    flightFormSection.style.display = "none";
    flightTableSection.style.display = "block";
    flightForm.reset(); // Reset the form fields
}

// Validate and save a new flight
function handleSaveFlight(event) {
    event.preventDefault(); // Prevent form submission

    const flightNo = document.getElementById("flightNumber").value.trim();
    const departureCode = document.getElementById("departureCode").value.trim().toUpperCase();
    const landingCode = document.getElementById("landingCode").value.trim().toUpperCase();
    const departureDateTime = new Date(document.getElementById("departureDateTime").value);
    const landingDateTime = new Date(document.getElementById("landingDateTime").value);
    const numberOfSeats = parseInt(document.getElementById("numberOfSeats").value, 10);

    // Validations
    if (flightNo === "" || departureCode === "" || landingCode === "" || isNaN(numberOfSeats)) {
        alert("All fields must be filled.");
        return;
    }
    if (departureCode.length !== 3 || landingCode.length !== 3) {
        alert("Destination codes must be exactly 3 characters.");
        return;
    }
    if (landingDateTime <= departureDateTime) {
        alert("Landing time must be after departure time.");
        return;
    }

    // Create new flight object
    const newFlight = {
        flightNo,
        origin: departureCode,
        destination: landingCode,
        boarding: departureDateTime.toISOString(),
        landing: landingDateTime.toISOString(),
        seats: numberOfSeats
    };

    // Add the new flight to the array and refresh the table
    flights.push(newFlight);
    alert(`Flight ${flightNo} successfully added!`);
    console.log(newFlight); // Display the object in the console for reference
    populateFlightsTable();
    hideFlightForm();
}

// Event Listeners
addFlightBtn.addEventListener("click", showFlightForm);
cancelFlightFormBtn.addEventListener("click", hideFlightForm);
flightForm.addEventListener("submit", handleSaveFlight);

// Initialize the flights table on page load
populateFlightsTable();
