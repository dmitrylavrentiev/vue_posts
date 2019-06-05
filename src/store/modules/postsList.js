import Vue from 'vue'
import { GET_POSTS, GET_USERS } from '../mutation-types'

export default {
    state: {
        posts: [],
        users: [],
    },
    mutations: {
        [GET_POSTS]: (state, posts) => state.posts = posts,
        [GET_USERS]: (state, users) => state.users = users,
    },
    actions: {
        [GET_POSTS] ({commit}){
            Vue.axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(({data}) => {
                    commit(GET_POSTS, data)
                })
                .catch( (e) => {
                    console.log(e);
                })
        },
        [GET_USERS] ({commit}){
            Vue.axios.get('https://jsonplaceholder.typicode.com/users')
                .then(({data}) => {
                    commit(GET_USERS, data)
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