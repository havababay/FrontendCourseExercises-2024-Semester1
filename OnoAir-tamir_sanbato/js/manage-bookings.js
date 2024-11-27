// Example booking data array
const bookings = [
    {
        origin: "Tel Aviv",
        destination: "Krakow",
        boardingTime: "2025-07-16 20:00",
        landingTime: "2025-07-17 01:00",
        numPassengers: 5,
        destinationImage: "images/krakow.jpg"
    },
    {
        origin: "Krakow",
        destination: "Larnaca",
        boardingTime: "2024-05-20 20:00",
        landingTime: "2024-05-21 02:00",
        numPassengers: 6,
        destinationImage: "images/larnaca.jpg"
    }
];

// Function to save a new booking
function saveBooking(origin, destination, boardingTime, landingTime, numPassengers, destinationImage) {
    const newBooking = {
        origin: origin,
        destination: destination,
        boardingTime: boardingTime,
        landingTime: landingTime,
        numPassengers: numPassengers,
        destinationImage: destinationImage
    };
    
    // Add the new booking to the bookings array
    bookings.push(newBooking);
    displayBookings(); // Update the display of bookings
}

// Function to display all bookings on the "My Bookings" page
function displayBookings() {
    const bookingsList = document.getElementById('bookingsList');
    bookingsList.innerHTML = ""; // Clear previous content
    
    bookings.forEach(booking => {
        // Create container for each booking
        const bookingContainer = document.createElement('div');
        bookingContainer.classList.add('booking-container');
        
        // Create and append booking information
        const origin = document.createElement('p');
        origin.textContent = `Origin: ${booking.origin}`;
        bookingContainer.appendChild(origin);
        
        const boarding = document.createElement('p');
        boarding.textContent = `Boarding: ${new Date(booking.boardingTime).toLocaleString()}`;
        bookingContainer.appendChild(boarding);
        
        const destination = document.createElement('p');
        destination.textContent = `Destination: ${booking.destination}`;
        bookingContainer.appendChild(destination);
        
        const landing = document.createElement('p');
        landing.textContent = `Landing: ${new Date(booking.landingTime).toLocaleString()}`;
        bookingContainer.appendChild(landing);
        
        const numPassengers = document.createElement('p');
        numPassengers.textContent = `No. of passengers: ${booking.numPassengers}`;
        bookingContainer.appendChild(numPassengers);
        
        // Add destination image
        const img = document.createElement('img');
        img.src = booking.destinationImage;
        img.alt = `${booking.destination} Image`;
        img.classList.add('destination-image');
        bookingContainer.appendChild(img);
        
        // Append the booking container to the list
        bookingsList.appendChild(bookingContainer);
    });
}

// Initial call to display bookings
displayBookings();

// Example of saving a new booking
saveBooking("London", "Dubai", "2025-06-15 15:00", "2025-06-15 23:30", 2, "images/dubai.jpg");
