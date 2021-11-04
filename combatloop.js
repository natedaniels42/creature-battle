function Combat(C1, C2)
{
    console.log(C2.name, "attacks!");

    C1.lifepoints -= C2.weapon.attack;

    console.log(C1.name, "takes", C2.weapon.attack, "points of damage!");
    
    if (C1.lifepoints <= 0)
    {
        console.log(C1.name, "has perished!");
        console.log(C2.name, "wins!");
        
        setTimeout(() => {  console.log(); }, 1000);

        return false;
    }
        
    setTimeout(() => {  console.log(); }, 200);

    return true;
}

// let creature1 = {};
// let creature2 = {};

// let both_alive = true;

// while (both_alive)
// {
//     both_alive = Combat(creature1, creature2);
//     both_alive = Combat(creature2, creature1);
// }

module.exports = {
    Combat
};