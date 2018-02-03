import React, {Component} from 'react';
import axios from 'axios';

import Post from '../../components/Post/';
import './blog.css';
import FullPost from '../../components/FullPost/';
import NewPost from '../../components/NewPost/';


class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
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
                        author: 'Julia Dizhak'
                    }
                });
                //this.setState({posts: response.data});
                this.setState({posts: updatedPosts});
                console.log(response);
            })
            .catch(error => {
                console.log(error);
                this.setState({error: true});
            })
        //this.setState({posts: response.data}); will not work
    };

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };

    render () {
        let posts = <p style={ {textAlign: 'center', color: 'red'} }>Something went wrong.</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                           key={post.id}
                           title={post.title}
                           author={post.author}
                           clicked={() => this.postSelectedHandler(post.id)} />
            });
        }

        return (
            <div>
                <section className="posts">
                    {posts}
                </section>

                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>

                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
