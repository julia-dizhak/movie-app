import React, {Component} from 'react';
import axios from 'axios';

import Post from '../../components/Post/';
import './blog.css';


class Blog extends Component {
    state = {
        posts: []
    };

    // fetching the data
    componentDidMount() {
        // can't store in const because of async
        //const posts = axios.get('https://jsonplaceholder.typicode.com/posts');

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // example of transformation
                const posts = response.data.slice(0,4); // get only first 4 posts
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                //this.setState({posts: response.data});
                this.setState({posts: updatedPosts});
                //console.log(response);
            });
        //this.setState({posts: response.data}); will not work
    };

    render () {
        const posts = this.state.posts.map(post => {
            return <Post
                       key={post.id}
                       title={post.title}
                       author={post.author}/>
        });

        return (
            <div>
                <section className="posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;
