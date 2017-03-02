<template>
    <div class="form-group" :class="{'has-feedback has-error': inputError}">
        <label class='control-label' :for="nameInput">{{label}}</label>
        <input type="text" class="form-control" :name="nameInput" :placeholder="placeholder" :value='name' @input='update'>
        <span class='glyphicon glyphicon-remove form-control-feedback' v-if='inputError'></span>
        <span class='help-block' v-if='inputError'>{{inputError}}</span>
    </div>
</template>

<script>

    export default {
        props: ['label', 'name', 'nameInput', 'error', 'placeholder'],
        computed: {
            inputError() {
                return this.error
            }
        },

        methods: {
            update(e) {
                this.$emit('input', e.target.value)
            },
        },
    }

</script>