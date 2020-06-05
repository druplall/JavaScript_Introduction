let countdownFrom = (num) => {
  if (num === 0) {
    return;
  }
  console.log(num);
  countdownFrom(num - 1);
};

countdownFrom(10);
