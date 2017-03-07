/*import isEmpty from 'lodash/isEmpty';*/

export default class {
    constructor(data) {
        this.casualData = data;
        this.loading = false;
        this.errors = {};

        for (let prop in data) {
            this[prop] = data[prop];
        }
    }

    reset() {

        for (let prop in this.casualData) {
            this[prop] = ''
        }

        this.loading = false;
        this.errors = {};
    }

    validate(validationFunc) {
        this.loading = true;
        this.errors = validationFunc(this);

        return new Promise((resolve, reject) => {
            if (this.hasError()) {
                reject();
                this.loading = false;
            } else {
                resolve();
            }
        })
    }

    hasError() {
        return Object.keys(this.errors).length > 0;
    }

    data() {
        let data = {};

        for (let prop in this.casualData)
            data[prop] = this[prop];

        return data;

    }
}