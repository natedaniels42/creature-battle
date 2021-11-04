function Combat(C1, C2)
{
    console.log(C2.name, "attacks!");

    let damage = Math.floor(C2.weapon.attack*Math.random());

    C1.lifepoints -= damage;

    console.log(C1.name, "takes", damage, "points of damage!");
    
    if (C1.lifepoints <= 0)
    {
        console.log(C1.name, "has perished!");
        console.log(C2.name, "wins with", C2.lifepoints, "left!");

        return false;
    }

    console.log(C1.name, "health:", C1.lifepoints);
    
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