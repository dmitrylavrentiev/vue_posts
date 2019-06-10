import { POSTS, USERS } from '../mutation-types'
import jsonplaceholderApi from '../../services/api/jsonplaceholder'

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
            jsonplaceholderApi.getPosts()
                .then(({data}) => {
                    commit(POSTS, data)
                })
                .catch( (e) => {
                    console.log(e);
                })
        },
        [USERS] ({commit}){
            jsonplaceholderApi.getUsers()
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