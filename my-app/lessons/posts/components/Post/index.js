import React from 'react';
import { withRouter } from 'react-router-dom';

import './post.css';

const post = props => {
    console.log(props);

    return (
        <div onClick={props.clicked}>
            <article className="post">
                <h1>{props.title}</h1>
                <div className="info">
                    <p className="author">{props.author}</p>
                </div>
            </article>
        </div>
    );
};

export default withRouter(post);
