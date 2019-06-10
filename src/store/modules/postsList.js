import Vue from 'vue'
import { POSTS, USERS } from '../mutation-types'

export default {
    state: {
        posts: [],
        users: [],
    },
    mutations: {
        [POSTS]: (state, posts) => state.posts = posts,
        [USERS]: (state, users) => state.users = users,
    },
    actions: {
        [POSTS] ({commit}){
            Vue.axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(({data}) => {
                    commit(POSTS, data)
                })
                .catch( (e) => {
                    console.log(e);
                })
        },
        [USERS] ({commit}){
            Vue.axios.get('https://jsonplaceholder.typicode.com/users')
                .then(({data}) => {
                    commit(USERS, data)
                })
                .catch( (e) => {
                    console.log(e);
                })
        },
    },
    getters: {
        getPostsUsers: state => {
            const users = state.users;
            return state.posts.map( post => {
                users.forEach( user => {
                    if(post.userId === user.id){
                        post['userName'] = user.name;
                    }
                });
                return post;
            })
        },
    }
}