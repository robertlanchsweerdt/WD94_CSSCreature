const bearContainer = document.querySelector('.container');
const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
  flipBear();
  callShower();
});

function flipBear() {
  bearContainer.animate(
    [
      // keyframes
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' },
    ],
    {
      // timing options
      duration: 1000,
      ease: 'linear',
    }
  );
}

function showerLove() {
  const love = document.createElement('div');
  love.classList.add('rainLove');
  love.textContent = '💕';
  love.style.left = Math.random() * 100 + '%';
  love.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 5000);
}

function callShower() {
  // Interval calling the showerLove
  const callingShower = setInterval(showerLove, 300);

  // Timer when to stop calling showerLove
  setTimeout(() => {
    clearInterval(callingShower);
  }, 7000);
}
