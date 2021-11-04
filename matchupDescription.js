const matchupDescription = (c1, c2) => {
    console.log(`Creature 1 is ${c1.name} wielding the ${c1.weapon.name}.
${c1.weapon.name} does a max of ${c1.weapon.attack} damage and ${c1.name} has ${c1.lifepoints} health.`);
    console.log(`\nCreature 1 is ${c2.name} wielding the ${c2.weapon.name}.
${c2.weapon.name} does a max of ${c2.weapon.attack} damage and ${c2.name} has ${c2.lifepoints} health.`);
}

module.exports = {
    matchupDescription
}