export default class GalacticAge{
  constructor(){
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }
  getMercuryAge() {
  let userAge = 56;
  const mercuryAge = userAge/this.mercury;
  return mercuryAge;
  }
  getVenusAge(){
  let userAge = 56;
  const venusAge = userAge/this.venus;
  return venusAge;
  }
  getMarsAge(){
  let userAge = 56;
  const marsAge = userAge/this.mars;
  return marsAge; 
  }
  getJupiterAge(){
  let userAge = 56;
  const jupiterAge = userAge/this.jupiter;
  return jupiterAge;
  }
  getPastBirthday(){

  }
}

