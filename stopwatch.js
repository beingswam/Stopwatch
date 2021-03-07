const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

const mins = document.querySelector('#min');
const secs = document.querySelector('#sec');


let timer;
let timerTime = 00;
stopButton.style.display = 'none';

function startTimer()
{
    timer=setInterval(incrementTimer,1000);
    startButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
    
}

function incrementTimer()
{
  timerTime++;

  const numberOfMins = Math.floor(timerTime / 60);
  const numberOfSec = timerTime % 60;

  secs.innerText = zeroPadding(numberOfSec);
  mins.innerText = zeroPadding(numberOfMins);
}

function zeroPadding(number) 
{
  if(number <= 9) 
  {
    return "0"+number
  }
  else
  {
    return number
  }

}

function stopTimer() 
{
  clearInterval(timer);

  stopButton.style.display = 'none';
  startButton.style.display = 'inline-block';
}

function resetTimer() 
{
  stopTimer();
  timerTime = 00;
  secs.innerText = '00';
  mins.innerText = '00';
}
