import React from 'react';
import preload from './../data/data.json';

export default function Search(props) {
    return (
        <div className="search">
            <pre>
                <code>
                    {JSON.stringify(preload, null, 4)}
                </code>
            </pre>    
        </div>
    );
}
