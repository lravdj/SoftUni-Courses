function worldTour(input) {
    let string = input.shift();

    while (input[0] !== 'Travel') {
        let tokens = input.shift().split(':');
        let command = tokens[0];
        if (command == 'Add Stop') {
            let index = Number(tokens[1]);
            let city = tokens[2];
            if (index >= 0 && index < string.length) {
                let furst = string.substring(0, index);
                let secont = string.substring(index);
                string = furst.concat(city).concat(secont);
            }
            console.log(string);
        } else if (command == 'Remove Stop') {
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]);
            if ((index1 >= 0 && index1 < string.length) && (index2 >= 0 && index2 < string.length)) {
                let furst = string.substring(0, index1);
                let secont = string.substring(index2 + 1);
                string = furst.concat(secont);
            }
            console.log(string);
        } else if (command == 'Switch') {
            let city1 = tokens[1];
            let city2 = tokens[2];
            if (string.includes(city1)) {
                string = string.replace(city1, city2);
            }
            console.log(string);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${string}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);