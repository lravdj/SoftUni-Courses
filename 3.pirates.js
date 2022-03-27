function pirates(input) {
    let list = {};
    let counter = 0;

    while (input[0] !== 'Sail') {
        let tokens = input.shift().split('||');
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        if (list.hasOwnProperty(city) == false) {
            list[city] = {
                population,
                gold
            }
            counter++;
        } else {
            list[city].population += population;
            list[city].gold += gold;
        }
    }

    input.shift();

    while (input[0] !== 'End') {
        let tokens = input.shift().split('=>');
        let command = tokens[0];
        let city = tokens[1];
        let peoplles = Number(tokens[2]);
        let gold = Number(tokens[3]);
        if (command == 'Plunder') {
            list[city].population -= peoplles;
            list[city].gold -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${peoplles} citizens killed.`);
            if (list[city].population <= 0 || list[city].gold <= 0) {
                delete list[city];
                counter--;
                console.log(`${city} has been wiped off the map!`);
            }
        } else if (command == 'Prosper') {
            let sum = Number(tokens[2]);
            if (sum >= 0) {
                list[city].gold += sum;
                console.log(`${sum} gold added to the city treasury. ${city} now has ${list[city].gold} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
    }
   
    if (counter > 0) {
        console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`);
        for (let city in list) {
            console.log(`${city} -> Population: ${list[city].population} citizens, Gold: ${list[city].gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}

pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);
// pirates(["Nassau||95000||1000",
// "San Juan||930000||1250",
// "Campeche||270000||690",
// "Port Royal||320000||1000",
// "Port Royal||100000||2000",
// "Sail",
// "Prosper=>Port Royal=>-200",
// "Plunder=>Nassau=>94000=>750",
// "Plunder=>Nassau=>1000=>150",
// "Plunder=>Campeche=>150000=>690",
// "End"]);
