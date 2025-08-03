document.addEventListener('DOMContentLoaded', () => {
  // --- Smooth Scroll Reveal ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal-section').forEach(el => revealObserver.observe(el));

  // --- Staggered Quote Animation ---
  const quotes = [
    { text: "The purest thing a man can give is <span class='highlight' style='--highlight-color: var(--accent-red);'>love,</span>" },
    { text: "the bravest thing a man can do is <span class='highlight' style='--highlight-color: var(--accent-blue);'>forgive,</span>" },
    { text: "the rarest thing a man can show is <span class='highlight' style='--highlight-color: var(--accent-green);'>kindness,</span>" },
    { text: "and the greatest enemy a man can face is <span class='highlight' style='--highlight-color: var(--accent-gold);'>himself.</span>" }
  ];
  const quoteContainer = document.getElementById('quoteContainer');
  quoteContainer.innerHTML = quotes.map((q, i) =>
    `<p class="quote-line" id="line-${i}">${q.text}</p>`
  ).join('');

  const quoteObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const lines = document.querySelectorAll('.quote-line');
      lines.forEach((line, i) => {
        setTimeout(() => {
          line.classList.add('visible');
        }, i * 2000); // Slower delay for a more gentle reveal
      });
      quoteObserver.unobserve(entries[0].target);
    }
  }, { threshold: 0.8 });
  quoteObserver.observe(quoteContainer);

  // --- 3D Holographic Tilt Effect for Video ---
  const videoFrame = document.getElementById('video-frame');
  if (videoFrame) {
      videoFrame.addEventListener('mousemove', (e) => {
          if (videoFrame.matches(':hover')) {
              const rect = videoFrame.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              const rotateX = (y - centerY) / centerY * -4; // Gentler tilt
              const rotateY = (x - centerX) / centerX * 4;

              videoFrame.style.transform = `translateY(-15px) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          }
      });

      videoFrame.addEventListener('mouseleave', () => {
          videoFrame.style.transform = ''; 
      });
  }
});
