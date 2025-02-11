// Define a mapping of index to audio URL and playlist HTML

/*    let currentPlayingIndex = null;
    const audioPlayer = document.getElementById('audioPlayer');
    const nowPlaying = document.getElementById('nowPlaying');

    function openModal(index) {
      const modal = document.getElementById("audioModal");
      const playButton = document.getElementById("playButton");
      const playlistContainer = document.getElementById("playlistContainer");
      const infoLink = document.querySelector("#info a");
      const labelInfo = document.getElementById("labelInfo");
      
      if (modalData[index]) {
        // Update modal content
        playlistContainer.innerHTML = modalData[index].playlistHTML;
        infoLink.href = modalData[index].audioUrl;
        labelInfo.innerHTML = modalData[index].labelInfo;
        
        // Update play button state
        playButton.classList.toggle('playing', currentPlayingIndex === index);
        playButton.textContent = currentPlayingIndex === index && !audioPlayer.paused ? 'Pause' : 'Play';
        
        // Store the current index for the play button
        playButton.dataset.index = index;
        
        // Position and show modal
        const xPos = event.clientX;
        const yPos = event.clientY;
        modal.style.left = xPos + 'px';
        modal.style.top = yPos + 'px';
        modal.style.display = "block";
        
        document.addEventListener('click', closeModalOutside);
      }
    }

    // Play button click handler
    document.getElementById('playButton').addEventListener('click', function() {
      const index = parseInt(this.dataset.index);
      
      if (currentPlayingIndex === index) {
        // Toggle play/pause for current track
        if (audioPlayer.paused) {
          audioPlayer.play();
          this.textContent = 'Pause';
          this.classList.add('playing');
        } else {
          audioPlayer.pause();
          this.textContent = 'Play';
          this.classList.remove('playing');
        }
      } else {
        // Play new track
        audioPlayer.src = modalData[index].audioUrl;
        audioPlayer.play();
        currentPlayingIndex = index;
        this.textContent = 'Pause';
        this.classList.add('playing');
        nowPlaying.textContent = modalData[index].labelInfo;
      }
    });*/
let currentPlayingIndex = null;
    const audioPlayer = document.getElementById('audioPlayer');
    const nowPlaying = document.getElementById('nowPlaying');

    // Play next track when current one ends
    audioPlayer.addEventListener('ended', function() {
      const nextIndex = (currentPlayingIndex + 1) % modalData.length;
      audioPlayer.src = modalData[nextIndex].audioUrl;
      currentPlayingIndex = nextIndex;
      nowPlaying.textContent = modalData[nextIndex].labelInfo;
      audioPlayer.play();
    });

    function openModal(index) {
      const modal = document.getElementById("audioModal");
      const playButton = document.getElementById("playButton");
      const playlistContainer = document.getElementById("playlistContainer");
      const infoLink = document.querySelector("#info a");
      const labelInfo = document.getElementById("labelInfo");

      if (modalData[index]) {
        // Update modal content
        playlistContainer.innerHTML = modalData[index].playlistHTML;
        infoLink.href = modalData[index].audioUrl;
        labelInfo.innerHTML = modalData[index].labelInfo;

        // Update play button state
        playButton.classList.toggle('playing', currentPlayingIndex === index);
        playButton.textContent = currentPlayingIndex === index && !audioPlayer.paused ? 'Pause' : 'Play';

        // Store the current index for the play button
        playButton.dataset.index = index;

        // Position and show modal
        const xPos = event.clientX;
        const yPos = event.clientY;
        modal.style.left = xPos + 'px';
        modal.style.top = yPos + 'px';
        modal.style.display = "block";

        document.addEventListener('click', closeModalOutside);

        // Make all links open in new tab
        document.querySelectorAll('.modal a').forEach(link => {
          link.setAttribute('target', '_blank');
        });
      }
    }

    // Play button click handler
    document.getElementById('playButton').addEventListener('click', function() {
      const index = parseInt(this.dataset.index);

      // Show the fixed player if it's hidden
      document.getElementById('fixedPlayer').style.display = 'flex';

      if (currentPlayingIndex === index) {
        // Toggle play/pause for current track
        if (audioPlayer.paused) {
          audioPlayer.play();
          this.textContent = 'Pause';
          this.classList.add('playing');
        } else {
          audioPlayer.pause();
          this.textContent = 'Play';
          this.classList.remove('playing');
        }
      } else {
        // Play new track
        audioPlayer.src = modalData[index].audioUrl;
        audioPlayer.play();
        currentPlayingIndex = index;
        this.textContent = 'Pause';
        this.classList.add('playing');
        nowPlaying.textContent = modalData[index].labelInfo;
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

    // Close the modal when clicking the close button
    document.getElementsByClassName("close")[0].onclick = function() {
      var modal = document.getElementById("audioModal");
      modal.style.display = "none";
      // Remove event listener when using close button
      document.removeEventListener('click', closeModalOutside);
    }

    // Event listener to open modal when clicking on an image
    document.querySelectorAll('.column img').forEach((img) => {
      img.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('onclick').match(/\d+/)[0]);
        openModal(index);
      });
    });
