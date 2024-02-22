<template>
    <div>
        <h2>All Items</h2>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
                <button @click="editItem(item)">Edit</button>
                <button @click="deleteItem(item.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [],
            };
        },
        methods: {
            editItem(item) {
                //implement edit functionality
            },
            deleteItem(item) {
                //implement delete functionality
            },
        },
        mounted() {
            //fetch items from the serveror an API
            //add assign them to the 'items' data property
        },
    };
</script>