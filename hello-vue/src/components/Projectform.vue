<template>
    <form id='projectform' @submit.prevent='onSubmit' @keydown='delete errors[$event.target.name]'>

        <InputGroup label='Имя' nameInput="name" v-model='name' :error='errors.name' placeholder='Введите ваше имя'></InputGroup>

        <div class="form-group" :class="{'has-feedback has-error': errors.description}">
            <label class='control-label' for="description">О себе</label>
            <input type="password" class="form-control" id="description" v-model='description' name='description' placeholder="Напиши те что-нибудь...">
            <span class='glyphicon glyphicon-remove form-control-feedback' v-if='errors.description'></span>
            <span class='help-block' v-if='errors.description'>{{errors.description}}</span>
        </div>
        <button type="submit" class="btn btn-default" :disabled='hasError()'><i class='fa fa-spinner fa-spin ' v-show='loading'></i> Отправить</button>
    </form>
</template>

<script>
    import ValidateForm from '../utils/ValidateForm.js'
    import InputGroup from './InputGroup.vue'

    let initialState = {
        name: '',
        description: '',
        loading: false,
        errors: {}
    }

    export default {
        name: 'projectform',
        components: {
            InputGroup
        },
        data() {
            return { ...initialState }
        },

        methods: {
            onSubmit() {
                this.loading = true;
                let { errors, isValid } = ValidateForm({ ...this.$data })

                if (!isValid) {
                    this.errors = errors;
                }
                else {
                    setTimeout(() => {
                        console.log('Submited!')
                        this.loading = false;
                    }, 1000)
                }
            },

            hasError() {
                return Object.keys(this.errors).length > 0;
            }
        }

    }
/*
<div class="form-group" :class="{'has-feedback has-error': errors.name}">
            <label class='control-label' for="name">Имя</label>
            <input type="text" class="form-control" id="name" name='name' placeholder="Ваше имя" v-model='name'>
            <span class='glyphicon glyphicon-remove form-control-feedback' v-if='errors.name'></span>
            <span class='help-block' v-if='errors.name'>{{errors.name}}</span>
        </div>*/

</script>