import {combineReducers} from 'redux'
import postReducer from './postReducer'

//index file combines all reducers, here we only have the postReducer
export default combineReducers(

    {
        posts:postReducer
    }
)