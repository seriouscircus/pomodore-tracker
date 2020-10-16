import './styles.css';

var context = document.querySelector('canvas').getContext('2d');

const index = 10;
const width = context.canvas.width;
const height = context.canvas.height;

for (let i = 0; i < index; i = i + 1) {
  const x = (i * width) / (index - 1);
  const y = (i * height) / (index - 1);
  drawLine(0, y, x, height);
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}
