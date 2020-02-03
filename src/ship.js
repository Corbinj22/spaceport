var Being = require('../src/being');
var Part = require('../src/part');
class Ship {
  constructor({name, type, captian, maxCrew, odometer, fuelCapacity, parts}) {
    this.name = name;
    this.validTypes = ["military", "passenger", "cargo",]
    this.type = this.validTypes.includes(type) ? type : undefined;
    this.maxCrew = maxCrew;
    this.odometer = odometer || 0;
    this.fuelCapacity = fuelCapacity || 10;
    this.fuel = 0;
    this.captian = captian;
    this.crew = [];
    this.cargo = [];
    this.parts = parts || {};
  }
  addCrew(goofTroop) {
    for(var i = 0; i < goofTroop.length; i++) {
      if((this.crew.length < this.maxCrew) && (goofTroop[i] instanceof Being)) {
        this.crew.push(goofTroop[i]);
      }
    }
  }
  loadCargo(partCargo) {
      if(partCargo instanceof Part) {
        this.cargo.push(partCargo)
      }
    }
  updatePart(newPart) {
    this.parts[newPart.type] = newPart;
    }
  }
  // addCrew(goofTroop) {
  //   goofTroop.forEach(troop => {
  //     this.crew.push(troop);
  //   })
  // }


module.exports = Ship;
