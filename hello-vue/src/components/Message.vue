<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <slot name='header'></slot>
        </div>
        <div class="panel-body">
            <slot></slot>
        </div>
        <div class="panel-footer">
            <slot name='footer'></slot>
        </div>
    </div>
</template>

<script>
    export default {

    }

</script>