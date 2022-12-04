/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here
class BaseSignal {
    constructor(type) {

        this.type = type;

        if(this.constructor.name === "Permission"){
            throw new Error("This class cannot be instantiated");
        }
    }
    send() {
        console.log(`Sending ${this.type} signal`);
    }
}

class TvSignal extends BaseSignal {
    constructor(type) {
        // Add code here
        super(type);
    }

    send() {
        super.send();
    }
}

class AirconSignal extends BaseSignal {
    constructor(type) {
        // Add code here
        super(type);
    }

    send() {
        super.send();
    }
}

class DoorSignal extends BaseSignal {
    constructor(type) {
        // Add code here
        super(type);
    }

    send() {
        super.send();
    }
}

const tv = new TvSignal("tv");
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal("door");
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal("aircon");
aircon.send(); // prints "Sending aircon signal"