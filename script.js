// script.js: handles countdown timer, guest count increment/decrement,
// form submission, music playback and scroll‑triggered animations.  This
// version also exposes functions for resetting animations when the
// language is changed.

// Global observer used for scroll‑triggered animations. Storing this
// reference allows us to disconnect old observers when resetting.
let animationObserver;

/**
 * Initialise scroll‑triggered animations.  Elements with the
 * `.animate-item` class will gain the `.visible` class when they
 * enter the viewport.  Calling this function again will recreate
 * observers and reapply visibility where appropriate.  It assigns
 * the observer to the global `animationObserver` variable.
 */
function initAnimations() {
  const animateItems = document.querySelectorAll('.animate-item');
  // Disconnect any existing observer before creating a new one
  if (animationObserver) {
    animateItems.forEach((item) => {
      try {
        animationObserver.unobserve(item);
      } catch (e) {
        // ignore if not previously observed
      }
    });
  }
  animationObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );
  animateItems.forEach((item) => {
    // If the element is already visible (e.g., above the fold), add visible immediately
    if (item.getBoundingClientRect().top < window.innerHeight) {
      item.classList.add('visible');
    } else {
      animationObserver.observe(item);
    }
  });
}

/**
 * Reset scroll animations by removing the `.visible` class from all
 * `.animate-item` elements and reinitialising observers.  This is
 * useful when the language is changed so that animations can play
 * again for the newly translated content.  Exposed globally so
 * translations.js can call it.
 */
function resetAnimations() {
  const animateItems = document.querySelectorAll('.animate-item');
  animateItems.forEach((item) => {
    item.classList.remove('visible');
  });
  initAnimations();
}

document.addEventListener('DOMContentLoaded', () => {
  /* Countdown timer */
  const weddingDate = new Date('2026-01-24T19:00:00+05:00');
  const daysSpan = document.getElementById('days');
  const hoursSpan = document.getElementById('hours');
  const minutesSpan = document.getElementById('minutes');
  const secondsSpan = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date();
    let diff = weddingDate - now;
    // If the date has passed, set all values to zero
    if (diff < 0) {
      diff = 0;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    daysSpan.textContent = days;
    hoursSpan.textContent = hours.toString().padStart(2, '0');
    minutesSpan.textContent = minutes.toString().padStart(2, '0');
    secondsSpan.textContent = seconds.toString().padStart(2, '0');
  }
  updateCountdown();
  // update every second
  setInterval(updateCountdown, 1000);

  /* Guest count increment/decrement */
  const minusBtn = document.getElementById('minus');
  const plusBtn = document.getElementById('plus');
  const guestCountInput = document.getElementById('guestCount');
  if (minusBtn && guestCountInput) {
    minusBtn.addEventListener('click', () => {
      let value = parseInt(guestCountInput.value, 10) || 0;
      if (value > 0) {
        value -= 1;
        guestCountInput.value = value;
      }
    });
  }
  if (plusBtn && guestCountInput) {
    plusBtn.addEventListener('click', () => {
      let value = parseInt(guestCountInput.value, 10) || 0;
      value += 1;
      guestCountInput.value = value;
    });
  }

  /* Auto-set guest count based on attendance selection */
  const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
  attendanceRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      // When a radio option is selected, set the guest count to the value specified in data-count
      const count = radio.dataset.count;
      if (count !== undefined) {
        guestCountInput.value = count;
      }
    });
  });

  /* Form submission */
  const form = document.getElementById('rsvpForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Gather form data
      const data = {
        name: form.name.value.trim(),
        attendance: form.attendance.value,
        guestCount: form.guestCount.value,
        message: form.message.value.trim(),
      };
      // Replace with your Google Apps Script web app URL
      const scriptURL =
        'https://script.google.com/macros/s/AKfycbx1DH2nx1bWkCmudodIRvbELB7lfeC1Jpm5UVN0eBgqjKEVXCLKxyKsQZsJOGrOZn7F/exec';
      // Send the data to Google Apps Script endpoint
      fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'no-cors', // prevent CORS errors; responses will not be available
      })
        .then(() => {
          alert('Рахмет! Жауабыңыз қабылданды.');
          // Reset the form values
          form.reset();
          guestCountInput.value = 0;
        })
        .catch((error) => {
          console.error('Form submission error:', error);
          alert('Кешіріңіз, жіберу мүмкін болмады. Кейінірек қайталап көріңіз.');
        });
    });
  }

  /* Music toggle and autoplay */
  const audio = document.getElementById('backgroundMusic');
  const musicButton = document.getElementById('musicToggle');
  let musicPlaying = false;
  if (audio) {
    // Attempt to autoplay on load. Browsers may block this until a user
    // gesture is received; in that case the catch handler will be silent.
    audio.play().then(() => {
      musicPlaying = true;
      if (musicButton) {
        musicButton.textContent = '❚❚';
        musicButton.setAttribute('aria-label', 'Pause music');
      }
    }).catch(() => {
      // Autoplay failed (often due to browser policies). Keep the button in play state.
    });
  }
  if (musicButton && audio) {
    musicButton.addEventListener('click', () => {
      // Toggle play/pause on the audio
      if (!musicPlaying) {
        audio.play().catch((err) => console.warn('Audio play error', err));
        musicButton.textContent = '❚❚';
        musicButton.setAttribute('aria-label', 'Pause music');
        musicPlaying = true;
      } else {
        audio.pause();
        musicButton.textContent = '▶';
        musicButton.setAttribute('aria-label', 'Play music');
        musicPlaying = false;
      }
    });
  }

  // Initialise animations on first load
  initAnimations();
});