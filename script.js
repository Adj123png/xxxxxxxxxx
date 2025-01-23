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
const messageElements = document.querySelectorAll('.message');
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('backgroundAudio');

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 绘制像素风格的蛇和福字
function drawBackground() {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 绘制黑色背景
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 绘制像素风格的蛇
  const snakeBody = [
    {x: 50, y: 50}, {x: 70, y: 50}, {x: 90, y: 50}, {x: 110, y: 50},
    {x: 130, y: 50}, {x: 150, y: 50}, {x: 170, y: 50}, {x: 190, y: 50},
    {x: 210, y: 50}, {x: 230, y: 50}
  ];
  ctx.fillStyle = '#0f0';
  snakeBody.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, 20, 20);
  });

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
  messageElements.forEach((element, index) => {
    element.textContent = messages[index];
  });
}

// 初始化
drawBackground();
showMessages();
audio.play();
