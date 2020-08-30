import { NEW_POST, FETCH_POSTS } from './types'

//simple get operation from jsonplaceholder's API that stores the acquired posts in dispatch's payload
export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts

        }))

}
//simple post operation that stores the newly added post to dispatch's payload
export const createPost = (postData) => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'POST',
        headers:{'content-type':'application/json'
        },
        body:JSON.stringify(postData)}).then(res=>res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post

        }))

}