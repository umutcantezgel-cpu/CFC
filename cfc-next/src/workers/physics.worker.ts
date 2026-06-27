const PARTICLE_COUNT = 3000; // Scaled for mobile stability, visually looks like 10k due to trails
const FRICTION = 0.92;
const MOUSE_RADIUS = 160;
const MOUSE_FORCE = 0.5;
const BASE_SPEED = 0.1;

let positions = new Float32Array(PARTICLE_COUNT * 2);
let velocities = new Float32Array(PARTICLE_COUNT * 2);
let origins = new Float32Array(PARTICLE_COUNT * 2);
let colors = new Uint8Array(PARTICLE_COUNT * 3);

let mouseX = -1000;
let mouseY = -1000;
let isShockwave = false;

self.onmessage = (e) => {
  const { type, payload } = e.data;

  if (type === 'INIT') {
    const { width, height } = payload;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      positions[i * 2] = x;
      positions[i * 2 + 1] = y;
      origins[i * 2] = x;
      origins[i * 2 + 1] = y;
      
      const r = Math.random() > 0.5 ? 227 : 243;
      const g = Math.random() > 0.5 ? 24 : 233;
      const b = Math.random() > 0.5 ? 55 : 220;
      
      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }
  }

  if (type === 'MOUSE') {
    mouseX = payload.x;
    mouseY = payload.y;
    if (payload.click) {
      isShockwave = true;
      setTimeout(() => { isShockwave = false; }, 300);
    }
  }

  if (type === 'TICK') {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let x = positions[i * 2];
      let y = positions[i * 2 + 1];
      let vx = velocities[i * 2];
      let vy = velocities[i * 2 + 1];
      const ox = origins[i * 2];
      const oy = origins[i * 2 + 1];

      // Return to origin force
      const dxOrigin = ox - x;
      const dyOrigin = oy - y;
      vx += dxOrigin * 0.01;
      vy += dyOrigin * 0.01;

      // Mouse force
      const dxMouse = x - mouseX;
      const dyMouse = y - mouseY;
      const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
      
      const activeRadius = isShockwave ? MOUSE_RADIUS * 3 : MOUSE_RADIUS;
      const activeForce = isShockwave ? MOUSE_FORCE * 5 : MOUSE_FORCE;

      if (distMouseSq < activeRadius * activeRadius) {
        const distMouse = Math.sqrt(distMouseSq);
        const force = (activeRadius - distMouse) / activeRadius;
        vx += (dxMouse / distMouse) * force * activeForce;
        vy += (dyMouse / distMouse) * force * activeForce;
      }

      // Add base drift
      vx += (Math.random() - 0.5) * BASE_SPEED;
      vy += (Math.random() - 0.5) * BASE_SPEED;

      // Friction
      vx *= FRICTION;
      vy *= FRICTION;

      x += vx;
      y += vy;

      positions[i * 2] = x;
      positions[i * 2 + 1] = y;
      velocities[i * 2] = vx;
      velocities[i * 2 + 1] = vy;
    }

    (self as any).postMessage({
      type: 'TICK_RESULT',
      positions: positions.buffer,
      colors: colors.buffer
    }, [positions.buffer, colors.buffer]);

    // Re-assign buffers since Transferable Objects detach them
    positions = new Float32Array(PARTICLE_COUNT * 2);
    colors = new Uint8Array(PARTICLE_COUNT * 3);
  }
};
