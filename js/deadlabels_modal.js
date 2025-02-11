// Function to open the modal with the correct audio and playlist
function openModal(index) {
  var modal = document.getElementById("audioModal");
  var audioSource = document.getElementById("audioSource");
  var playlistContainer = document.getElementById("playlistContainer");
  var infoLink = document.querySelector("#info a");
  var labelInfo = document.getElementById("labelInfo");
  
  // Ensure we have data for the given index
  if (modalData[index]) {
    audioSource.src = modalData[index].audioUrl;
    playlistContainer.innerHTML = modalData[index].playlistHTML;
    document.getElementById('audioPlayer').load();
    infoLink.href = modalData[index].audioUrl;
    labelInfo.innerHTML = modalData[index].labelInfo;
    document.querySelectorAll('.modal a').forEach(link => {
      link.setAttribute('target', '_blank');
});
    // Position the modal based on the mouse click
    var xPos = event.clientX;
    var yPos = event.clientY;
    modal.style.left = xPos + 'px';
    modal.style.top = yPos + 'px';
    modal.style.display = "block";
    
    // Add click event listener when modal opens
    document.addEventListener('click', closeModalOutside);
  } else {
    console.error("No data available for index:", index);
  }
}
document.querySelectorAll('.modal a').forEach(link => {
  if (link.href.includes('discogs.com')) {
    link.setAttribute('target', '_blank');
  }
});
// Function to handle clicks outside modal
function closeModalOutside(event) {
  var modal = document.getElementById("audioModal");
  
  // Check if modal is displayed and click is outside modal
  if (modal.style.display === "block" && 
      !modal.contains(event.target) && 
      !event.target.matches('.column img')) {
    modal.style.display = "none";
    // Remove event listener when modal closes
    document.removeEventListener('click', closeModalOutside);
  }
}

// Event listener to open modal when clicking on an image
document.querySelectorAll('.column img').forEach((img) => {
  img.addEventListener('click', function() {
    const index = parseInt(this.getAttribute('onclick').match(/\d+/)[0]);
    openModal(index);
  });
});

// Close the modal when clicking the close button
var closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {
  var modal = document.getElementById("audioModal");
  modal.style.display = "none";
  // Remove event listener when using close button
  document.removeEventListener('click', closeModalOutside);
}
