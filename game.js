function Combat(C1, C2)
{
    console.log(C2.name, "attacks!");

    C1.lifepoints -= C2.weapon.attack;

    console.log(C1.name, "takes", C2.weapon.attack, "points of damage!");
    
    if (C1.lifepoints <= 0)
    {
        console.log(C1.name, "has perished!");
        console.log(C2.name, "wins!");
    }
}

let creature1 = {};
let creature2 = {};

while (true)
{
    Combat(creature1, creature2);
    Combat(creature2, creature1);
}