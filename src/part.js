
var validTypes = ['shell', 'hyperdrive', 'computer', 'life support', 'landing gear', undefined];

class Part {
  constructor(partInfo) {
    this.name = partInfo.name;
    this.type = validTypes.includes(partInfo.type) ? partInfo.type : undefined;
    this.value = partInfo.value;
    this.broken = false;
  }
  isValid() {
    return this.name && this.type && this.value !== undefined ? true : false;

  }
}




// class Part {
//   constructor({name, type, value}) {
//     this.name = name
//     this.type = validTypes.inludes(type) ? type : undefined;
//     this.value = value;
//     this.broken = false;
//   }
// }

module.exports = Part;
