document.addEventListener("DOMContentLoaded", () => {
    const destinations = [
        { name: "Tel Aviv", airportName: "Ben Gurion Airport", website: "https://www.iaa.gov.il/en/" },
        { name: "New York", airportName: "John F. Kennedy International Airport", website: "https://www.jfkairport.com/" },
        { name: "Paris", airportName: "Charles de Gaulle Airport", website: "https://www.parisaeroport.fr/" },
        { name: "London", airportName: "Heathrow Airport", website: "https://www.heathrow.com/" },
        { name: "Dubai", airportName: "Dubai International Airport", website: "https://www.dubaiairports.ae/" },
        { name: "Sydney", airportName: "Sydney Kingsford Smith Airport", website: "https://www.sydneyairport.com.au/" },
        { name: "Tokyo", airportName: "Narita International Airport", website: "https://www.narita-airport.jp/en/" },
        { name: "Singapore", airportName: "Changi Airport", website: "https://www.changiairport.com/" },
        { name: "Los Angeles", airportName: "Los Angeles International Airport", website: "https://www.flylax.com/" },
        { name: "Amsterdam", airportName: "Amsterdam Schiphol Airport", website: "https://www.schiphol.nl/en/" },
        { name: "Berlin", airportName: "Berlin Brandenburg Airport", website: "https://ber.berlin-airport.de/" },
        { name: "Istanbul", airportName: "Istanbul Airport", website: "https://www.istairport.com/" },
        { name: "Bangkok", airportName: "Suvarnabhumi Airport", website: "https://www.airportthai.co.th/" },
        { name: "Rome", airportName: "Leonardo da Vinci Airport", website: "https://www.adr.it/" },
        { name: "Madrid", airportName: "Adolfo Suárez Madrid–Barajas Airport", website: "https://www.aena.es/en/madrid.html" },
        { name: "Toronto", airportName: "Toronto Pearson International Airport", website: "https://www.torontopearson.com/" },
        { name: "Mumbai", airportName: "Chhatrapati Shivaji Maharaj International Airport", website: "https://www.csia.in/" },
        { name: "Cape Town", airportName: "Cape Town International Airport", website: "https://www.airports.co.za/" },
        { name: "San Francisco", airportName: "San Francisco International Airport", website: "https://www.flysfo.com/" },
        { name: "Seoul", airportName: "Incheon International Airport", website: "https://www.airport.kr/" }
    ];
    
    

    const destinationTableSection = document.getElementById("destination-table-section");
    const destinationFormSection = document.getElementById("destination-form-section");
    const destinationTableBody = document.querySelector("#destination-table tbody");
    const addDestinationBtn = document.getElementById("add-destination-btn");
    const cancelFormBtn = document.getElementById("cancel-form-btn");
    const destinationForm = document.getElementById("destination-form");

    // Function to display destinations in the table
    function displayDestinations() {
        destinationTableBody.innerHTML = ""; // Clear existing rows

        destinations.forEach((dest) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${dest.name}</td>
                <td>${dest.airportName}</td>
                <td><a href="${dest.website}" target="_blank">${dest.website}</a></td>
            `;
            destinationTableBody.appendChild(row);
        });
    }

    // Show the form for adding a new destination
    addDestinationBtn.addEventListener("click", () => {
        destinationTableSection.style.display = "none";
        destinationFormSection.style.display = "block";
    });

    // Cancel form and return to the destination table
    cancelFormBtn.addEventListener("click", () => {
        destinationForm.reset();
        destinationFormSection.style.display = "none";
        destinationTableSection.style.display = "block";
    });

    // Handle form submission
    destinationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newDestination = {
            name: document.getElementById("destination-name").value,
            airportName: document.getElementById("airport-name").value,
            website: document.getElementById("airport-website").value,
        };

        // Add new destination to the array and reset form
        destinations.push(newDestination);
        destinationForm.reset();

        // Show success message
        alert("Destination successfully saved!");

        // Return to the destination table and refresh
        destinationFormSection.style.display = "none";
        destinationTableSection.style.display = "block";
        displayDestinations();
    });

    // Initial display of destinations
    displayDestinations();
});
