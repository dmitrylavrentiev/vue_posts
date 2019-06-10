import Vue from 'vue'

let baseUrl = 'https://jsonplaceholder.typicode.com';

export default {

    getPosts () {
        return Vue.axios.get(`${baseUrl}/posts`)
            .then(data => {
                // do somethings
                return data;
            });
    },
    getUsers () {
        return Vue.axios.get(`${baseUrl}/users`);
    },
    getPost(post_id) {
        return Vue.axios.get(`${baseUrl}/posts/${post_id}`);
    },
    getComents(post_id) {
        return Vue.axios.get(`${baseUrl}/comments?postId=${post_id}`);
    },
    setPost(title, body, userId = 1) {
        Vue.axios({
            method: 'post',
            url: `${baseUrl}/posts`,
            data: {
                userId,
                title,
                body
            }
        });
    }

}