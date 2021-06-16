// VARIABLES
const bearContainer = document.querySelector('.container');
const heart = document.getElementById('heart');

// CLICK EVENT LISTENER
heart.addEventListener('click', () => {
  flipBear();
  callShower();
});

// BEAR DOES A 360 SOMERSAULT
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

// HEARTS ARE DYNAMICALLY CREATED
function showerLove() {
  const love = document.createElement('div');
  love.classList.add('rainLove');
  love.textContent = '💕';
  love.style.left = Math.random() * 100 + '%';
  love.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(love);

  // REMOVE HEARTS AFTER THEY FALL TO KEEP DOM CLEAN
  setTimeout(() => {
    love.remove();
  }, 5000);
}

// FUNCTION CONTROLLING WHEN TO CALL AND STOP CALLING HEARTS
function callShower() {
  // Interval calling the showerLove
  const callingShower = setInterval(showerLove, 300);

  // Timer when to stop calling showerLove
  setTimeout(() => {
    clearInterval(callingShower);
  }, 7000);
}
