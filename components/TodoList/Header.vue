<template>
  <v-toolbar color="gray my-toolbar">
    <v-btn 
      class="text-none"
      color="blue"
      variant="flat"
    >
      Tasks {{ countTasks }}
    </v-btn>
    <v-btn 
      class="text-none"
      color="blue"
      variant="flat"
    >
      Tasks Done {{ countDoneTasks }}
    </v-btn>
    <v-btn 
      class="text-none"
      color="red"
      variant="flat"
      prepend-icon="mdi-delete"
      @click="emit('deleteDone')"
    >
      Tasks Done
    </v-btn>
    <v-btn 
      class="text-none"
      color="red"
      variant="flat"
      prepend-icon="mdi-delete"
      @click="emit('deleteAll')"
    >
      Tasks
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts" setup>

  const emit = defineEmits<{
    (e: 'deleteDone'): void
    (e: 'deleteAll'): void
  }>()
  const { countTasks , countDoneTasks } = defineProps<{
    countTasks?: number
    countDoneTasks?: number
  }>()

</script>

<style scoped lang="scss">
@import url('~/assets/scss/components/todo-list/_header.scss');
</style>
