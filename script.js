// script.js
document.getElementById('idForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // User input values
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const level = document.getElementById('level').value;
  const idNumber = document.getElementById('idNumber').value;
  const photo = document.getElementById('photo').files[0];

  // Display values in ID card
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayAddress').textContent = address;
  document.getElementById('displayLevel').textContent = level;
  document.getElementById('displayIdNumber').textContent = idNumber;

  // Display photo
  const reader = new FileReader();
  reader.onload = function (e) {
    const displayPhoto = document.getElementById('displayPhoto');
    displayPhoto.innerHTML = `<img src="${e.target.result}" alt="User Photo">`;
  };
  reader.readAsDataURL(photo);

  // Show ID card and download button
  document.getElementById('main-id').style.display = 'block';
  document.getElementById('downloadBtn').style.display = 'block';
});

// Download ID Card as Image
document.getElementById('downloadBtn').addEventListener('click', function () {
  const idCard = document.getElementById('main-id');

  // Use html2canvas to convert ID card to an image
  html2canvas(idCard).then(function (canvas) {
    // Convert canvas to image
    const link = document.createElement('a');
    link.download = 'id_card.png'; // File name
    link.href = canvas.toDataURL(); // Convert canvas to image URL
    link.click(); // Trigger download
  });
});