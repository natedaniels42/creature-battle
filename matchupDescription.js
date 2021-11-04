const matchupDescription = (c1, c2) => {
    console.log(`Creature 1 is ${creature1.name} wielding the ${creature1.weapon.name}.\n
    It does ${creature1.weapon.attack} damage and ${creature1.name} has ${creature1.lifepoints}.`);
    console.log(`Creature 1 is ${creature2.name} wielding the ${creature2.weapon.name}.\n
    It does ${creature2.weapon.attack} damage and ${creature2.name} has ${creature2.lifepoints}.`);
}

module.exports = {
    matchupDescription
}