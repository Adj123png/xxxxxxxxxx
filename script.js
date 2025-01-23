// 新年祝福语数组
const messages = [
  '2025 新年快乐',
  '愿你新的一年万事如意！',
  '好运连连，财源滚滚！',
  '家庭幸福，平安健康！',
  '新的一年，心想事成！',
  '梦想成真，福气满满！'
];

// 获取元素
const messageElement = document.getElementById('message');
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 绘制像素风格的蛇和福字
function drawBackground() {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 绘制白色背景
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 绘制像素风格的蛇
  const snakeSize = 20;
  ctx.fillStyle = '#0f0';
  for (let i = 0; i < 10; i++) {
    ctx.fillRect(i * snakeSize, 50, snakeSize, snakeSize);
  }

  // 绘制像素风格的福字
  const fuSize = 50;
  ctx.fillStyle = '#f00';
  ctx.font = `${fuSize}px Arial`;
  ctx.fillText('福', 100, 200);
  ctx.fillText('福', 300, 300);
  ctx.fillText('福', 500, 400);

  requestAnimationFrame(drawBackground);
}

// 显示祝福语
function showMessages() {
  let index = 0;
  const interval = setInterval(() => {
    if (index < messages.length) {
      messageElement.textContent = messages[index];
      messageElement.style.opacity = 1;
      setTimeout(() => {
        messageElement.style.opacity = 0;
      }, 2000);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 3000);
}

// 初始化
drawBackground();
showMessages();
