<template>
     <button :type="type" class="btn" :disabled='disabled'><i class='fa fa-spinner fa-spin ' v-if='loading'></i>
        <slot></slot>
     </button>
</template>

<script>
    export default {
        name: 'form-button',
        props:['disabled', 'type', 'loading'],
    }
</script>