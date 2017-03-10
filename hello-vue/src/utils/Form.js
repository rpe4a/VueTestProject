/*import isEmpty from 'lodash/isEmpty';*/

export default class {
    constructor(data, validation) {
        this.formData = data;
        this.validation = validation;
        this.loading = false;
        this.errors = {};

        for (let prop in data) {
            this[prop] = data[prop];
        }
    }

    reset() {

        for (let prop in this.formData) {
            this[prop] = ''
        }

        this.loading = false;
        this.errors = {};
    }

    validate() {
        this.loading = true;

        for (let prop in this.formData) {
            let error = this.validation[prop](this[prop])

            this.setError(prop, error)
        }

        return new Promise((resolve, reject) => {
            if (this.hasError()) {
                this.loading = false;
                reject();
            } else {
                resolve();
            }
        })
    }

    setError(prop, error) {
        if (error)
            this.errors = {...this.errors, [prop]: error};
    }

    hasError() {
        return Object.keys(this.errors).length > 0;
    }

    data() {
        let data = {};

        for (let prop in this.formData)
            data[prop] = this[prop];

        return data;

    }
}