let mouseTimeout;
let screensaverActive = false;
let idleTime = 5;
let quotesContainer = document.getElementsByClassName("quotes-container")[0];
let activeContainer = document.getElementsByClassName("active-container")[0];
let body = document.getElementsByTagName("body")[0];

function showScreenSaver() {
  quotesContainer.classList.remove("hidden");
  activeContainer.classList.add("hidden");
  screensaverActive = true;
}

function stopScreenSaver() {
  activeContainer.classList.remove("hidden");
  quotesContainer.classList.add("hidden");
  screensaverActive = false;
}

body.addEventListener(
  "mousemove",
  function() {
    clearTimeout(mouseTimeout);

    if (screensaverActive) {
      stopScreenSaver();
    }

    mouseTimeout = setTimeout(function() {
      showScreenSaver();
    }, 1000 * idleTime);
  },
  0
);
