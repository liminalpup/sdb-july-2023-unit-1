class Cake {
  constructor(flavor, icing, decoration) {
    this.flavor = flavor
    this.icing = icing
    this.decoration = decoration
  }

  describe(Cake) {
  console.log(`It is a ${this.flavor} cake, with ${this.icing} frosting and ${this.decoration}`);
 }
}

let chocolateCake = new Cake('chocolate', 'caramel', 'sprinkles' );
let iceCreamCake = new Cake('vanilla ice cream', 'chocolate', `whipped cream` );
let cheeseCake = new Cake('cheese', 'buttercream', 'cherry syrup');

chocolateCake.describe()