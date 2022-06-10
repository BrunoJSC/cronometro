function createHoursAndSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const relogio = document.querySelector('.relogio');

let seconds = 0;
let timer;

function startRelogio() {
  timer = setInterval(() => {
    seconds++;
    relogio.innerHTML = createHoursAndSeconds(seconds);
  }, 1000);
}

start.addEventListener("click", () => {
  startRelogio();
});

pause.addEventListener("click", () => {
  clearInterval(timer);
});

reset.addEventListener("click", () => {
  relogio.innerHTML = "00:00:00"
});
