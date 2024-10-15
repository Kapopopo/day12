function display_weather_chart(longitude, latitude) {
  const result = "https://www.7timer.info/bin/civil.php?lon=" + longitude + "&lat=" + latitude + "&product=civil&output=internal&unit=metric&tzshift=0";
  console.log(result)

}

display_weather_chart(2.963, 98.520);