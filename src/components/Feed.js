import axios from 'axios'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import Post from './Post'

class Feed extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount = async () => {
        try {
            const res = await axios.get("/api/posts")
            this.setState({posts: res.data})
        } catch (err) {
            console.log(err.response.request.response)
        }
    }

    render() {
        const postsMapped = this.state.posts.map(post => <Post key={post.post_id} post={post} user={this.props.user}/>)
        return (
            <div>
                {!this.props.isLoggedIn ? (
                    <div>
                        Feed
                    </div>
                ) : (
                    <div>
                        Welcome, {this.props.user.username} to the Bird Feeder
                    </div>
                )}
                {postsMapped}
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Feed)
