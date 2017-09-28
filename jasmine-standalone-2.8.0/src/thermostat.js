function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSave = true
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinumumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinumumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSave = function() {
  return this.powerSave === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSave = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSave = true;
};
