// Mock donor data
const mockDonors = [
  { name: 'Rajesh', bloodType: 'A+', location: 'Delhi' },
  { name: 'Sneha', bloodType: 'B+', location: 'Mumbai' },
  { name: 'Amit', bloodType: 'O-', location: 'Kolkata' },
  { name: 'Priya', bloodType: 'A+', location: 'Chennai' },
];

document.getElementById('donorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from submitting
  searchDonors();
});

function searchDonors() {
  const bloodType = document.getElementById('bloodType').value;
  const location = document.getElementById('location').value.toLowerCase();

  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  // Filter mock data
  const filtered = mockDonors.filter(donor => 
    (bloodType ? donor.bloodType === bloodType : true) &&
    (location ? donor.location.toLowerCase().includes(location) : true)
  );

  if (filtered.length > 0) {
    filtered.forEach(donor => {
      const li = document.createElement('li');
      li.textContent = `${donor.name} - ${donor.bloodType} - ${donor.location}`;
      resultsContainer.appendChild(li);
    });
  } else {
    resultsContainer.innerHTML = '<li>No donors found.</li>';
  }
}