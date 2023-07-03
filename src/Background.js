import React, { useEffect, useRef } from 'react';


const Background = () => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let stars = [];
      const FPS = 60;
      const numStars = 100;
      let mouse = { x: 0, y: 0 };
  
      const initializeStars = () => {
        for (let i = 0; i < numStars; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1 + 1,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25,
          });
        }
      };
  
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        ctx.globalCompositeOperation = 'lighter';
  
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
  
          ctx.fillStyle = '#fff';
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = 'black';
          ctx.stroke();
        }
  
        ctx.beginPath();
        for (let i = 0; i < stars.length; i++) {
          const starI = stars[i];
          ctx.moveTo(starI.x, starI.y);
          if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
          for (let j = 0; j < stars.length; j++) {
            const starII = stars[j];
            if (distance(starI, starII) < 150) {
              ctx.lineTo(starII.x, starII.y);
            }
          }
        }
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = 'white';
        ctx.stroke();
      };
  
      const distance = (point1, point2) => {
        let xs = 0;
        let ys = 0;
  
        xs = point2.x - point1.x;
        xs = xs * xs;
  
        ys = point2.y - point1.y;
        ys = ys * ys;
  
        return Math.sqrt(xs + ys);
      };
  
      const update = () => {
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
  
          s.x += s.vx / FPS;
          s.y += s.vy / FPS;
  
          if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
          if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
      };
  
      const handleMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
  
      canvas.addEventListener('mousemove', handleMouseMove);
  
      const animation = () => {
        draw();
        update();
        requestAnimationFrame(animation);
      };
  
      animation();
  
      // Cleanup event listener on unmount
      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return <canvas ref={canvasRef}></canvas>;
  };
  
  export default Background;