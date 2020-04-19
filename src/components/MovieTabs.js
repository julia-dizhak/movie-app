import React from "react";
import classNames from "classnames";

export default function MovieTabs(props) {
  const { sortBy, updatedSortBy } = props;

  const getClassTab = value => {
    return `nav-link ${sortBy === value ? 'active' : null}`
  }

  return (
    <ul className="tabs nav nav-pills mb-3 mt-3 justify-content-center">
      <li className="nav-item mr-3">
        <button
          className={getClassTab('popularity.desc')}
          onClick={() => updatedSortBy('popularity.desc')}
          >
          Popularity
        </button>
      </li>
      <li className="nav-item mr-3">
        <button
          className={getClassTab('revenue.desc')}
          onClick={() => updatedSortBy('revenue.desc')}
        >
          Revenue
        </button>
      </li>
      <li className="nav-item">
        <button
          className={getClassTab('vote_average.desc')}
          onClick={() => updatedSortBy('vote_average.desc')}
        >
          Vote average
        </button>
      </li>
    </ul>
  );

}

