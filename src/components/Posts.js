import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'
import PropTypes from 'prop-types'

class Posts extends Component {


    componentDidMount()
    {
        this.props.fetchPosts()
    }
    
    
    render() {
        const postItems =  this.props.posts.map(post =>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ) );
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

Posts.propTypes = 
{
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object.isRequired
}

const mapStateToProps= (state ) =>({
    posts:state.posts.items,
    newPost:state.posts.item
})

// connect redux with react component, passing mapStateToProps to pass global state to props,
// passing object of used functions from actions which is here only fetchPosts
// and finally our component Posts
export default connect(mapStateToProps,{fetchPosts})(Posts);
