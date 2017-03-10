<template>
    <div class="form-group" :class="{'has-feedback has-error': this.initialError}">
        <label class='control-label' :for="name">{{label}}</label>
        <textarea :id='name' class="form-control" :name="name" :placeholder="placeholder" :value='value' @input='update'
            @keyup.delete='clear'></textarea>
            <span class='glyphicon glyphicon-remove form-control-feedback' v-if='this.initialError'></span>
            <span class='help-block' v-if='this.initialError'>{{this.initialError}}</span>
    </div>
</template>

<script>
    export default {
        props: ['label', 'name', 'error', 'placeholder', 'value', 'validate'],

        data: function (){
            return {
                initialError: this.error
            }
        },
        watch:{
            error: function(error){
                this.initialError = error;
            }
        },
        methods: {
            update(e) {
                if (this.validate){
                    this.initialError = this.validate(e.target.value) || '';
                    
                    this.$emit('onvalid', this.initialError, e.target.name)
                }

                this.$emit('input', e.target.value)
            },

            clear() {
                this.$emit('input', '')
            }
        },
    }
</script>