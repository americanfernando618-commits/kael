/* === OCEANO VIVO: BALLENAS, MANTARRAYAS, TORTUGAS, CARDUMENES === */

class Whale {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = canvas.height * 0.3 + Math.random() * canvas.height * 0.5;
    this.size = 80 + Math.random() * 60;
    this.speed = 0.3 + Math.random() * 0.3;
    this.direction = Math.random() > 0.5 ? 1 : -1;
    this.tailPhase = Math.random() * Math.PI * 2;
    this.breathPhase = Math.random() * Math.PI * 2;
    this.time = Math.random() * 1000;
    this.depth = Math.random();
    this.alpha = 0.6 - this.depth * 0.3;
  }
  update(dt) {
    this.time += dt * 0.001;
    this.x += this.speed * this.direction;
    this.y += Math.sin(this.time * 0.3) * 0.3;
    this.tailPhase += dt * 0.003;
    this.breathPhase += dt * 0.002;
    if (this.x > this.canvas.width + this.size * 2) this.x = -this.size * 2;
    if (this.x < -this.size * 2) this.x = this.canvas.width + this.size * 2;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.direction, 1);
    const scale = 0.6 + (1 - this.depth) * 0.4;
    ctx.scale(scale, scale);
    const tailWag = Math.sin(this.tailPhase) * 0.15;
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = 'rgba(10,30,61,0.3)';
    ctx.beginPath();
    ctx.ellipse(0, this.size * 0.3, this.size * 1.2, this.size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    const bodyGrad = ctx.createLinearGradient(0, -this.size * 0.4, 0, this.size * 0.4);
    bodyGrad.addColorStop(0, '#2E5C8A');
    bodyGrad.addColorStop(0.5, '#4A7CA5');
    bodyGrad.addColorStop(1, '#1A3A5C');
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.moveTo(this.size * 1.2, 0);
    ctx.bezierCurveTo(this.size * 1.2, -this.size * 0.3, this.size * 0.5, -this.size * 0.4, 0, -this.size * 0.35);
    ctx.bezierCurveTo(-this.size * 0.5, -this.size * 0.3, -this.size * 0.9, -this.size * 0.2, -this.size * 1.1, 0);
    ctx.bezierCurveTo(-this.size * 0.9, this.size * 0.2, -this.size * 0.5, this.size * 0.3, 0, this.size * 0.35);
    ctx.bezierCurveTo(this.size * 0.5, this.size * 0.4, this.size * 1.2, this.size * 0.3, this.size * 1.2, 0);
    ctx.fill();
    ctx.fillStyle = '#3A6A8A';
    ctx.save();
    ctx.translate(this.size * 0.2, this.size * 0.2);
    ctx.rotate(0.3 + Math.sin(this.time * 0.5) * 0.1);
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 0.3, this.size * 0.08, 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.translate(-this.size * 1.1, 0);
    ctx.rotate(tailWag);
    ctx.fillStyle = '#2E5C8A';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-this.size * 0.3, -this.size * 0.3, -this.size * 0.5, -this.size * 0.4, -this.size * 0.6, -this.size * 0.25);
    ctx.bezierCurveTo(-this.size * 0.4, -this.size * 0.1, -this.size * 0.2, 0, 0, 0);
    ctx.bezierCurveTo(-this.size * 0.2, 0, -this.size * 0.4, this.size * 0.1, -this.size * 0.6, this.size * 0.25);
    ctx.bezierCurveTo(-this.size * 0.5, this.size * 0.4, -this.size * 0.3, this.size * 0.3, 0, 0);
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#0A1E3D';
    ctx.beginPath();
    ctx.arc(this.size * 0.9, -this.size * 0.1, this.size * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(168,213,255,0.2)';
    ctx.beginPath();
    ctx.ellipse(this.size * 0.3, -this.size * 0.2, this.size * 0.5, this.size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class MantaRay {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = canvas.height * 0.2 + Math.random() * canvas.height * 0.6;
    this.size = 60 + Math.random() * 40;
    this.speed = 0.4 + Math.random() * 0.3;
    this.direction = Math.random() > 0.5 ? 1 : -1;
    this.wingPhase = Math.random() * Math.PI * 2;
    this.time = Math.random() * 1000;
    this.depth = Math.random() * 0.7;
    this.alpha = 0.7 - this.depth * 0.3;
  }
  update(dt) {
    this.time += dt * 0.001;
    this.x += this.speed * this.direction;
    this.y += Math.sin(this.time * 0.4) * 0.4;
    this.wingPhase += dt * 0.004;
    if (this.x > this.canvas.width + this.size * 2) this.x = -this.size * 2;
    if (this.x < -this.size * 2) this.x = this.canvas.width + this.size * 2;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.direction, 1);
    const scale = 0.5 + (1 - this.depth) * 0.5;
    ctx.scale(scale, scale);
    const wingFlap = Math.sin(this.wingPhase) * 0.2;
    ctx.globalAlpha = this.alpha;
    const wingGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    wingGrad.addColorStop(0, '#4A7CA5');
    wingGrad.addColorStop(0.7, '#2E5C8A');
    wingGrad.addColorStop(1, '#1A3A5C');
    ctx.fillStyle = wingGrad;
    ctx.beginPath();
    ctx.moveTo(this.size * 0.3, 0);
    ctx.bezierCurveTo(this.size * 0.5, -this.size * (0.3 + wingFlap), this.size * 1.2, -this.size * (0.5 + wingFlap), this.size * 1.5, -this.size * (0.2 + wingFlap * 0.5));
    ctx.bezierCurveTo(this.size * 1.3, 0, this.size * 1.2, this.size * 0.1, this.size * 0.3, this.size * 0.1);
    ctx.bezierCurveTo(this.size * 1.2, this.size * 0.1, this.size * 1.3, 0, this.size * 1.5, this.size * (0.2 + wingFlap * 0.5));
    ctx.bezierCurveTo(this.size * 1.2, this.size * (0.5 + wingFlap), this.size * 0.5, this.size * (0.3 + wingFlap), this.size * 0.3, 0);
    ctx.fill();
    ctx.fillStyle = '#3A6A8A';
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 0.4, this.size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2E5C8A';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-this.size * 0.3, 0);
    ctx.quadraticCurveTo(-this.size * 0.8, Math.sin(this.time * 2) * 5, -this.size * 1.2, Math.sin(this.time * 2 + 1) * 8);
    ctx.stroke();
    ctx.fillStyle = '#0A1E3D';
    ctx.beginPath();
    ctx.arc(this.size * 0.15, -this.size * 0.05, this.size * 0.03, 0, Math.PI * 2);
    ctx.arc(this.size * 0.15, this.size * 0.05, this.size * 0.03, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(168,213,255,0.3)';
    ctx.beginPath();
    ctx.ellipse(0, -this.size * 0.05, this.size * 0.25, this.size * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class SeaTurtle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = canvas.height * 0.4 + Math.random() * canvas.height * 0.5;
    this.size = 40 + Math.random() * 25;
    this.speed = 0.2 + Math.random() * 0.2;
    this.direction = Math.random() > 0.5 ? 1 : -1;
    this.flipperPhase = Math.random() * Math.PI * 2;
    this.time = Math.random() * 1000;
    this.depth = Math.random() * 0.8;
    this.alpha = 0.65 - this.depth * 0.25;
  }
  update(dt) {
    this.time += dt * 0.001;
    this.x += this.speed * this.direction;
    this.y += Math.sin(this.time * 0.5) * 0.3;
    this.flipperPhase += dt * 0.005;
    if (this.x > this.canvas.width + this.size * 2) this.x = -this.size * 2;
    if (this.x < -this.size * 2) this.x = this.canvas.width + this.size * 2;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.direction, 1);
    const scale = 0.5 + (1 - this.depth) * 0.5;
    ctx.scale(scale, scale);
    const flipperMove = Math.sin(this.flipperPhase) * 0.3;
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = '#3A6A5A';
    ctx.save();
    ctx.translate(-this.size * 0.5, this.size * 0.2);
    ctx.rotate(-0.5 + flipperMove * 0.3);
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 0.25, this.size * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.translate(-this.size * 0.5, -this.size * 0.2);
    ctx.rotate(0.5 - flipperMove * 0.3);
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 0.25, this.size * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    const shellGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 0.6);
    shellGrad.addColorStop(0, '#5A8A6A');
    shellGrad.addColorStop(0.7, '#3A6A5A');
    shellGrad.addColorStop(1, '#2A4A3A');
    ctx.fillStyle = shellGrad;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 0.6, this.size * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2A4A3A';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-this.size * 0.4, 0);
    ctx.lineTo(this.size * 0.4, 0);
    ctx.moveTo(0, -this.size * 0.35);
    ctx.lineTo(0, this.size * 0.35);
    ctx.stroke();
    ctx.fillStyle = '#4A7A6A';
    ctx.save();
    ctx.translate(this.size * 0.3, this.size * 0.25);
    ctx.rotate(0.4 + flipperMove);
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 0.35, this.size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.translate(this.size * 0.3, -this.size * 0.25);
    ctx.rotate(-0.4 - flipperMove);
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 0.35, this.size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#4A7A6A';
    ctx.beginPath();
    ctx.ellipse(this.size * 0.65, 0, this.size * 0.2, this.size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0A1E3D';
    ctx.beginPath();
    ctx.arc(this.size * 0.72, -this.size * 0.05, this.size * 0.03, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class Fish {
  constructor(canvas, school) {
    this.canvas = canvas;
    this.school = school;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.size = 4 + Math.random() * 3;
    this.hue = 190 + Math.random() * 40;
  }
  update() {
    let sepX = 0, sepY = 0, aliX = 0, aliY = 0, cohX = 0, cohY = 0, neighbors = 0;
    this.school.forEach(other => {
      if (other === this) return;
      const dx = other.x - this.x;
      const dy = other.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 30) { sepX -= dx / dist; sepY -= dy / dist; }
      if (dist < 80) { aliX += other.vx; aliY += other.vy; cohX += other.x; cohY += other.y; neighbors++; }
    });
    if (neighbors > 0) { aliX /= neighbors; aliY /= neighbors; cohX = cohX / neighbors - this.x; cohY = cohY / neighbors - this.y; }
    this.vx += sepX * 0.05 + (aliX - this.vx) * 0.03 + cohX * 0.001;
    this.vy += sepY * 0.05 + (aliY - this.vy) * 0.03 + cohY * 0.001;
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > 2) { this.vx = (this.vx / speed) * 2; this.vy = (this.vy / speed) * 2; }
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < -20) this.x = this.canvas.width + 20;
    if (this.x > this.canvas.width + 20) this.x = -20;
    if (this.y < -20) this.y = this.canvas.height + 20;
    if (this.y > this.canvas.height + 20) this.y = -20;
  }
  draw(ctx) {
    const angle = Math.atan2(this.vy, this.vx);
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(angle);
    ctx.fillStyle = `hsla(${this.hue}, 70%, 70%, 0.7)`;
    ctx.beginPath();
    ctx.moveTo(this.size, 0);
    ctx.lineTo(-this.size * 0.7, -this.size * 0.4);
    ctx.lineTo(-this.size * 0.5, 0);
    ctx.lineTo(-this.size * 0.7, this.size * 0.4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

class Bubble {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = 2 + Math.random() * 6;
    this.speed = 0.5 + Math.random() * 1;
    this.wobble = Math.random() * Math.PI * 2;
    this.alpha = 0.3 + Math.random() * 0.3;
  }
  update(dt) {
    this.y -= this.speed;
    this.wobble += dt * 0.003;
    this.x += Math.sin(this.wobble) * 0.3;
    if (this.y < -20) { this.y = this.canvas.height + 20; this.x = Math.random() * this.canvas.width; }
  }
  draw(ctx) {
    ctx.strokeStyle = `rgba(168,213,255,${this.alpha})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = `rgba(255,255,255,${this.alpha * 0.3})`;
    ctx.beginPath();
    ctx.arc(this.x - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.3, 0, Math.PI * 2);
    ctx.fill();
  }
}

let canvas, ctx, whales = [], mantas = [], turtles = [], fishes = [], bubbles = [];
let lastTime = 0;
let animationId;

function initOcean() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  if (canvas) { canvas.remove(); if (animationId) cancelAnimationFrame(animationId); }
  canvas = document.createElement('canvas');
  canvas.id = 'ocean-canvas';
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;';
  hero.insertBefore(canvas, hero.firstChild);
  ctx = canvas.getContext('2d');
  resize();
  animate(0);
}

function resize() {
  if (!canvas || !ctx) return;
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  whales = []; for (let i = 0; i < 3; i++) whales.push(new Whale(canvas));
  mantas = []; for (let i = 0; i < 4; i++) mantas.push(new MantaRay(canvas));
  turtles = []; for (let i = 0; i < 3; i++) turtles.push(new SeaTurtle(canvas));
  fishes = []; const schoolSize = 40; for (let i = 0; i < schoolSize; i++) fishes.push(new Fish(canvas, fishes));
  bubbles = []; for (let i = 0; i < 30; i++) bubbles.push(new Bubble(canvas));
}

function animate(currentTime) {
  if (!ctx || !canvas) return;
  const dt = currentTime - lastTime;
  lastTime = currentTime;
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#030810');
  gradient.addColorStop(0.3, '#0A1E3D');
  gradient.addColorStop(0.7, '#1A3A5C');
  gradient.addColorStop(1, '#2E5C8A');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.globalAlpha = 0.08;
  for (let i = 0; i < 6; i++) {
    const x = (canvas.width / 6) * i + Math.sin(currentTime * 0.0003 + i) * 80;
    const grad = ctx.createLinearGradient(x, 0, x + 150, canvas.height);
    grad.addColorStop(0, 'rgba(74,158,255,0.4)');
    grad.addColorStop(1, 'rgba(74,158,255,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 150, canvas.height);
    ctx.lineTo(x + 200, canvas.height);
    ctx.lineTo(x + 50, 0);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
  const allCreatures = [
    ...whales.map(w => ({obj:w,depth:w.depth})),
    ...mantas.map(m => ({obj:m,depth:m.depth})),
    ...turtles.map(t => ({obj:t,depth:t.depth}))
  ].sort((a,b) => b.depth - a.depth);
  allCreatures.forEach(c => { c.obj.update(dt); c.obj.draw(ctx); });
  fishes.forEach(f => { f.update(); f.draw(ctx); });
  bubbles.forEach(b => { b.update(dt); b.draw(ctx); });
  animationId = requestAnimationFrame(animate);
}

let resizeTimeout;
window.addEventListener('resize', () => { clearTimeout(resizeTimeout); resizeTimeout = setTimeout(resize, 250); });

initOcean();

/* === PECES INTERACTIVOS: HUYEN DEL CURSOR === */
let mouseX = -1000, mouseY = -1000;
if (typeof canvas !== 'undefined' && canvas) {
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => { mouseX = -1000; mouseY = -1000; });
}

if (typeof Fish !== 'undefined') {
  const originalFishUpdate = Fish.prototype.update;
  Fish.prototype.update = function() {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const fleeRadius = 150;
    if (dist < fleeRadius && dist > 0) {
      const force = (fleeRadius - dist) / fleeRadius;
      this.vx += (dx / dist) * force * 2.5;
      this.vy += (dy / dist) * force * 2.5;
    }
    originalFishUpdate.call(this);
  };
}

/* === OPTIMIZACIÓN: PAUSAR CUANDO NO SE VE === */
if (typeof animationId !== 'undefined') {
  let isHeroVisible = true;
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      isHeroVisible = entries[0].isIntersecting;
      if (isHeroVisible && !animationId) { lastTime = performance.now(); animate(lastTime); }
      if (!isHeroVisible && animationId) { cancelAnimationFrame(animationId); animationId = null; }
    }, { threshold: 0.1 });
    heroObserver.observe(heroSection);
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && animationId) { cancelAnimationFrame(animationId); animationId = null; }
    else if (!document.hidden && isHeroVisible && !animationId) { lastTime = performance.now(); animate(lastTime); }
  });
}

/* === REVEAL AL SCROLL === */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* === MENU MOVIL === */
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
if (toggle) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

/* === CONTADORES === */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target) || 0;
    if (target === 0) { el.textContent = '0'; return; }
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current.toLocaleString('es');
    }, 30);
  });
}
const statsSection = document.getElementById('impacto');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); statsObserver.disconnect(); }
  }, { threshold: 0.3 });
  statsObserver.observe(statsSection);
}

/* === BLOG POSTS === */
const posts = [
  { date: '13 Sep 2026', title: 'Carta a la Sociedad', excerpt: 'Toda obra buena tiene su origen en Dios. Un mensaje de fe, esperanza y servicio.', url: 'blog/entrada-2.html' },
  { date: '13 Sep 2026', title: 'Nace Kaelvryst: una empresa con brujula', excerpt: 'Presentamos nuestra mision inspirada en Magnifica Humanitas y las seis causas.', url: 'blog/entrada-1.html' },
  { date: 'Proximamente', title: 'Primer convenio de rescate animal', excerpt: 'Documentaremos aqui la primera alianza con un refugio local.', url: '#' },
  { date: 'Proximamente', title: 'Reforestacion: especies y territorios', excerpt: 'Un informe tecnico sobre las especies nativas que priorizaremos.', url: '#' }
];
const grid = document.getElementById('blog-grid');
if (grid) {
  grid.innerHTML = posts.map(p =>
    '<a href="' + p.url + '" class="blog-card reveal visible"><div class="date">' + p.date + '</div><h3>' + p.title + '</h3><p>' + p.excerpt + '</p></a>'
  ).join('');
}

/* === CURSOR BIOLUMINISCENTE === */
if (window.innerWidth > 768) {
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  const cursorOutline = document.createElement('div');
  cursorOutline.className = 'cursor-outline';
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorOutline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 500, fill: "forwards" });
  });
  const hoverElements = document.querySelectorAll('a, button, .causa-card, .blog-card, .stat, .paywall-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
  });
}

/* === BARRA DE PROGRESO === */
const progressBar = document.getElementById('scroll-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}
