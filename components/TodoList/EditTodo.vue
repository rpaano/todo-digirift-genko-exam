<template>
  <v-card min-width="600" class="d-flex px-3 pt-3 gap-">
    <v-text-field
      label="edit Task"
      v-model="editTask"
      clearable
    />
    <v-btn color="blue" icon="mdi-tag-edit" @click="emit('editTask', { id: item.id, name: editTask })"></v-btn>
  </v-card>
</template>

<script lang="ts" setup>
  const { item } = defineProps<{
    item: { id: number, name: string, done: boolean }
  }>()

  const editTask = ref(item.name)

  const emit = defineEmits<{
    (e: 'editTask', {}): void
  }> ()

</script>

<style scoped lang="scss">
@import url('~/assets/scss/components/todo-list/_header.scss');
</style>
