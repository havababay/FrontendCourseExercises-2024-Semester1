// Sample flight data
const flights = [
    { flightNumber: "W61283", origin: "Tel Aviv", destination: "Kraków", departure: "2023-12-01 08:00", arrival: "2023-12-01 12:00", seats: 200 },
    { flightNumber: "LX8396", origin: "Larnaca", destination: "Zurich", departure: "2023-12-02 10:00", arrival: "2023-12-02 14:00", seats: 180 },
    { flightNumber: "AF347", origin: "Paris", destination: "New York", departure: "2023-12-03 16:00", arrival: "2023-12-03 22:00", seats: 220 },
    { flightNumber: "EK202", origin: "Dubai", destination: "London", departure: "2023-12-04 09:00", arrival: "2023-12-04 14:30", seats: 300 },
    { flightNumber: "SQ318", origin: "Singapore", destination: "Manchester", departure: "2023-12-05 18:00", arrival: "2023-12-06 00:30", seats: 250 },
    { flightNumber: "BA142", origin: "Mumbai", destination: "London", departure: "2023-12-06 07:00", arrival: "2023-12-06 12:30", seats: 280 },
    { flightNumber: "QF9", origin: "Sydney", destination: "Perth", departure: "2023-12-07 15:00", arrival: "2023-12-07 18:00", seats: 350 },
    { flightNumber: "DL81", origin: "Atlanta", destination: "Tokyo", departure: "2023-12-08 06:00", arrival: "2023-12-09 08:00", seats: 300 },
    { flightNumber: "LH400", origin: "Frankfurt", destination: "New York", departure: "2023-12-09 14:00", arrival: "2023-12-09 18:00", seats: 320 },
    { flightNumber: "AC857", origin: "London", destination: "Toronto", departure: "2023-12-10 12:00", arrival: "2023-12-10 17:30", seats: 250 }
];

function loadFlights() {
    const tableBody = document.getElementById("flightsTable").getElementsByTagName("tbody")[0];
    
    // Debugging: Log the flights to ensure data is available
    console.log("Flights Data:", flights);
    
    // Loop through the first 3 flights (adjust as necessary)
    flights.slice(0, 3).forEach(flight => {
        console.log("Adding Flight:", flight); // Log each flight added
        
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${flight.flightNumber}</td>
            <td>${flight.origin}</td>
            <td>${flight.destination}</td>
            <td>${flight.departure}</td>
            <td>${flight.arrival}</td>
            <td>${flight.seats}</td>
        `;
    });
}

// Load data on page load
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("flightsTable")) loadFlights();
});


// Function to add a new flight (placeholder for now)
function addFlight() {
    window.location.href = 'add-flight.html'; // Redirect to the Add Flight page
}

// Sample destination data
const destinations = [
    { name: "Kraków", airport: "John Paul II International Airport", website: "https://www.krakowairport.pl", code: "KRK" },
    { name: "Zurich", airport: "Zurich Airport", website: "https://www.zurich-airport.com", code: "ZRH" },
    { name: "New York", airport: "John F. Kennedy International Airport", website: "https://www.jfkairport.com", code: "JFK" },
    { name: "London", airport: "Heathrow Airport", website: "https://www.heathrow.com", code: "LHR" },
    { name: "Manchester", airport: "Manchester Airport", website: "https://www.manchesterairport.co.uk", code: "MAN" },
    { name: "Mumbai", airport: "Chhatrapati Shivaji Maharaj International Airport", website: "https://www.csia.in", code: "BOM" },
    { name: "Sydney", airport: "Sydney Kingsford Smith Airport", website: "https://www.sydneyairport.com.au", code: "SYD" },
    { name: "Tokyo", airport: "Narita International Airport", website: "https://www.narita-airport.jp", code: "NRT" },
    { name: "Toronto", airport: "Toronto Pearson International Airport", website: "https://www.torontopearson.com", code: "YYZ" },
    { name: "Paris", airport: "Charles de Gaulle Airport", website: "https://www.parisaeroport.fr", code: "CDG" }
];

// Function to populate the destinations table
function loadDestinations() {
    const tableBody = document.getElementById("destinationsTable").getElementsByTagName("tbody")[0];

    destinations.forEach(dest => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${dest.name}</td>
            <td>${dest.airport}</td>
            <td><a href="${dest.website}" target="_blank">${dest.website}</a></td>
            <td>${dest.code}</td>
        `;
    });
}

// Call the function to load destinations when the page is loaded
document.addEventListener("DOMContentLoaded", loadDestinations);



// Dummy functions for "Add" buttons (no actual adding yet)
function addDestination() {
    alert("Add Destination functionality not implemented yet.");
}

