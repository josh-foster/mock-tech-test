const Button = document.getElementById("attackButton");
const defenceShipHtml = document.getElementById("defenceships")

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

motherships.html =  motherShip.name + motherShip.hitPoints;
    for (var i = 0; i < motherships.length; i++) {
        motherships[i].innerHTML = motherShip.name + motherShip.hitPoints;
    }

const defenceships = document.getElementsByClassName("defenceship");
    for (var i = 0; i < defenceships.length; i++) {
        defenceships[i].innerHTML = defenceShip.name + defenceShip.hitPoints;
    }

const atackships = document.getElementsByClassName("attackship");
    for (var i = 0; i < atackships.length; i++) {
        atackships[i].innerHTML = attackShip.name + attackShip.hitPoints;
    }

