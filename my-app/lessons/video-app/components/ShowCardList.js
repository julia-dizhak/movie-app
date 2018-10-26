import React from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import preload from '../data/data.json';

// const Div = styled.div`
//     width: 32%;
//     border: 2px solid #333;
//     border-radius: 4px;
//     margin-bottom: 25px;
//     padding-right: 15px;
//     overflow: hidden;
// `;

//console.log(Div);

function ShowCard(props) {
    const { title, year, description } = props;

    return (
        <div className="card">
            <h3>{title}</h3>
            <span>{year}</span> 
            <p>{description}</p>                                 
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
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}