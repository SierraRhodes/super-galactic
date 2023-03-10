import GalacticAge from './../src/galactic-age.js';

describe('GalacticAge', () => {

  const mercury = .24;
  const venus = .62;
  const mars = 1.88;
  const jupiter = 11.86;
  let userAge = 56;
  let userOldAge = 43;

  const galacticAge = new GalacticAge(mercury, venus, mars, jupiter);

  test('Should correctly create a galacticAge object with 4 different planets', () => {
    expect(galacticAge.mercury).toEqual(mercury);
    expect(galacticAge.venus).toEqual(venus);
    expect(galacticAge.mars).toEqual(mars);
    expect(galacticAge.jupiter).toEqual(jupiter);
  });
  test('Should correctly convert earth age to Mercury age', () => {
    const mercuryAge = (userAge/mercury);
    console.log('Mercury Age', mercuryAge);
    expect(galacticAge.getMercuryAge()).toEqual(mercuryAge);
  });
  test('Should correctly convert earth age to Venus age', () => {
    const venusAge = (userAge/venus);
    console.log('Venus Age', venusAge);
    expect(galacticAge.getVenusAge()).toEqual(venusAge);
  });
  test('Should correctly convert earth age to Mars age', () => {
    const marsAge = (userAge/mars);
    console.log('Mars Age', marsAge);
    expect(galacticAge.getMarsAge()).toEqual(marsAge);
  });
  test('Should correctly convert earth age to Jupiter age', () => {
    const jupiterAge = (userAge/jupiter);
    console.log('Jupiter Age', jupiterAge);
    expect(galacticAge.getJupiterAge()).toEqual(jupiterAge);
  })
  test('Should correctly calculate how many years have passed since past birthday in Mercury years', () => {
    const planetNames = ['Mercury', 'Venus', 'Mars', 'Jupiter'];
    const planets = [mercury, venus, mars, jupiter];
    let pastYears = [];
    planets.forEach(function(planet,index) {
      pastYears[index] = (userAge/planet) - (userOldAge/planet);
      console.log(planetNames[index], pastYears[index]);
    });
    expect(galacticAge.getPastBirthday()).toEqual(pastYears);
  });
})