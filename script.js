const envelope = document.getElementById('envelope');
const card = document.getElementById('card');
const heartsLayer = document.getElementById('hearts');
const bgm = document.getElementById('bgm');

function toggleOpen() {
  envelope.classList.toggle('open');
  const isOpen = envelope.classList.contains('open');
  envelope.setAttribute('aria-expanded', String(isOpen));
  card.hidden = !isOpen;

  if (isOpen) {
    // Start hearts & optional music
    burstHearts(24);
    try { bgm && bgm.play().catch(() => {}); } catch {}
  } else {
    try { bgm && bgm.pause(); } catch {}
  }
}

function burstHearts(count = 16) {
  Array.from({ length: count }).forEach(() => {
    const h = document.createElement('span');
    h.className = 'heart';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.bottom = '-10vh';
    h.style.animationDelay = (Math.random() * .6) + 's';
    h.style.scale = (0.8 + Math.random() * 0.7).toFixed(2);
    heartsLayer.appendChild(h);
    h.addEventListener('animationend', () => h.remove(), { once: true });
  });
}

envelope.addEventListener('click', toggleOpen);
