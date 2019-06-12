import jsonplaceholderApi from '../../services/api/jsonplaceholder'
import { MUTATE_POSTS, MUTATE_USERS, LOAD_POSTS, LOAD_USERS, GET_USER } from "../mutation-types";

export default {
    state: {
        posts: [],
        users: [],
    },
    mutations: {
        [MUTATE_POSTS]: (state, posts) => state.posts = posts,
        [MUTATE_USERS]: (state, users) => state.users = users,
    },
    actions: {
        [LOAD_POSTS] ({commit}) {
            jsonplaceholderApi.getPosts()
                .then(({data}) => {
                    commit(MUTATE_POSTS, data)
                })
                .catch( (e) => {
                    console.log(e);
                })
        },
        [LOAD_USERS] ({commit}) {
            jsonplaceholderApi.getUsers()
                .then(({data}) => {
                    commit(MUTATE_USERS, data)
                })
                .catch( (e) => {
                    console.log(e);
                })
        },
    },
    getters: {
        [GET_USER]: state => id => {
            const users = state.users;
            let userRes = {};
            users.forEach(user => {
                if (user.id === id) {
                    userRes = user;
                }
            });
            return userRes;

        },
    }
}