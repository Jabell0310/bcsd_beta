const stopwatchBox = document.querySelector("#stopwatchbox");
const timerBox = document.querySelector("#timerbox");
const btn_stopwatch = document.querySelector("#btn_stopwatch");
const btn_timer = document.querySelector("#btn_timer");
let stopwatch = document.querySelector("#stopwatch");
let timer = document.querySelector("#timer");
let active = false;
let hour = 0;
let minute = 0;
let second = 0;

function addButton1() {
  const btn_pause = document.createElement("button");
  const btn_5sec_wait = document.createElement("button");
  btn_pause.innerText = "정지";
  btn_5sec_wait.innerText = "5초대기";
  btn_pause.id = "pause_stopwatch";
  btn_5sec_wait.id = "wait_5sec";
  stopwatchBox.append(btn_pause);
  stopwatchBox.append(btn_5sec_wait);
  const pause_stopwatch = document.querySelector("#pause_stopwatch");
  pause_stopwatch.addEventListener("click", function () {
    clearInterval(timer);
    active = false;
  });

  const fiveSec = (wait) => {
    return new Promise((resolve, reject) => {
      let id = setTimeout(() => {
        if (id == timeoutId) resolve(true);
        else reject(false);
      }, wait);
      timeoutId = id;
    });
  };

  async function waitFiveSec() {
    clearInterval(timer);
    console.log("start");
    active = false;
    await fiveSec(5000)
      .then(() => {
        console.log("e");
        startStopwatch();
      })
      .catch();
  }

  const wait_5sec = document.querySelector("#wait_5sec");
  wait_5sec.addEventListener("click", waitFiveSec);
}

function startStopwatch() {
  if (active == false) {
    active = true;
    timer = setInterval(function () {
      second++;
      if (second > 59) {
        second = 0;
        minute++;
        if (minute > 59) {
          minute = 0;
          hour++;
          if (hour > 99) {
            hour = 0;
          }
        }
      }
      stopwatch.innerText =
        (hour < 10 ? "0" + hour : hour) +
        ":" +
        (minute < 10 ? "0" + minute : minute) +
        ":" +
        (second < 10 ? "0" + second : second);
    }, 1000);
  }
}

btn_stopwatch.addEventListener("click", addButton1, { once: true });
btn_stopwatch.addEventListener("click", startStopwatch);

function numberMaxLength(e) {
  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, e.maxLength);
  }
}

let hou = document.querySelector("#hour");
let min = document.querySelector("#minute");
let sec = document.querySelector("#second");
let toggle = false;

function addButton2() {
  const btn_pause = document.createElement("button");
  const reset = document.createElement("button");
  btn_pause.innerText = "정지";
  reset.innerText = "리셋";
  btn_pause.id = "pause_timer";
  reset.id = "reset";
  timerBox.append(btn_pause);
  timerBox.append(reset);
  const btn_timer = document.querySelector("#pause_timer");
  const btn_reset = document.querySelector("#reset");
  btn_timer.addEventListener("click", function () {
    clearInterval(timer);
    toggle = false;
    updateSource();
  });
  btn_reset.addEventListener("click", function () {
    clearInterval(timer);
    document.querySelector("#timer").innerHTML =
      '<input type="number" id="hour" max="23" min="0" maxlength="2" oninput="numberMaxLength(this)" value=""/>' +
      ":" +
      '<input type="number" id="minute" max="59" min="0" maxlength="2" oninput="numberMaxLength(this)" value=""/>' +
      ":" +
      '<input type="number" id="second" max="59" min="0" maxlength="2" oninput="numberMaxLength(this)" value=""/>';
    toggle = false;
  });

  const updateTime = (u_T) => {
    return new Promise((resolve, reject) => {
      let time = setTimeout(() => {
        if ((time = currentTimes)) resolve(true);
        else reject(false);
      }, u_T);
      currentTimes = time;
    });
  };

  async function updateSource() {
    clearInterval(timer);
    toggle = false;
    console.log("play");
    await updateTime(0)
      .then(() => {
        console.log("works");
      })
      .catch();
  }
}

function startTimer() {
  if (toggle == false) {
    toggle = true;
    let h = parseInt(hou.value);
    let m = parseInt(min.value);
    let s = parseInt(sec.value);
    timer = setInterval(function () {
      document.querySelector("#timer").innerText =
        (h < 10 ? "0" + h : h) +
        ":" +
        (m < 10 ? "0" + m : m) +
        ":" +
        (s < 10 ? "0" + s : s);
      s--;
      if (s < 0) {
        m--;
        s = 59;
        if (m < 0) {
          h--;
          m = 59;
          s = 59;
          if (h < 0) {
            document.querySelector("#timer").innerHTML = "시간 종료";
            clearInterval(timer);
          }
        }
      }
    }, 1000);
  }
}

btn_timer.addEventListener("click", addButton2, { once: true });
btn_timer.addEventListener("click", startTimer);
