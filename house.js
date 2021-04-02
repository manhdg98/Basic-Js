class House {
    constructor(bedroomCount, buildingMaterial, floorCount, price) {
        this.bedroomCount = bedroomCount;
        this.buildingMaterial = buildingMaterial;
        this.floorCount = floorCount;
        this.price = `${price}.00`;
    }

    describeHouse() {
        console.log(`This lovely ${this.bedroomCount} bedroom house
                    , made out of ${this.buildingMaterial} with 
                    ${this.floorCount} floor(s), is currently on the market
                    for ${this.price}`);
    }
}

const houseNew = new House(3, 'brick', 2, 500);
const houseTwo = new House(10, 'steel', 3, 501);
console.log("One: ", houseNew);
console.log("Two: ", houseTwo);
console.log(typeof houseNew);

houseTwo.describeHouse();

// run cmd: node house.js