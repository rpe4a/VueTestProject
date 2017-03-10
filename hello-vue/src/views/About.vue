<template>
  <div>
      <h1>About</h1>
      <div class="panel panel-default">
        <div class="panel-heading">Write u status</div>
        <div class="panel-body">
          <AddStatusForm></AddStatusForm>
        </div>
      </div>
    </div>
</template>

<script>
  import AddStatusForm from '../components/AddStatusForm.vue'

  export default {
    name: 'about',
    components: {
      AddStatusForm
    }
  }

</script>