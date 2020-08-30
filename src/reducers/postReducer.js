import { NEW_POST, FETCH_POSTS } from '../actions/types'

//here we define posts as array with name items, single added post required for post submission as object with name item
const initialState = {
    items: [],
    item: {}

}
export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_POSTS:
            //returns the global state and storing posts in state.posts.items, posts were defined as payload in postActions.js
            return (
                {
                    ...state,
                    items: action.payload
                }
            )
        case NEW_POST:
            return (
                {
                    //returns the global state and storing newly added post in state.posts.item.
                    // post was defined as payload in postActions.js
                    // as the API is only for mocking and doesn't really add a post to the database , we manually append it to items
                    ...state,
                    item: action.payload,
                    items:[action.payload , ...state.items]
                }
            )
        default: return state;
    }

}