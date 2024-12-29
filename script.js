function playAudio(id) {
    const audio = document.getElementById(id);
    audio.currentTime = 0; // Reset audio to the start
    audio.play();
  }