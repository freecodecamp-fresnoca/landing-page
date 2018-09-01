var cal = ics();

function downloadIcs() {
  cal_single = ics();
  cal_single.addEvent('freeCodeCamp Fresno meetup', 'Come code with us at Root Access Hackerspace', 'Fresno, CA', '10/06/2018 1:00 pm', '10/06/2018 3:00 pm');
  cal_single.download();
}
