<template>
    <v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn @click="routeHome" flat>Home</v-btn>
            <v-btn @click="routeAddPost" flat>Add post</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "MainMenu",
        methods: {
            routeHome(){
                this.$router.push({ name: 'home'});
            },
            routeAddPost(){
                this.$router.push({ name: 'add_post'});
            },
        }
    }
</script>

<style scoped>

</style>