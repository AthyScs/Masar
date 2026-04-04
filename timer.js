(function() {
  const fab = document.getElementById('timerFabBtn');
  const popup = document.getElementById('timerPopup');
  const closeBtn = document.getElementById('closePopupBtn');
  const tabs = document.querySelectorAll('.ms-tab');
  const timerPanel = document.getElementById('timerPanel');
  const stopwatchPanel = document.getElementById('stopwatchPanel');

  const timerDisplay = document.getElementById('timerDisplay');
  const minValSpan = document.getElementById('minVal');
  const secValSpan = document.getElementById('secVal');
  const minInc = document.getElementById('minInc');
  const minDec = document.getElementById('minDec');
  const secInc = document.getElementById('secInc');
  const secDec = document.getElementById('secDec');
  const timerStartBtn = document.getElementById('timerStartBtn');
  const timerResetBtn = document.getElementById('timerResetBtn');
  const timerRing = document.getElementById('timerRing');
  const quoteBox = document.getElementById('quoteBox');

  const swDisplay = document.getElementById('swDisplay');
  const swStartBtn = document.getElementById('swStartBtn');
  const swLapBtn = document.getElementById('swLapBtn');
  const swResetBtn = document.getElementById('swResetBtn');
  const swRing = document.getElementById('swRing');
  const lapsList = document.getElementById('lapsList');

  const toast = document.getElementById('msToast');
  const toastCloseBtn = document.getElementById('toastCloseBtn');

  let timerMinutes = 25, timerSeconds = 0, totalTicks = 0, remainingTicks = 0, timerRunning = false, timerInterval = null;
  const CIRCUM = 2 * Math.PI * 55; // 345.575
  let swCentiseconds = 0, swRunning = false, swInterval = null, laps = [], lastLapTotal = 0;

  function showNotification(msg) {
    const toastMsg = toast.querySelector('.ms-toast-msg');
    toastMsg.textContent = msg || '✨ انتهت الجلسة! أحسنت ✨';
    toast.style.display = 'flex';
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { if (!toast.classList.contains('show')) toast.style.display = 'none'; }, 300);
    }, 3800);
  }
  if (toastCloseBtn) toastCloseBtn.addEventListener('click', () => {
    toast.classList.remove('show');
    setTimeout(() => toast.style.display = 'none', 200);
  });

  // Timer functions - ring STARTS EMPTY and FILLS as time decreases
  function updateTimerDisplay() {
    let mins = Math.floor(remainingTicks / 600);
    let secs = Math.floor((remainingTicks % 600) / 10);
    timerDisplay.textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    
    // KEY FIX: As time decreases (remainingTicks goes down), 
    // the ring should fill up (offset should go from CIRCUM to 0)
    // offset = CIRCUM * (remainingTicks / totalTicks) ???
    // Actually: when remaining = total (start) -> offset = CIRCUM (empty)
    // When remaining = 0 (end) -> offset = 0 (full)
    let offset = CIRCUM * (remainingTicks / totalTicks);
    timerRing.style.strokeDashoffset = offset;
  }
  
  function refreshTimerFromInputs() {
    if (timerRunning) return;
    timerMinutes = parseInt(minValSpan.textContent) || 0;
    timerSeconds = parseInt(secValSpan.textContent) || 0;
    if (timerMinutes === 0 && timerSeconds === 0) { timerMinutes = 1; minValSpan.textContent = '1'; }
    totalTicks = (timerMinutes * 60 + timerSeconds) * 10;
    remainingTicks = totalTicks;
    // Start with EMPTY ring (offset = CIRCUM)
    timerRing.style.strokeDashoffset = CIRCUM;
    updateTimerDisplay();
  }
  
  function completeTimerSession() {
    if (timerRunning) { clearInterval(timerInterval); timerRunning = false; }
    showNotification('🎯 وقت التركيز انتهى! أنجزت جلسة رائعة 🎯');
    timerStartBtn.innerHTML = '▶ ابدأ';
    const quotes = ['🌸 {رَبِّ زِدْنِي عِلْمًا} 🌸', '⭐ رائع! أنت تبني عادات النجاح ⭐', '💪 تركيزك يزداد قوة كل يوم 💪', '🎯 جلسة جديدة في رصيدك 🎯', '🌟 استمر هكذا ، النجاح قريب 🌟'];
    quoteBox.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    remainingTicks = totalTicks;
    timerRing.style.strokeDashoffset = CIRCUM;
    updateTimerDisplay();
    try { const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); const o = audioCtx.createOscillator(); const g = audioCtx.createGain(); o.connect(g); g.connect(audioCtx.destination); o.frequency.value = 880; g.gain.value = 0.15; o.start(); g.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.4); o.stop(audioCtx.currentTime + 0.4); } catch(e) {}
  }
  
  function timerTick() { 
    if (remainingTicks <= 0) { 
      completeTimerSession(); 
      return; 
    } 
    remainingTicks--; 
    updateTimerDisplay(); 
    if (remainingTicks <= 0) completeTimerSession(); 
  }
  
  function startTimer() { 
    if (timerRunning) return; 
    if (remainingTicks <= 0) refreshTimerFromInputs(); 
    timerRunning = true; 
    timerStartBtn.innerHTML = '⏸ إيقاف'; 
    if (timerInterval) clearInterval(timerInterval); 
    timerInterval = setInterval(timerTick, 100); 
  }
  
  function stopTimer() { 
    if (timerInterval) clearInterval(timerInterval); 
    timerRunning = false; 
    timerStartBtn.innerHTML = '▶ ابدأ'; 
  }
  
  function resetTimer() { 
    if (timerRunning) stopTimer(); 
    timerMinutes = parseInt(minValSpan.textContent); 
    timerSeconds = parseInt(secValSpan.textContent); 
    if (timerMinutes === 0 && timerSeconds === 0) { timerMinutes = 1; minValSpan.textContent = '1'; } 
    totalTicks = (timerMinutes * 60 + timerSeconds) * 10; 
    remainingTicks = totalTicks; 
    timerRing.style.strokeDashoffset = CIRCUM;
    updateTimerDisplay(); 
    timerStartBtn.innerHTML = '▶ ابدأ'; 
    quoteBox.innerHTML = '🌸 {رَبِّ زِدْنِى عِلْمًا} 🌸'; 
  }
  
  document.getElementById('timerRingClick')?.addEventListener('click', () => { 
    if (timerRunning) stopTimer(); 
    else if (remainingTicks > 0 && remainingTicks < totalTicks) startTimer(); 
    else if (remainingTicks === totalTicks && remainingTicks > 0) startTimer(); 
  });

  // Stopwatch functions - ring fills as time increases
  function formatSW(c) { 
    let ts = Math.floor(c / 10), t = c % 10, m = Math.floor(ts / 60), s = ts % 60; 
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${t}`; 
  }
  
  function updateSWRing() { 
    let progress = (swCentiseconds % 600) / 600;
    let offset = CIRCUM * (1 - progress);
    swRing.style.strokeDashoffset = offset;
  }
  
  function updateSWDisplay() { 
    swDisplay.textContent = formatSW(swCentiseconds); 
    updateSWRing(); 
  }
  
  function renderLaps() { 
    lapsList.innerHTML = ''; 
    if (laps.length === 0) { 
      const e = document.createElement('div'); 
      e.className = 'ms-empty-laps'; 
      e.innerText = '✨ لا توجد لفّات بعد'; 
      lapsList.appendChild(e); 
      return; 
    } 
    for (let i = laps.length-1; i >=0; i--) { 
      const l = laps[i]; 
      const d = document.createElement('div'); 
      d.className = 'ms-lap-item'; 
      d.innerHTML = `<span class="ms-lap-num">📌 لفة ${i+1}</span><span class="ms-lap-time">${formatSW(l.diff)}</span><span class="ms-lap-total">${formatSW(l.total)}</span>`; 
      lapsList.appendChild(d); 
    } 
  }
  
  function addLap() { 
    if (!swRunning && swCentiseconds === 0) return; 
    let cur = swCentiseconds; 
    laps.push({ diff: cur - lastLapTotal, total: cur }); 
    lastLapTotal = cur; 
    renderLaps(); 
  }
  
  function resetStopwatch() { 
    if (swRunning) { clearInterval(swInterval); swRunning = false; } 
    swCentiseconds = 0; 
    lastLapTotal = 0; 
    laps = []; 
    updateSWDisplay(); 
    swStartBtn.innerHTML = '▶ ابدأ'; 
    renderLaps(); 
    swRing.style.strokeDashoffset = CIRCUM;
  }
  
  function swTick() { 
    swCentiseconds++; 
    updateSWDisplay(); 
  }
  
  function startStopwatch() { 
    if (swRunning) return; 
    swRunning = true; 
    swStartBtn.innerHTML = '⏸ إيقاف'; 
    if (swInterval) clearInterval(swInterval); 
    swInterval = setInterval(swTick, 100); 
  }
  
  function stopStopwatch() { 
    if (swInterval) clearInterval(swInterval); 
    swRunning = false; 
    swStartBtn.innerHTML = '▶ ابدأ'; 
  }

  // Event listeners
  fab.onclick = () => popup.classList.toggle('open');
  closeBtn.onclick = () => popup.classList.remove('open');
  
  tabs.forEach(t => t.addEventListener('click', () => { 
    let target = t.getAttribute('data-tab'); 
    tabs.forEach(tt => tt.classList.remove('active')); 
    t.classList.add('active'); 
    if (target === 'timer') { 
      timerPanel.classList.add('active'); 
      stopwatchPanel.classList.remove('active'); 
    } else { 
      stopwatchPanel.classList.add('active'); 
      timerPanel.classList.remove('active'); 
    } 
  }));
  
  minInc.onclick = () => { if (!timerRunning) { let v = parseInt(minValSpan.textContent) + 1; if (v > 99) v = 99; minValSpan.textContent = v; refreshTimerFromInputs(); } };
  minDec.onclick = () => { if (!timerRunning) { let v = parseInt(minValSpan.textContent) - 1; if (v < 0) v = 0; minValSpan.textContent = v; refreshTimerFromInputs(); } };
  secInc.onclick = () => { if (!timerRunning) { let v = parseInt(secValSpan.textContent) + 5; if (v >= 60) v = 55; secValSpan.textContent = String(v).padStart(2,'0'); refreshTimerFromInputs(); } };
  secDec.onclick = () => { if (!timerRunning) { let v = parseInt(secValSpan.textContent) - 5; if (v < 0) v = 0; secValSpan.textContent = String(v).padStart(2,'0'); refreshTimerFromInputs(); } };
  
  timerStartBtn.onclick = () => { timerRunning ? stopTimer() : startTimer(); };
  timerResetBtn.onclick = resetTimer;
  swStartBtn.onclick = () => { swRunning ? stopStopwatch() : startStopwatch(); };
  swLapBtn.onclick = addLap;
  swResetBtn.onclick = resetStopwatch;
  
  // Initial setup - set ring to EMPTY
  timerRing.style.strokeDasharray = CIRCUM;
  swRing.style.strokeDasharray = CIRCUM;
  refreshTimerFromInputs();
  timerRing.style.strokeDashoffset = CIRCUM;
  swRing.style.strokeDashoffset = CIRCUM;
  updateSWDisplay();
  renderLaps();
})();

// Close timer popup when chatbot opens
const chatbotBtn = document.getElementById('chatbot-toggle');

if (chatbotBtn) {
    chatbotBtn.addEventListener('click', function() {
        const anyPopup = document.querySelector('.ms-popup');
        if (anyPopup) {
            anyPopup.classList.remove('open');
        }
    });
}