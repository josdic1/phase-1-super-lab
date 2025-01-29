// Write your classes here
class Tree {
   constructor(species, name) {
      this.species = species;
      this.name = name;
   }

   static definition() {
      return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.';
   }


   get treeType() {
      return 'Deciduous trees shed their leaves annually.';
   }
}

class Deciduous extends Tree {
   constructor(species, name) {
      if (species === '') {
         throw new Error("Species is missing a value");
      }
      super(species, name);
   }

   static definition() {
      if (this.name !== 'Deciduous') {
         throw new Error("Not a Deciduous tree");
      }
      return super.definition() + " Deciduous trees shed their leaves annually.";
   }
}

class Evergreen extends Tree {
   constructor(species, name) {
      if (species === '') {
         throw new Error('(Evergreen) species is missing a values')
      }
      super(species, name);
   }

   static definition() {
      if (this.name !== 'Evergreen') {
         throw new Error('Not an Evergreen tree')
      }
      return super.definition() + ' Evergreens keep their leaves all year round.'
   }
}

