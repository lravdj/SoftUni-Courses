function destinationMapper(input) {
    let destination = [];
    let pattern = /([=|\/])([A-Z][a-zA-Z]*)\1/g;
    let counter = 0;
    let match = pattern.exec(input);

    while (match !== null) {
        if (match[2].length >= 3) {
            destination.push(match[2]);
            counter += match[2].length;
        }
        match = pattern.exec(input);
    }
    console.log(`Destinations: ${destination.join(', ')}`);
    console.log(`Travel Points: ${counter}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");