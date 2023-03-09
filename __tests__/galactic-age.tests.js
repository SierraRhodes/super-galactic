import GalacticAge from './../src/galactic-age.js';

describe('GalacticAge', () => {
  const mercury = .24;
  const venus = .62;
  const mars = 1.88;
  const jupiter = 11.86;
  let userAge = 23;
  const galacticAge = new GalacticAge(mercury, venus, mars, jupiter);

  test('Should correctly create a galacticAge object with 4 different planets', () => {
    expect(galacticAge.mercury).toEqual(mercury);
    expect(galacticAge.venus).toEqual(venus);
    expect(galacticAge.mars).toEqual(mars);
    expect(galacticAge.jupiter).toEqual(jupiter);
  });
  test('Should correctly convert earth age to mercury age', () => {
    const newAge = (userAge/mercury);
    console.log('Age', newAge);
    expect(galacticAge.getMercuryAge()).toEqual(newAge);
  });
})