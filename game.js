const prompt = require('prompt-sync')();
const { Combat } = require('./combatloop');
const { creatureCreate } = require('./creatureCreate');
const { matchupDescription } = require('./matchupDescription');

const playGame = async () => {
    const { creature1, creature2 } = await creatureCreate();
    await matchupDescription(creature1, creature2);
    prompt('Press enter to start fight');
    while (creature1.lifepoints > 0 && creature2.lifepoints > 0) {
        let alive1 = await Combat(creature1, creature2);
        let alive2;
        if (alive1) {
            alive2 = await Combat(creature2, creature1);
        }
        await prompt('Press enter to continue');
    }

}

playGame();

