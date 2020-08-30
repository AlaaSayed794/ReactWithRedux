import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createPost} from '../actions/postActions'
import PropTypes from 'prop-types'

class PostForm extends Component {
    constructor(props)
    {
        super(props)
        this.state= {
            title:'',
            body:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit = (e)=>{
        e.preventDefault();

        const post = {title:this.state.title, body:this.state.body}
        this.props.createPost(post)

    }
    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit} action="">
                    <div>
                        <label htmlFor="title">Title</label>
                        <br/>
                        <input id="title" type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label htmlFor="body">Body</label>
                        <br/>
                        <textarea id="body" name="body" value={this.state.body} onChange={this.onChange}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
PostForm.propTypes = 
{
    createPost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired
}
const mapStateToProps= (state ) =>({
    post:state.posts.item
})
export default connect(mapStateToProps,{createPost})(PostForm);