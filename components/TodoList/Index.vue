<template>
  <v-card max-width="600">
    <TodoListHeader @delete-done="deleteAllDoneTasks" @deleteAll="deleteAll" :countTasks="countTasks" :countDoneTasks="countDoneTasks" />
    <v-list class="py-2" max-height="500">
      <v-list-item :value="item.name"  v-for="item in items" :key="item.id">
        <div class="item-content">
          <v-checkbox-btn v-model="item.done" @change="toggleDone(item.id)"></v-checkbox-btn>
          <v-list-item-title :class="{ 'text-decoration-line-through': item.done }" :disabled="true">{{ item.name }}</v-list-item-title>
          <div class="item-content-btn">
            <v-btn color="blue" icon="mdi-tag-edit"></v-btn>    
            <v-btn color="red" icon="mdi-delete" @click="deleteItem(item.id)"></v-btn>  
          </div>
        </div>
      </v-list-item>
    </v-list>
    <v-divider class="mb-4"></v-divider>
    <div class="d-flex justify-center px-4 py-2">
      <v-text-field
        label="Add tasks"
        v-model="addNewTask"
        clearable
      />
      <v-btn  class="mx-2" type="submit" @click="addItem(addNewTask), addNewTask = ''" icon="mdi-plus" />
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import { useItemStore } from "~/store/items";
  const addNewTask = ref<string>('')

  const { items, addItem, toggleDone, deleteItem, deleteAllDoneTasks, deleteAll } = useItemStore();

  const newItems = ref(items)
  
  const countTasks = computed(() => {
    return newItems.value.length;
  });

  const countDoneTasks = computed(() => {
    return items.filter((item: { done: any; }) => item.done).length;
  });
</script>


 <style scoped lang="scss">
@import url('~/assets/scss/components/todo-list.scss');
</style>
