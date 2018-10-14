import React from 'react';
import PropTypes from 'prop-types';
import preload from '../data/data.json';

function ShowCard(props) {
    const { title, year } = props;

    return (
        <div className="card">
            <h3>{title}</h3>
            <span>{year}</span>                                  
        </div>
    );
}

export default function ShowCardList(props) {
    return (
        <div className="card-list">
            <h2>Data:</h2>
            {/* <pre>
                <code>
                    {JSON.stringify(preload, null, 4)}
                </code>
            </pre>     */}
            <div>
                {preload.shows.map(
                        (show, index) => (
                            // <ShowCard 
                            //     title={show.title}
                            //     year={show.year} 
                            // />   
                            <ShowCard 
                                {...show} 
                                key={show.imdbID}
                            />                 
                        )
                    )
                }
            </div>
        </div>
    );
}

ShowCard.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
}