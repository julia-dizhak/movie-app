import React from 'react';

import './post.css';


const post = (props) => (
    <article className="post">
        <h1>{props.title}</h1>
        <div className="info">
            <p className="author">{props.author}</p>
        </div>
    </article>
);

export default post;
