import React,{Component} from 'react';
import axios from 'axios';

import './full-post.css';

class FullPost extends Component {
    componentDidUpdate () {
        if (this.props.id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    console.log(response);
                });
        }
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a post</p>;

        if (this.props.id) {
            post = (
                <div className="full-post">
                    <h1>title</h1>
                    <p>content</p>
                    <div className="edit">
                        <button className="delete">delete</button>
                    </div>
                </div>
            )
        }

        return post;
    }
}

export default FullPost;
