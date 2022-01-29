import React, { FC, useRef } from 'react';
import '../assets/styles/canvas.scss'

const Canvas:FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <div>
      <canvas width={600} height={400} ref={canvasRef}></canvas>
    </div>
  );
};

export default Canvas;