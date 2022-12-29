let x = Number(prompt("entrez un nombre svp"));

if(!isNaN(x))
{
    if( x % 2 === 0)
    {
        console.log(x +" est un nombre pair ")
    }
    else
    {
        console.log( x+ " est un nombre impair")
    }
}else{
    console.log("Veuillez fournir un nombre");
}