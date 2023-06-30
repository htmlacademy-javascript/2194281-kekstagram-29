function lengthSringCalculate(stringCalculate, maxlengthSthing) {
  if (stringCalculate < maxlengthSthing) {
    console.log('Ok');
  }
  console.log('don`t ok');
}

lengthSringCalculate('lalala', 20);


let recycling = false;
const workingDayLangth = (startWork, finishWork, meeting, meetingLength) => {
  if ((meeting + meetingLength) > finishWork) {
    recycling = true;

  }
};

workingDayLangth('08:00', '17:30', '17:00', 90);
console.log(recycling);

