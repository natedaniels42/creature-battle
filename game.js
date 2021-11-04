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
        if (alive1 && alive2) {
            await prompt('Press enter to continue');
        } else {
            const endGame = prompt("would you like to play again? Type Y for Yes or N for No:");
            endGame.toLowerCase() === 'y' ? playGame() : console.log('Thanks for playing!');
        }
    }
}

playGame();

