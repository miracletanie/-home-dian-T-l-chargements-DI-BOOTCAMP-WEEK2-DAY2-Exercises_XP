let x = Number(prompt("Nombre 1"));
let y = Number(prompt("Nombre 2"));

if(!isNaN(x) && !isNaN(y))
{
    if (x>y)
    {
    console.log(x +" est le plus grand")
    }
    else if (x<y)
    {
        console.log(y + " est le plus grand")
    }
}