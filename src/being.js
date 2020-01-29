class Being {
  constructor(name, species) {
    this.isAlive = true;
    this.name = name;
    this.species = species;
    this.credits = 0;
  }
  updateCredits(currentCredits) {
    this.credits += currentCredits;
  }
}
module.exports = Being;
