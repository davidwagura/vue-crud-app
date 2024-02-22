<template>
    <div>
        <h2>Add New Item</h2>
        <form @submit.prevent="addItem">
            <label for="itemName">ItemName:</label>
            <input type="text" id="itemName" v-model="newItemName" required />
            <button type="submit">Add Item</button>
        </form>
    </div>
</template>

<script>
export default { 
    data() {
        return {
            newItemName: '',
        };
    },
    methods: {
        addItem() {
            //implement add functionality
        },
    },
};
</script>