// getters and setters

export class PersonTest {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        } else {
            console.log('The name inserted was rejected!')
        }
       
    }
}