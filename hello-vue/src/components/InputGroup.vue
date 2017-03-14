<template>
    <div class="form-group" :class="{'has-feedback has-error': error}">
        <label class='control-label' :for="name">{{label}}</label>
        <input type="text" :id='name' class="form-control" :name="name" :placeholder="placeholder" :value='value' @input='update'
            @keyup.delete='clear'>
            <span class='glyphicon glyphicon-remove form-control-feedback' v-if='error'></span>
            <span class='help-block' v-if='error'>{{error}}</span>
    </div>
</template>

<script>
    export default {
        props: ['label', 'name', 'error', 'placeholder', 'value'],
        /*        computed: {
                    inputError() {
                        return this.error
                    },
                },*/
        /*   data: function () {
               return {
                   initialValue: ''
               }
           },*/
        /*watch: {
            'initialValue': function (newValue) {
                // When the internal value changes, we $emit an event. Because this event is 
                // named 'input', v-model will automatically update the parent value
                this.$emit('input', newValue);
            }
        },*/
        /*    created() {
                this.initialValue = this.value;
            },*/
        methods: {
            update(e) {
                this.$emit('input', e.target.value)
            },

            clear() {
                this.$emit('input', '')
            }
        },
    }

</script>
<style lang="scss">
    input {
        background-color: red;
    }
</style>