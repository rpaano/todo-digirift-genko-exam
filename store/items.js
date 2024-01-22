// store/items.js
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { initialItems } from '@/data/initial';

export const useItemStore = defineStore('items', () => {
	if (localStorage.getItem('items') === null) {
		localStorage.setItem('items', JSON.stringify(initialItems));
	}

	const items = ref(JSON.parse(localStorage.getItem('items')));

	watch(items, (newItems) => {
		localStorage.setItem('items', JSON.stringify(newItems));
	}, { deep: true });

	const addItem = (item) => {
		if (item === '') {
			return;
		}

		items.value.push({
			'id': items.value.length + 1,
			'name': item,
			'done': false,
    })
	};

	const deleteAll = () => {
		items.value.splice(0, items.value.length); 
	};

	const deleteAllDoneTasks = () => {
		for (let i = items.value.length - 1; i >= 0; i--) {
			if (items.value[i].done) {
				items.value.splice(i, 1);
			}
		}
	};

	const deleteItem = (itemId) => {
		const index = items.value.findIndex(item => item.id === itemId);
		if (index !== -1) {
			items.value.splice(index, 1);
		}
	};

	function toggleDone(itemId) {
		const item = items.value.find(item => item.id === itemId);
		if (item) {
			item.isDone = !item.isDone;
		}
	};

	return { items, addItem, deleteItem, deleteAll, toggleDone, deleteAllDoneTasks };
});

