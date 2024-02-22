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
import axios from 'axios';

    export default {
        data() {
            return {
                items: [],
            };
        },
        
        mounted() {
            axios.get('https://api.example.com/items').then((response) => {
                this.items = response.data;
            });
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