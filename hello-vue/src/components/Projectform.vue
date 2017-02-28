<template>
    <form id='projectform' @submit.prevent='onSubmit' @keydown='delete errors[$event.target.name]'>
        <div class="form-group" :class="{'has-feedback has-error': errors.name}">
            <label class='control-label' for="name">Имя</label>
            <input type="text" class="form-control" id="name" name='name' placeholder="Ваше имя" v-model='name'>
            <span class='glyphicon glyphicon-remove form-control-feedback' v-if='errors.name'></span>
            <span class='help-block' v-if='errors.name'>{{errors.name}}</span>
        </div>
        <div class="form-group" :class="{'has-feedback has-error': errors.description}">
            <label class='control-label' for="description">О себе</label>
            <input type="password" class="form-control" id="description" v-model='description' name='description' placeholder="Напиши те что-нибудь...">
            <span class='glyphicon glyphicon-remove form-control-feedback' v-if='errors.description'></span>
            <span class='help-block' v-if='errors.description'>{{errors.description}}</span>
        </div>
        <button type="submit" class="btn btn-default">Отправить</button>
    </form>
</template>

<script>
    import ValidateForm from '../utils/ValidateForm.js'

    export default {
        name: 'projectform',
        data() {
            return {
                name: '',
                description: '',
                errors: {}
            }
        },
        methods: {
            onSubmit() {
                let { errors, isValid } = ValidateForm({ ...this.$data })

                if (!isValid) {
                    this.errors = errors;
                }
                else {
                    console.log('Submited!')
                }

            }
        }

    }

</script>