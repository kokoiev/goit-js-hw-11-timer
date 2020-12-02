import  './styles.css'

class CountdownTimer {    
  constructor(obg) { 
    this.selector = obg.selector;
    this.targetDate = obg.targetDate;    
  };
  intervalID = null;
  start() { 
    this.intervalID = setInterval(() => {
      const daysRef = document.querySelector(`span[data-value="days"]`);
      const hoursRef = document.querySelector(`span[data-value="hours"]`);
      const minutesRef = document.querySelector(`span[data-value="mins"]`);
      const secondsRef = document.querySelector(`span[data-value="secs"]`);
      const endTime = Date.parse(this.targetDate);
      const time = endTime - Date.now();
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      if (time <= 0) { clearInterval(this.intervalID); return }
      daysRef.textContent = days;
      hoursRef.textContent = hours;
      minutesRef.textContent = mins;
      secondsRef.textContent = secs;
          
    }, 1000);
  };

};
const clock = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 17, 2020'),
});
clock.start();

function pad(value) { 
  return String(value).padStart(2, '0')
}




