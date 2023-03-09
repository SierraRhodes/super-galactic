export default class GalacticAge{
  constructor(){
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }
  getMercuryAge() {
  let userAge = 23;
  const mercuryAge = userAge/this.mercury;
  return mercuryAge;
  
  }
}

