import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Posts from './Posts';
import NewPost from './NewPost';

import './blog.css';

class Blog extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/posts/">Home</Link>
                            </li>
                            <li>
                                <Link to="/posts/new-post">New post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* <Route path='/posts/' exact render={() => <Posts />}/>
                <Route path='/posts/' exact render={() => <h1>sdf</h1>}/> */}
                <Route path="/posts/" exact component={Posts} />
                <Route path="/posts/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;
