 const darkToggleBtn = document.getElementById("darkModeToggle");
    const body = document.body;
    const sidebar = document.querySelector(".sidebar");
    const backdrop = document.getElementById("sidebarBackdrop");
    const sidebarToggleBtn = document.getElementById("sidebarToggle");

    // Dark Mode
    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      darkToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }

    darkToggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const enabled = body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
      darkToggleBtn.innerHTML = enabled
        ? '<i class="bi bi-sun-fill"></i>'
        : '<i class="bi bi-moon-fill"></i>';
    });

    // Sidebar toggle
    sidebarToggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show");
      backdrop.classList.toggle("show");
    });

    // Hide sidebar on backdrop click
    backdrop.addEventListener("click", () => {
      sidebar.classList.remove("show");
      backdrop.classList.remove("show");
    });



      const startBtn = document.getElementById("startQuizBtn");
  const quizForm = document.getElementById("quizForm");
  const timerDisplay = document.getElementById("timerDisplay");
  const timerEl = document.getElementById("timer");

  let timerInterval;
  let timeLeft = 60 * 60; // 10 minutes

  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("⏰ Time is up! Submitting your quiz.");
      quizForm.submit();
    }
    timeLeft--;
  }

  startBtn.addEventListener("click", function () {
    // Hide the start button
    startBtn.style.display = "none";

    // Show timer and form
    timerDisplay.style.display = "block";
    quizForm.style.display = "block";

    // Start the timer
    updateTimer(); // Immediately show first time
    timerInterval = setInterval(updateTimer, 1000);
  });