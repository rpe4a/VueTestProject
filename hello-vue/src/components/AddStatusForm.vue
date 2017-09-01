<template>
    <div class='row'>
        <form class="col-md-6" @submit.prevent='onSubmit' @keydown='delete form.errors[$event.target.name]'>
                <textareagroup @onvalid='onValidationError' label='Имя' name='name' v-model.trim='form.name' placeholder='Введите ваше имя' :validate='this.form.validation.name' :error='form.errors.name'></textareagroup>
                <textareagroup @onvalid='onValidationError' label='You status is:' name='body' v-model.trim='form.body' placeholder='Typing something' :validate='this.form.validation.body' :error='form.errors.body'></textareagroup>
                <formbutton type='submit' class="btn-default" :disabled='form.hasError()' :loading='form.loading' >Поставить статус</formbutton>
        </form>
    </div>
</template>

<script>

    import Form from '../utils/Form.js'
    import formbutton from './Button.vue'
    import textareagroup from './TextAreaGroup.vue'
    import inputGroup from './InputGroup.vue'
    import validator from 'validator';


    function StatusValidation(input){

        if (validator.isEmpty(input))
            return 'Поле статус - не должно быть пустым'
        if (!validator.isNumeric(input))
            return 'Поле статус - должно содержать только цифры'

    }

    function NameValidation(input){
        if (validator.isEmpty(input))
            return 'Поле имя - не должно быть пустым'
    }

    export default {

        components:{
            formbutton,
            textareagroup,
            inputGroup
        },

        data(){
            let formData ={
                name: '',
                body: '',
            },

            validation = {
                name: NameValidation,
                body: StatusValidation
            }

            return {
              form: new Form(formData, validation),
            }
        },

        methods:{
            onSubmit(){
                this.form.validate()
                    .then(() => {
                        setTimeout(() => {
                            this.form.reset()
                        }, 2000)
                    })
                    .catch(() => {
                        console.log('error')
                    })
            },

            onValidationError(error, name){
                this.form.setError(name, error)
            }
        }
    }
</script>