const prompt = require('prompt-sync')();
const { Combat } = require('./combatloop');
const { creatureCreate } = require('./creatureCreate');

const playGame = async () => {
    const { creature1, creature2 } = await creatureCreate();
    
    while (creature1.lifepoints > 0 && creature2.lifepoints > 0) {
        const alive = await Combat(creature1, creature2);
        if (alive) {
            await Combat(creature2, creature1);
        }
        const stopper = await setTimeout(() => {  console.log(); }, 5000);
        await clearTimeout(stopper);
    }

}

playGame();
