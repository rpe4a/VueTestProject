<template>
    <form id='projectform' @submit.prevent='onSubmit' @keydown='delete form.errors[$event.target.name]'>

        <InputGroup label='Имя' name="name" v-model='form.name' :error='form.errors.name' placeholder='Введите ваше имя'></InputGroup>

        <InputGroup label='О себе' name="description" v-model='form.description' :error='form.errors.description' placeholder='Напиши те что-нибудь'></InputGroup>


        <button type="submit" class="btn btn-default" :disabled='form.hasError()'><i class='fa fa-spinner fa-spin ' v-show='form.loading'></i> Отправить</button>
    </form>
</template>

<script>
    import ValidateForm from '../utils/ValidateForm.js'
    import Form from '../utils/Form.js'
    import InputGroup from './InputGroup.vue'

    export default {
        name: 'projectform',
        components: {
            InputGroup
        },
        data() {
            return {
                form: new Form({
                    name: '',
                    description: '',
                })
            }
        },

        methods: {
            onSubmit() {
                this.form.validate(ValidateForm)
                    .then(() => {
                        setTimeout(() => {
                            console.log(this.form.data())
                            this.form.reset()
                        }, 1000)
                    })
                    .catch(() => {
                        /*this.form.errors = errors;*/
                        /*this.form.loading = false;*/
                    })
            },
        }

    }
/*
<div class="form-group" :class="{'has-feedback has-error': errors.name}">
            <label class='control-label' for="name">Имя</label>
            <input type="text" class="form-control" id="name" name='name' placeholder="Ваше имя" v-model='name'>
            <span class='glyphicon glyphicon-remove form-control-feedback' v-if='errors.name'></span>
            <span class='help-block' v-if='errors.name'>{{errors.name}}</span>
        </div>*/
/*<div class="form-group" :class="{'has-feedback has-error': form.errors.description}">
            <label class='control-label' for="description">О себе</label>
            <input type="password" class="form-control" id="description" v-model='form.description' name='description' placeholder="Напиши те что-нибудь...">
            <span class='glyphicon glyphicon-remove form-control-feedback' v-if='form.errors.description'></span>
            <span class='help-block' v-if='form.errors.description'>{{form.errors.description}}</span>
        </div>*/

</script>