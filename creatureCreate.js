const axios = require('axios');

const creatureCreate = async () => {
    let creature1 = {};
    let creature2 = {};
    const random1 = Math.floor(Math.random() * 140);
    const random2 = Math.floor(Math.random() * 140);
    const random3 = Math.floor(Math.random() * 40) + 1;
    const random4 = Math.floor(Math.random() * 40) + 1;
    creature1 = await axios.get(`http://services.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=${random1}`);
    creature2 = await axios.get(`http://services.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=${random2}`);    
    const weapons = await axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`);
    const weapon1 = await weapons.data.data.filter(weapon => weapon.attack > 0)[random3];
    const weapon2 = await weapons.data.data.filter(weapon => weapon.attack > 0)[random4];
    creature1 = creature1.data;
    creature1.weapon = weapon1;
    creature2 = creature2.data;
    creature2.weapon = weapon2;
    if (!creature1.lifepoints) {
        creature1.lifepoints = Math.floor(Math.random() * 100) + 100
    }
    if (!creature2.lifepoints) {
        creature2.lifepoints = Math.floor(Math.random() * 100) + 100
    }
    return { creature1, creature2 };
}

module.exports = {
    creatureCreate
};