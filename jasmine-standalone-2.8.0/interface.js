$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('Power Save Mode is On')
    updateTemperature();
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('Power Save Mode is Off')
    updateTemperature();
  })

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  if(thermostat.energyUsage() === 'low-usage') {
    $('#temperature').css('color', 'green')
  } else if(thermostat.energyUsage() === 'medium-usage') {
    $('#temperature').css('color', 'black')
  } else {
    $('#temperature').css('color', 'red')
  }
}

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=ba2200495058d48f8c3ab5402610d726';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  });
}

});
