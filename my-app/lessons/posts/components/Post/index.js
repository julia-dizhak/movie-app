import React from 'react';

import './post.css';


const post = (props) => (
    <div onClick={props.clicked}>
        <article className="post">
            <h1>{props.title}</h1>
            <div className="info">
                <p className="author">{props.author}</p>
            </div>
        </article>
    </div>
);

export default post;
