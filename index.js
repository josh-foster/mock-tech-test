const motherShip = {
    name: "MotherShip",
    hitPoints: 100,
    damgageTaken: 9
}
const attackShip = {
    name: "AttackShip",
    hitPoints: 80,
    damgageTaken: 10
}
const defenceShip = {
    name: "DeffenceShip",
    hitPoints: 45,
    damgageTaken: 12
}

const theMotherShip = (document.querySelector(".mothership").innerHTML =
motherShip.name + motherShip.hitPoints);

const defenceships = document.getElementsByClassName("defenceship");
    for (var i = 0; i < defenceships.length; i++) {
        defenceships[i].innerHTML = defenceShip.name + defenceShip.hitPoints;
    }
const atackships = document.getElementsByClassName("attackship");
    for (var i = 0; i < atackships.length; i++) {
        atackships[i].innerHTML = attackShip.name + attackShip.hitPoints;
    }

const button = document.getElementById("attackButton");

const attackTheShips = () => {

    let randomNumber = Math.floor((Math.random() * 14) + 1);
    const MS = document.getElementById("1");
    const DF1 = document.getElementById("2");
    if(randomNumber===1){
        if(motherShip.hitPoints<11){
            MS.remove();
        } else {
            motherShip.hitPoints = motherShip.hitPoints - motherShip.damgageTaken;
            MS.innerHTML = motherShip.name + (motherShip.hitPoints);  
        }   
    }
}


