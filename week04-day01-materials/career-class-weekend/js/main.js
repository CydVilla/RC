document.querySelector('#check').addEventListener('click', check)

function check() {
console.log('fired')
  const day = document.querySelector('#day').value
  const place = document.querySelector('#placeToSee')
  //Conditionals go here
  if (day === 'Monday' || day === 'monday') {
    place.innerHTML = 'careers-day'
  } else  if (day === 'Tuesday' || day === 'tuesday') {
    place.innerHTML = 'class-day'
  } else if (day === 'Wednesday' || day === 'wednesday') {
    place.innerHTML = 'class-day'
  } else if (day === 'Thursday' || day === 'thursday') {
    place.innerHTML = 'class-day'
  } else if (day === 'Friday' || day === 'friday') {
    place.innerHTML = 'class-day'
  } else if (day === 'Sunday' || day === 'Sunday' || day === 'Saturday' || day === 'Saturday' ) {
    place.innerHTML = 'weekend'
  } else {
    place.innerHTML = 'come onnnnn'
  }
 
}
