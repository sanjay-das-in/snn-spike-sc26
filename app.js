'use strict';
(() => {
  const canvas = document.getElementById('neuron-canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const slider = document.getElementById('current');
  const output = document.getElementById('current-value');
  const pause = document.getElementById('pause');
  const counter = document.getElementById('spike-count');
  const summary = document.getElementById('simulation-summary');
  let state = 0, spikes = 0, samples = [], running = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  function setLabel() { pause.textContent = running ? 'Pause simulation' : 'Run simulation'; pause.setAttribute('aria-pressed', String(!running)); }
  function draw() {
    const w = canvas.width, h = canvas.height, left = 38, top = 25, bottom = h - 35;
    const y = value => bottom - value * (bottom - top) / 1.3;
    ctx.clearRect(0,0,w,h);
    ctx.font = '12px Georgia'; ctx.fillStyle = '#c5dfed';
    for (const value of [0,0.5,1]) {
      ctx.strokeStyle = value === 1 ? '#65bce8' : '#21516c';
      ctx.setLineDash(value === 1 ? [5,6] : []);
      ctx.beginPath(); ctx.moveTo(left,y(value)); ctx.lineTo(w,y(value)); ctx.stroke();
      ctx.fillText(value.toFixed(1),0,y(value)+4);
    }
    ctx.setLineDash([]); ctx.strokeStyle = '#9fda75'; ctx.lineWidth = 2; ctx.beginPath();
    samples.forEach((sample,i) => { const x = left + i * (w-left)/100; if(i===0) ctx.moveTo(x,y(sample.value)); else ctx.lineTo(x,y(sample.value)); });
    ctx.stroke();
    samples.forEach((sample,i) => { if(!sample.spike) return; const x = left+i*(w-left)/100; ctx.fillStyle='#6bc6f0'; ctx.beginPath();ctx.arc(x,y(sample.value),4,0,Math.PI*2);ctx.fill(); });
    ctx.fillStyle = '#c5dfed'; ctx.fillText('discrete simulation steps →',left,h-8);
  }
  slider.addEventListener('input', () => { const value=(Number(slider.value)/100).toFixed(2); output.value=value; summary.textContent=`Input strength ${value}. The neuron accumulates input and resets after firing.`; });
  pause.addEventListener('click',() => { running=!running;setLabel(); });
  document.getElementById('reset').addEventListener('click',() => {state=0;spikes=0;samples=[];counter.textContent='0 spikes';draw();});
  setInterval(() => {
    if(!running || document.hidden) return;
    state = state*0.92 + Number(slider.value)/100;
    const spike = state > 1;
    samples.push({value:state,spike}); if(samples.length>100)samples.shift();
    if(spike) { state=0;spikes++; }
    if(spike) counter.textContent=`${spikes} ${spikes === 1 ? 'spike' : 'spikes'}`;
    draw();
  },160);
  setLabel();draw();
})();


// Keep the decorative animation optional, and pause media outside the viewport.
(() => {
  const flow = document.getElementById('attention-flow');
  const toggle = document.getElementById('flow-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = reduced.matches;
  function flowLabel() {
    toggle.textContent = flow.paused ? 'Play animation ▶' : 'Pause animation Ⅱ';
    toggle.setAttribute('aria-pressed', String(!flow.paused));
  }
  toggle.addEventListener('click', () => {
    userPaused = !flow.paused;
    if (flow.paused) flow.play().catch(flowLabel); else flow.pause();
  });
  flow.addEventListener('play', flowLabel);
  flow.addEventListener('pause', flowLabel);
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const video = entry.target;
      if (!entry.isIntersecting) video.pause();
      else if (video === flow && !userPaused && !reduced.matches) video.play().catch(flowLabel);
    }
  }, {threshold:0.15});
  document.querySelectorAll('video').forEach(video => {
    observer.observe(video);
    video.addEventListener('play', () => {
      video.dataset.playing = 'true';
      document.querySelectorAll('video').forEach(other => {if(other !== video) other.pause();});
    });
    video.addEventListener('pause', () => {video.dataset.playing = 'false';});
  });
  reduced.addEventListener('change', () => {if(reduced.matches){userPaused=true;flow.pause();}});
  document.addEventListener('visibilitychange', () => {if(document.hidden) document.querySelectorAll('video').forEach(video => video.pause());});
  const dialog = document.getElementById('figure-dialog');
  const figureImage = document.getElementById('figure-image');
  document.querySelectorAll('.figure-open').forEach(button => {
    button.addEventListener('click', () => {
      figureImage.src = button.dataset.figure;
      figureImage.alt = button.querySelector('img').alt;
      document.getElementById('figure-title').textContent = button.dataset.title;
      dialog.showModal();
      document.body.classList.add('figure-active');
    });
  });
  document.getElementById('figure-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('figure-active'));
  dialog.addEventListener('click', event => {if(event.target === dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left || event.clientX>bounds.right || event.clientY<bounds.top || event.clientY>bounds.bottom) dialog.close();}});
})();
