let day = '   Tuesday  ';
var result = day.trim()[0].toUpperCase();
result += day.trim().slice(1);
day = result;
switch (day.trim()) {
  case 'Friday':
  case 'Saturday':
  case 'Sunday':
    console.log('No Appointments Available');
    break;
  case 'Monday':
  case 'Thursday':
    console.log('From 10:00 AM To 5:00 PM');
    break;
  case 'Tuesday':
    console.log('From 10:00 AM To 6:00 PM');
    break;
  case 'Wednesday':
    console.log('From 10:00 AM To 7:00 PM');
    break;
  default:
    console.log('Its Not A Valid Day');
}
