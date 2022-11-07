const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  return (
    soldierType === "Hobbits"
    || soldierType === "Elves"
    || soldierType === "Dwarves"
    || soldierType === "Eagles"
  );
};

const buildSoldierObject = (battlefield) => {
  // TODO: Given a battlefield (String), return an object of forces.
  const newBattefield = {};
  battlefield.split(',').forEach((element) => {
    const type = element.split(':')[0];
    const num = element.split(':')[1];
    newBattefield[type] = parseInt(num, 10);
  });
  return newBattefield;
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
  if (!battlefield) {
    return "Tie";
  }
  const soldiers = buildSoldierObject(battlefield);
  let good = 0;
  let evil = 0;
  Object.keys(soldiers).forEach((soldierType) => {
    if (isGood(soldierType)) {
      good += soldiers[soldierType];
    } else {
      evil += soldiers[soldierType];
    }
  });
  if (good === evil) {
    return "Tie";
  }
  return (good > evil ? "Good" : "Evil");
};

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
