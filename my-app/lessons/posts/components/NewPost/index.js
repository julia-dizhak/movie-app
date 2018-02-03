import React, { Component } from 'react';

import './new-post.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Vasyl Dizhak'
    };

    render () {
        return (
            <div className="new-post">
                <h1>Add a Post</h1>

                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>

                <textarea rows="4"
                          value={this.state.content}
                          onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>

                <select
                    value={this.state.author}
                    onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Julia">Julia</option>
                    <option value="Vasyl">Vasyl</option>
                </select>

                <button>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
