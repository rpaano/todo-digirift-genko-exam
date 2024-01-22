<template>
  <v-card min-width="600" class="d-flex px-3 pt-3">
    <v-text-field
      label="edit Task"
      v-model="editTask"
      clearable
      class="mr-3"
    />
    <v-btn :disabled="!editTask" color="blue" icon="mdi-tag-edit" @click="emit('editTask', { id: item.id, name: editTask })"></v-btn>
  </v-card>
</template>

<script lang="ts" setup>
  import type { Task } from '~/types/index.d.ts'

  const { item } = defineProps<{
    item: Task
  }>()

  const editTask = ref(item.name)

  const emit = defineEmits(['editTask'])

</script>

<style scoped lang="scss">
@import url('~/assets/scss/components/todo-list/_header.scss');
</style>
