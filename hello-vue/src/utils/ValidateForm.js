import validator from 'validator';
/*import isEmpty from 'lodash/isEmpty';*/

export default function (fields) {
    let errors = {};

    if (validator.isEmpty(fields.name))
        errors.name = 'Поле Имя - не заполнено'
    if (validator.isEmpty(fields.description))
        errors.description = 'Поле Описание - не заполнено'

    return errors;
    /*return new Promise((resolve, reject) => {
        if (isEmpty(errors))
            resolve()
        else
            reject(errors)
    })*/

    /*  return {
          errors,
          isValid: isEmpty(errors)
      }*/

}