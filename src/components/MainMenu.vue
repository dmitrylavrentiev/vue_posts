<template>
    <v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn @click="routeHome" flat>Home</v-btn>
            <v-btn @click="routeAddPost" flat>Add post</v-btn>
            <v-btn @click="lesson1" flat>Color</v-btn>
            <v-btn @click="lessons" flat>Lessons</v-btn>
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
            lesson1(){
                this.$router.push({ name: 'lesson1'});
            },
            lessons(){
                this.$router.push({ name: 'lessons'});
            },
        }
    }
</script>

<style scoped>

</style>