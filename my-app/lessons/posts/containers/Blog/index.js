import React, {Component} from 'react';
import axios from 'axios';

import Post from '../../components/Post/';
import './blog.css';


class Blog extends Component {
    // fetching the data
    componentDidMount() {
        // can't store in const because of async
        //const posts = axios.get('https://jsonplaceholder.typicode.com/posts');

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
            });
    };

    render () {
        return (
            <div>
                <section className="posts">
                    <Post />
                </section>
            </div>
        );
    }
}

export default Blog;
