let both_alive = true;

let creature1 = {};
let creature2 = {};

while (true)
{
    console.log(creature2.name, "attacks!");

    creature1.lifepoints -= creature2.attack + creature2.weapon.attack;

    console.log(creature1.name, "takes", creature2.attack + creature2.weapon.attack, "points of damage!");
    
    if (creature1.lifepoints <= 0)
    {
        console.log(creature1.name, "has perished!");
        break;
    }

    creature2.lifepoints -= creature1.attack + creature1.weapon.attack;
    
    if (creature2.lifepoints <= 0)
    {
        console.log(creature2.name, "has perished!");
        break;
    }

}