class Nails {
    constructor(type, color, design, areSuperLong, shape) {
        this.type = type;
        this.color = color;
        this.design = design;
        this.areSuperLong = areSuperLong;
        this.shape = shape;
    }

    printDetails() {
        console.log();
        console.log(`type: ${this.type}`);
        console.log(`color: ${this.color}`);
        console.log(`design: ${this.design}`);
        console.log(`areSuperLong: ${this.areSuperLong ? "true" : "false" }`); //bool
        console.log(`shape: ${this.shape}`);
        console.log();
    }
    stop() {
        console.log("Quick Break")
    }

    accelerate() {
        console.log("Hurry Up")
    }

}
const favNails = new Nails("acrylic", "pink", "holiday", false, "almond")
const leastFavNails = new Nails("gel", "green", "crackle", true, "coffin")

favNails.accelerate();
console.log();
console.log("These are awesome");
favNails.printDetails();
favNails.stop();
console.log(); //needed a space
console.log("I don't like these!!");
leastFavNails.printDetails();